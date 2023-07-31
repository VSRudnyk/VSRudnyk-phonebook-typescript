import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { useRegisterMutation } from '../../redux/authAPI';
import { Background, Container, FormWrapper } from './RegisterView.styled';

interface SubmitValues {
  name: string;
  email: string;
  password: string;
}

export default function RegisterView() {
  const [registerUser, { isSuccess }] = useRegisterMutation();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Fullname is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
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
    await registerUser(data);
    resetField('name');
    resetField('email');
    resetField('password');
  };

  return (
    <Background>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Paper
            elevation={3}
            sx={{
              width: 'auto',
              boxShadow: '3px 3px 5px 0px rgba(25, 118, 210, 1)',
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
                    id="email"
                    label="Email"
                    size="small"
                    fullWidth
                    margin="dense"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5}>
                  <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth
                    margin="dense"
                    {...register('password')}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Paper>
        </FormWrapper>
        {isSuccess && <Navigate to="/login" />}
      </Container>
    </Background>
  );
}
