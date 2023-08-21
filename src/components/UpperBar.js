import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BadgeDwt from './Extensions/BadgeDwt';
import MenuIcon from '@mui/icons-material/Menu';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TextSize from './TextSize'

import Box from '@mui/material/Box';
import {Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

const drawerWidth = 240;
const chatWidth = 65;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...({background: theme.palette.grey[50],
    color: theme.palette.grey[600],
    marginRight: `${chatWidth}px`,
    width: `calc(100% - ${chatWidth}px)`,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth + chatWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    marginRight: `${chatWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const UpperBar = ({handleDrawerOpen, open}) => {
  
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

  return (
     
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            
            <IconButton  color="inherit">
             <EmailOutlinedIcon/>
            </IconButton>

            <IconButton  color="inherit">
              <BadgeDwt badgeContent={1000} size='sm'>
                <TextSize/>
              </BadgeDwt>
            </IconButton>

            <IconButton  color="inherit">
             <GroupsOutlinedIcon />
            </IconButton>

            <IconButton  color="inherit">
              <StarRateRoundedIcon size="inherit" sx={{color: yellow[700]}}/>
            </IconButton>
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box title="Open settings" sx={{justifyContent:'space-between'}}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, pl:'30px' , borderRadius: '30px'}}>
                  <Tooltip sx={{flexDirection: 'column', textAlign: 'end'}}>
                      <Typography variant="body1" color='secondary' fontWeight='400' sx={{color: grey[600],}}> Abdulrhman Aliyan </Typography>
                      <Typography variant="body2" sx={{color:grey[400],}}> front-end developer </Typography>
                  </Tooltip>
                <Avatar alt="Abd" sx={{bgcolor:'#ffb63d', mx:'5px'}}> A </Avatar>
              </IconButton>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

  );
}

export default UpperBar;