import React, { useState } from 'react';
import { SelectContainer } from './styled';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  onChange: (value: string) => void;
};

const Select: React.FC<Props> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <SelectContainer>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default Select;
