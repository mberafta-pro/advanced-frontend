import { Search } from '@mui/icons-material';
import { FilledInput, InputAdornment, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '@hooks/useDebounce';

export interface GlobalSearchInputProps {
  handleChange: (value: string) => void;
  placeHolder?: string;
}

const DEFAULT_PLACEHOLDER = 'Recherche globale';

const StyledInput = styled(FilledInput)({
  borderRadius: 25,
  fontSize: 12,
  padding: 5,
  '> input': {
    padding: 5,
  },
});

export const GlobalSearchInput: React.FC<GlobalSearchInputProps> = ({
  handleChange,
  placeHolder = DEFAULT_PLACEHOLDER,
}) => {
  const [input, setInput] = useState<string>('');
  const debounced = useDebounce(input, 500);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    handleChange(debounced);
  }, [debounced]);

  return (
    <StyledInput
      endAdornment={
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      }
      placeholder={placeHolder}
      disableUnderline={true}
      onChange={onChange}
      size="small"
    />
  );
};
