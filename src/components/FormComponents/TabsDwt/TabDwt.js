import React from 'react'
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabDwt = ({index,label}) => {
  return (
    <>
        <Tab label={label} {...a11yProps(index)} />
    </>
  )
}

export default TabDwt