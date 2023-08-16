import React, { useState } from 'react';
import { Button, ButtonGroup, Container, CssBaseline, Grid } from '@mui/material';
import HeadDialog from './HeadDialog';
import DataDialog from './DataDialog';
import DataTable from './DataTable';
import { Margin } from '@mui/icons-material';

function TableView() {
  const [columnDialogOpen, setColumnDialogOpen] = useState(false);
  const [dataEntryDialogOpen, setDataEntryDialogOpen] = useState(false);
  const [columnNames, setColumnNames] = useState([]);
  const [data, setData] = useState([]);

  const handleColumnDialogOpen = () => {
    setColumnDialogOpen(true);
  };

  const handleColumnDialogClose = () => {
    setColumnDialogOpen(false);
  };

  const handleColumnNamesSet = (names) => {
    setColumnNames(names);
  };

  const handleDataEntryDialogOpen = () => {
    setDataEntryDialogOpen(true);
  };

  const handleDataEntryDialogClose = () => {
    setDataEntryDialogOpen(false);
  };

  const handleAddData = (rowData) => {
    setData((prevData) => [...prevData, rowData]);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleColumnDialogOpen} style={{display: (columnNames.length <= 0 ) ? 'inline':'none'}}>
                    Set Column Names
                </Button>
                <Button variant="contained" color="primary" onClick={handleDataEntryDialogOpen}>
                    Add Data
                </Button>
        </Grid>
        <Grid item xs={12}>
          < DataTable data={data} columnNames={columnNames} />
        </Grid>
      </Grid>
      <HeadDialog
        open={columnDialogOpen}
        onClose={handleColumnDialogClose}
        onColumnNamesSet={handleColumnNamesSet}
      />
      <DataDialog
        open={dataEntryDialogOpen}
        onClose={handleDataEntryDialogClose}
        columnNames={columnNames}
        onAddData={handleAddData}
      />
    </>
  );
}

export default TableView;
