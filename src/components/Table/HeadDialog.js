import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';

function HeadDialog({ open, onClose, onColumnNamesSet }) {
  const [columnNames, setColumnNames] = useState('');

  const handleInputChange = (e) => {
    setColumnNames(e.target.value);
  };

  const handleDialogClose = () => {
    onColumnNamesSet(columnNames.split(',').map((name) => name.trim()));
    setColumnNames('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>Enter Column Names</DialogTitle>
      <DialogContent>
        <TextField
          label="Column Names (comma-separated)"
          value={columnNames}
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>
      <Button className="setColBtn" onClick={handleDialogClose} color="primary">
        Set Column Names
      </Button>
    </Dialog>
  );
}

export default HeadDialog;
