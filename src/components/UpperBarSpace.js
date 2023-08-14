import React from 'react'
import { styled, useTheme } from '@mui/material/styles';

const Space = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const UpperBarSpace = () => {
  return (
    <Space />
  )
}

export default UpperBarSpace