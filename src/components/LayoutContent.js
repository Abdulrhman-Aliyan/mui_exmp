import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UpperBarSpace from './UpperBarSpace';
import FormLayout from './FormLayout';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
        marginLeft: `-${drawerWidth}px`, // to do
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const LayoutContent = ({open}) => {
  return (
    <Main open={open}>
      <UpperBarSpace />
      <FormLayout />
    </Main>
  )
}

export default LayoutContent;

