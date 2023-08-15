import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

function AddData({ open, onClose, onAddData }) {
  const [data, setData] = useState({ property1: '', property2: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddData = () => {
    onAddData(data);
    setData({ property1: '', property2: '' });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Custom Data</DialogTitle>
      <DialogContent>
        <TextField
          label="Property 1"
          name="property1"
          value={data.property1}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Property 2"
          name="property2"
          value={data.property2}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddData} color="primary">
          Add
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddData;
