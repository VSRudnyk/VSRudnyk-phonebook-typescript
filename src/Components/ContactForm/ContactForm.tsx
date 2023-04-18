import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { FormWrapper } from './ContactForm.styled';

interface SubmitValues {
  name: string;
  number: string;
}

interface ContactFormProp {
  addContact: (data: SubmitValues) => void;
  loading: boolean;
}

export const ContactForm = ({ addContact, loading }: ContactFormProp) => {
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

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SubmitValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SubmitValues) => {
    await addContact(data);
    resetField('name');
    resetField('number');
  };

  return (
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
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.number?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={1}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              size="small"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Paper>
    </FormWrapper>
  );
};
