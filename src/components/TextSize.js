import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 70,
        label: '70',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 90,
        label: '90',
    },
    {
        value: 100,
        label: '100',
    },
  ];
function valuetext(value) {
    return `${value}°C`;
}
  
export default function TextSize() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton variant="contained" {...bindTrigger(popupState)}>
            <TextFieldsRoundedIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
          {/* <MenuItem sx={{pointerEvents: 'none'}} /> */}
            <MenuItem 
            disableRipple={true}
            sx={{'&[class^="MuiButtonBase-root MuiMenuItem-root"]': {
                    '&:hover': {
                        bgcolor: 'rgba(0,0,0,0)'
                    },
                    '&:active': {
                        bgcolor: 'rgba(0,0,0,0)'
                    },
                    '&:focus': {
                        bgcolor: 'rgba(0,0,0,0)'
                    },
                },
            }} >
                <Box sx={{ width: '400px',  px: '30px'}}>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        step={10}
                        marks={marks}
                        min={0}
                        valueLabelDisplay="off"
                    />
                </Box>
            </MenuItem>
            {/* <MenuItem sx={{pointerEvents: 'none'}} /> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}