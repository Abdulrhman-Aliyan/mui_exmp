import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import FormLayout from '../../FormLayout';
import TabPanelDwt from './TabPanelDwt';
import TabDwt from './TabDwt';


export default function TabsDwt() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
};

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <TabDwt label="Item One" index={0} />
          <TabDwt label="Item Two" index={1} />
        </Tabs>
      </Box>
      <TabPanelDwt value={value} index={0}>
        <FormLayout />
      </TabPanelDwt>
      <TabPanelDwt value={value} index={1}>
        Item Two
      </TabPanelDwt>
    </Box>
  );
}
