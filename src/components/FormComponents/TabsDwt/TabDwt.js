import React from 'react'
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabDwt = ({index = 0,label,onSelectTab}) => {
    const handleClick = () => {
        onSelectTab(index);
    };

  return (
    <Tab label={label} {...a11yProps(index)}  onClick={handleClick} />
  )
}

export default TabDwt