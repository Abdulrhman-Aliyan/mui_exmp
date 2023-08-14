import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './SideBar';
import LayoutContent from './LayoutContent';
import UpperBar from './UpperBar';
import Chat from './Chat';
import UpperBarSpace from './UpperBarSpace';

const drawerWidth = 240;
const chatWidth = 320;

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <UpperBar handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} chatWidth={chatWidth} open={open}/>
          <SideBar  handleDrawerClose={handleDrawerClose} open={open} />
          <UpperBarSpace />
        <LayoutContent />
      <Chat /> 
    </Box>
  );
}