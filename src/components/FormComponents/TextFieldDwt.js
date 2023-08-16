import React, { Component } from 'react';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { TextField, MenuItem, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton } from '@mui/material';

const defaultSx = {
  width: '100%',
}

const TextFieldDwt = ({label, sx, type}) => {
  const setLabel = (label === undefined) ? '' : label;
  const setType = (type === undefined) ? 'text' : type;

  return (
    <TextField id="outlined-basic" label={setLabel} sx={{...sx, ...defaultSx}} variant="outlined" type = {setType}/>
  )
};

const SelectDwt = ({label, selectItems, sx, type}) => {
  
const currencies = [
  {
    value: '',
    label: '',
  },
  {
    value: '',
    label: '',
  },
];


const setItems = (selectItems === undefined) ? currencies : selectItems;
const setLabel = (label === undefined) ? 'select' : label;
const setType = (type === undefined) ? 'text' : type;

return (
    <TextField
      id="outlined-select-currency"
      select
      sx = {{...defaultSx, ...sx}}
      label = {label}
      defaultValue = { setItems[0]['value'] }
      helperText = "Please select your currency"
      type= {setType}
    >
      {setItems.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          { option.label }
        </MenuItem>
      ))}
    </TextField>
  )
};


const MeasureFieldDwt = ({label, measure, sx, start, type}) => {
  
  const setLabel = (label === undefined) ? 'select' : label;
  const setMeasure = (measure === undefined) ? 'kg' : measure;
  const setType = (type === undefined) ? 'text' : type;
  const inputProps = start
    ? { startAdornment: <InputAdornment position="start">{setMeasure}</InputAdornment> }
    : { endAdornment: <InputAdornment position="end">{setMeasure}</InputAdornment> };

  return (
    <TextField
      label = {label}
      sx = {{ ...defaultSx, ...sx}}
      InputProps = {inputProps}
      type = {setType}
    />
    )
  };

  
  const PasswordDwt = ({label, sx}) => {
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  
    const setLabel = (label === undefined) ? 'select' : label;

  
    return (
      <FormControl sx={{ ...defaultSx, ...sx}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'Text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      )
    };
  

export {TextFieldDwt, SelectDwt, MeasureFieldDwt, PasswordDwt};