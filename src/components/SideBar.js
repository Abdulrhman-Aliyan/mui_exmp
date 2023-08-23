import './SideBar.css';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { blueGrey, grey } from '@mui/material/colors';
import { Box, Avatar, Typography, Toolbar, Tooltip } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideBar = ({handleDrawerClose, open}) => {
  const theme = useTheme();

  return (
<>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: blueGrey[900],
            color: grey[400],
          }, 
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Toolbar>
            <IconButton onClick={handleDrawerClose} 
            sx={{
                color:grey[400],
                '&: hover' : {
                  backgroundColor: grey.A700,
                }
              }}>
              {theme.direction === 'ltr' ? <MenuIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </DrawerHeader>
        <Toolbar sx={{flexDirection:'column', justifyContent:'center'}}>
          <Avatar alt="Abd" sx={{bgcolor:'#ffb63d', width: '4.6em', height: '4.6em', my: '15px'}}>A</Avatar>
          <Typography variant="body1" sx={{color:grey[50]}}>Abdalrhman Aliyan</Typography>
          <Typography variant="body2" sx={{color:grey[400]}}>Abdalrhman Aliyan</Typography>
        </Toolbar>
        <Box sx={{mt:'30px'}}>
        
          <Typography variant="body1" color='secondary' fontWeight='700' fontSize='1.1em' sx={{mx: '20px'}}>My items</Typography>
          <Typography variant="body2" sx={{ color:grey[400], mx: '20px' }}> item to choose from </Typography>

          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <>
              < ListItem key={text} disablePadding sx={{px:'15px'}} >
                <Link to={ index % 2 === 0 ? "/blogs":"/" } width={'100%'} className='sidebarListLink'>
                <ListItemButton
                  sx={{
                    borderRadius: '5px',
                    '&: hover': {
                      backgroundColor: grey.A700,
                    }
                  }}
                >

                  <ListItemIcon
                    sx={{
                      color: grey[400],
                      width: '10px',
                    }}>
                    { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> } 
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  
                </ListItemButton>
                </ Link>
              </ListItem>
              </>
            ))}
          </List> 

        </Box>
      </Drawer>
      <Outlet />
  </>
  );
}

export default SideBar;
