import React from 'react'
import {TextFieldDwt, SelectDwt, MeasureFieldDwt, PasswordDwt} from './FormComponents/TextFieldDwt'
import TableDwt from './FormComponents/TableDwt';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TableView from './Table/TableView';


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

  const student = [
    {
      value: '0',
      label: 'مزاولة مهنة معالج حكمي او معالج طبيعي',
    },
    {
      value: '1',
      label: 'مزاولة مهنة مساعد معالج حكمي',
    },
    {
      value: '3',
      label: 'مزاولة مهنة مساعد صيدلي',
    },
    {
      value: '4',
      label: 'مزاولة مهنة طب امتياز اسنان',
    },
    {
      value: '5',
      label: 'مزاولة مهنة طب الامتياز',
    },
    {
      value: '6',
      label: 'مزاولة مهنة طب الاسنان',
    },
    {
      value: '7',
      label: 'مزاولة مهنة الممرض القانوني',
    },
    {
      value: '8',
      label: 'مزاولة مهنة القابلة القانونية',
    },
    {
      value: '9',
      label: 'مزاولة مهنة الطب/لغايات الالتحاق في البرنامج التعليمي',
    },
  ];

  const nationality = [
    {
      value: '0',
      label: 'اختر مدخلاً',
    },
    {
      value: '1',
      label: 'غير أردني',
    },
    {
      value: '2',
      label: 'أردني + غير أردني',
    },
    {
      value: '3',
      label: 'أردني',
    },
  ]
  
  
  return (
    <div>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
            <SelectDwt selectItems={student} label = 'الطلب'/>
        </Grid>

        <Grid item xs={3} >
            <TextFieldDwt label = 'رقم الطلب' type='number' />
        </Grid>

        <Grid item xs={3} >
            <SelectDwt label = 'الجنسية'  selectItems={nationality}/>
        </Grid>

        <Grid item xs={3} >
            <TextFieldDwt label = 'الرقم الوطني' type='number' />
        </Grid>

      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>

        <Grid item xs={3} >
          <TextFieldDwt label='الاسم الاول' />
        </Grid>

        <Grid item xs={3} >
          <TextFieldDwt label='اسم الاب' />
        </Grid>

        <Grid item xs={3} >
          <TextFieldDwt label='اسم الجد' />
        </Grid>

        <Grid item xs={3} >
          <TextFieldDwt label='العائلة' />
        </Grid>

      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>
        
        <Grid item xs={3} >
          <TextFieldDwt label='اسم الام' />
        </Grid>

      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>
        <Grid item xs={12} >
          <TableDwt />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{marginBottom: '50px'}}>
        <Grid item xs={12} >
          <TableView />
        </Grid>
      </Grid>

    </div>
  )
}

export default FormLayout;