import { TextField } from '@mui/material';
import { Container } from './Filter.styled';

interface FilterProps {
  value: string;
  onChange: (name: string) => void;
}

export const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Find contact by name"
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        autoComplete="off"
        size="small"
      />
    </Container>
  );
};
