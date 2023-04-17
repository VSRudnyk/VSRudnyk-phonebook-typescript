import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Input, Submit, ErrorMessage } from './ContactForm.styled';
import { useAddContactMutation } from '../../redux/contactsAPI';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

interface SubmitValues {
  name: string;
  number: string;
}

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: SubmitValues): void => {
    addContact(values);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <Input type="text" id="name" {...register('name')} />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>

      <label htmlFor="number">Number</label>
      <Input type="tel" id="number" {...register('number')} />
      <ErrorMessage>{errors.number?.message}</ErrorMessage>
      <Submit type="submit">Add contact</Submit>
    </Form>
  );
};
