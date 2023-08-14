import React from 'react'
import {TextFieldDwt, SelectDwt} from './FormComponents/TextFieldDwt'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const FormLayout = () => {
  return (
    <div>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
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
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt label = 'Q1' sx={{width:'100%'}} />
        </Grid>

      </Grid>
    </div>
  )
}

export default FormLayout;