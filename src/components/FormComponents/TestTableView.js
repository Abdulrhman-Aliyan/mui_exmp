import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid } from '@mui/material';
import AddData from './AddData';
import DataTable from './DataTable';

function TestTableView() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAddData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleOpenDialog}>
            Add Data
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataTable data={data} />
        </Grid>
      </Grid>
      <AddData
        open={dialogOpen}
        onClose={handleCloseDialog}
        onAddData={handleAddData}
      />
    </Container>
  );
}

export default TestTableView;
