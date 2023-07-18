import styled from 'styled-components';
import { Box } from '@mui/material';

export const FormWrapper = styled.form`
  @media screen and (min-width: 780px) {
    width: 450px;
  }
`;

export const AddContactTitle = styled.h2`
  margin-bottom: 25px;
`;

export const ButtonContainer = styled(Box)<{ type: string }>`
  display: flex;

  justify-content: ${({ type }) =>
    type === 'update' ? 'space-between' : 'start'};
  margin-top: 10px;
  margin-left: ${({ type }) => (type === 'update' ? '15px' : '0')};
  margin-right: 15px;
`;
