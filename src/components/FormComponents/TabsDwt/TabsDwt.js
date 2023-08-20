import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormLayout from '../../FormLayout';
import TabPanelDwt from './TabPanelDwt';
import TabDwt from './TabDwt';
import TableView from '../../Table/TableView'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsDwt(children) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(`newvalue:~ ${newValue}`);
    setValue(newValue);
};

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <TabDwt label="Item One" {...a11yProps(0)} index={0} onSelectTab={setValue} />
          <TabDwt label="Item Two" {...a11yProps(1)} index={1} onSelectTab={setValue} />
        </Tabs>
      </Box>
      < TabPanelDwt value={value} index={0} >
        <FormLayout />
      </TabPanelDwt>
      < TabPanelDwt value={value} index={1} >
        <TableView />
      </TabPanelDwt>
    </Box>
  );
}
