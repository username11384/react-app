import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const DynamicForm = () => {
  const [formData, setFormData] = useState([{ row: 1, col: 1, value: '' }]);

  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const addRow = () => {
    setFormData([...formData, { row: formData.length + 1, col: 1, value: '' }]);
  };

  const removeRow = (index) => {
    const updatedFormData = formData.filter((item, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((item, index) => (
        <Paper key={index} elevation={3} style={{ padding: '15px', marginBottom: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Item"
                variant="outlined"
                value={item.row}
                onChange={(e) => handleChange(index, 'row', e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Quantity"
                variant="outlined"
                value={item.col}
                onChange={(e) => handleChange(index, 'col', e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Price"
                variant="outlined"
                value={item.value}
                onChange={(e) => handleChange(index, 'value', e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeRow(index)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Button variant="contained" color="primary" onClick={addRow}>
        Add Row
      </Button>
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;