import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const TextFieldDwt = ({label, sx}) => {
  const setLabel = (label === undefined) ? '' : label;

  return (
    <TextField id="outlined-basic" label={setLabel} sx={sx} variant="outlined" />
  )
};

const SelectDwt = ({label, Items, sx}) => {
  
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const setItems = (Items === undefined) ? currencies : Items;
const setLabel = (label === undefined) ? 'select' : label;

return (
    <TextField
      id="outlined-select-currency"
      select
      sx = {sx}
      label = {label}
      defaultValue = { currencies[0]['value'] }
      helperText = "Please select your currency"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          { option.label }
        </MenuItem>
      ))}
    </TextField>
  )
};



export {TextFieldDwt, SelectDwt};