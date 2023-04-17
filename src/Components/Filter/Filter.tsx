import { Form, Input } from './Filter.styled';

interface FilterProps {
  value: string;
  onChange: (name: string) => void;
}

export const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <Form>
      <label htmlFor="filter">Find contact by name</label>
      <Input
        type="text"
        id="filter"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        autoComplete="off"
      />
    </Form>
  );
};
