import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { toast } from 'react-hot-toast';
import { FormWrapper, ButtonContainer } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} from '../../redux/contactsAPI';
import { Loader } from '../Loader/Loader';

interface SubmitValues {
  id?: string;
  name?: string;
  number?: string;
}

interface ContactFormProp {
  id?: string;
  type: string;
  itemData?: SubmitValues;
  closeModal?: () => void;
}

const defaultInputValues = {
  name: '',
  number: '',
};

export const ContactForm = ({
  id,
  type,
  itemData,
  closeModal,
}: ContactFormProp) => {
  const [values, setValues] = useState(
    type === 'add' ? defaultInputValues : itemData
  );
  const { data } = useGetContactQuery('');
  const [addContact, { isLoading: adding }] = useAddContactMutation();
  const [updateContact, { isLoading: updating }] = useUpdateContactMutation();
  const [deleteContact, { isLoading: deleting }] = useDeleteContactMutation();

  const isLoading = adding || updating || deleting;

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup
      .string()
      .required('This field is Required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number is not valid'
      ),
  });

  const addMyContact = async (value: SubmitValues) => {
    for (const contact of data?.result) {
      if (contact.name === value.name) {
        toast.error(`${value.name} is already in contacts.`);
        return;
      }
    }

    await addContact(value);
    toast.success(`Contact ${value.name} has been added`);
  };

  const updateMyContact = async (value: SubmitValues) => {
    await updateContact(value);
    toast.success(`Contact ${data.name} has been updated`);
  };

  const deleteMyContact = async (id: string | undefined) => {
    await deleteContact(id);
    toast.success(`Contact ${data.name} has been deleted`);
  };

  const handleChange = (value: SubmitValues) => {
    setValues(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SubmitValues) => {
    type === 'add'
      ? await addMyContact(data)
      : await updateMyContact({ id, ...data });
    closeModal?.();
    setValues(defaultInputValues);
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Paper
          elevation={3}
          sx={{
            width: 'auto',
          }}
        >
          <Box
            sx={{
              width: 'auto',
            }}
            px={3}
            py={2}
          >
            <Grid>
              <Grid item xs={5} sm={5}>
                <TextField
                  required
                  id="name"
                  label="Name"
                  size="small"
                  fullWidth
                  margin="dense"
                  {...register('name')}
                  error={errors.name ? true : false}
                  value={values?.name}
                  onChange={event =>
                    handleChange({ ...values, name: event.target.value })
                  }
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.name?.message}
                </Typography>
              </Grid>

              <Grid item xs={5} sm={5}>
                <TextField
                  required
                  id="number"
                  label="Number"
                  size="small"
                  fullWidth
                  margin="dense"
                  {...register('number')}
                  error={errors.number ? true : false}
                  value={values?.number}
                  onChange={event =>
                    handleChange({ ...values, number: event.target.value })
                  }
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.number?.message}
                </Typography>
              </Grid>
            </Grid>

            <ButtonContainer type={type}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={adding || updating || deleting}
                size="small"
              >
                {type === 'add' ? 'Add' : 'Update'}
              </Button>
              {type === 'update' && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteMyContact(id)}
                  disabled={adding || updating || deleting}
                  size="small"
                >
                  Delete
                </Button>
              )}
            </ButtonContainer>
          </Box>
        </Paper>
      </FormWrapper>
      {isLoading && <Loader color="#2196f3" width="100" height="100" />}
    </>
  );
};
