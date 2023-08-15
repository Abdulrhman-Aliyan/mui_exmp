import React from 'react'
import {TextFieldDwt, SelectDwt, MeasureFieldDwt, PasswordDwt} from './FormComponents/TextFieldDwt'
import TableDwt from './FormComponents/TableDwt';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TestTableView from './FormComponents/TestTableView';


const FormLayout = () => {

  const names = [
    {
      value: 'Abd',
      label: 'Abd',
    },
    {
      value: 'Ahmad',
      label: 'Ahmad',
    },
    {
      value: 'Mohammed',
      label: 'Mohammed',
    },
  ];
  
  return (
    <div>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
          <TextFieldDwt label = 'Q1' sx={{width:'100%'}}/>
          <TextFieldDwt label = 'Q1' sx={{width:'100%'}}/>
        </Grid>

        <Grid item xs={3} >
          <TextFieldDwt label = 'Q1' sx={{width:'100%'}}/>
        </Grid> 

        <Grid item xs={3} >
          <TextFieldDwt label = 'Q1' sx={{width:'100%'}}/>
        </Grid> 

        <Grid item xs={3} >
          <TextFieldDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

      </Grid>

      <Grid container spacing={4}>

        <Grid item xs={3} >
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt selectItems={names} label = 'Q1' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
            <MeasureFieldDwt label = 'a' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <MeasureFieldDwt label = 'b' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <MeasureFieldDwt label = 'c' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <MeasureFieldDwt label = 'd' start sx={{width:'100%'}} />
        </Grid>

      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
            <PasswordDwt label = 'password' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <PasswordDwt label = 'password' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <PasswordDwt label = 'password' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <PasswordDwt label = 'password' start sx={{width:'200px'}} />
        </Grid>

      </Grid>

      <TableDwt />

      <TestTableView />

    </div>
  )
}

export default FormLayout;