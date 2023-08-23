import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UpperBarSpace from './UpperBarSpace';
import FormLayout from './FormLayout';
import TabsDwt from './FormComponents/TabsDwt/TabsDwt';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestForm from "./pages/TestForm";
import Testpage from "./pages/Testpage";
 

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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const LayoutContent = ({open}) => {
  return (
    <Main open={open}>
        <UpperBarSpace />
            <Routes>
              <Route path="/*" element={<TestForm />} />
              <Route path="/blogs" element={<Testpage />} />
            </Routes>
        {/* <TabsDwt /> */}
    </Main>
  )
}

export default LayoutContent;

