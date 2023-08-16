import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

function DataDialog({ open, onClose, columnNames, onAddData }) {
  const [rowData, setRowData] = useState(
    Object.fromEntries(columnNames.map((name) => [name, '']))
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRowData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddData = () => {
    onAddData(rowData);
    setRowData(Object.fromEntries(columnNames.map((name) => [name, ''])));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Data</DialogTitle>
      <DialogContent>
        {columnNames.map((columnName) => (
          <TextField
            key={columnName}
            label={columnName}
            name={columnName}
            value={rowData[columnName]}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddData} color="primary">
          Add Data
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DataDialog;