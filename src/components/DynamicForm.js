import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Input,
  Typography
} from '@mui/material';


const DynamicForm = () => {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [bsb, setBsb] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  

  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const addRow = () => {
    setFormData([...formData, { row: '', col: '', value: '' }]);
  };

  const removeRow = (index) => {
    const updatedFormData = formData.filter((item, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // FORM SUBMISSION HERE, API USAGE?
    console.log('Form Data:', formData);
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('BSB:', bsb);
    console.log('Account Number:', accountNumber);
    console.log('Account Name:', accountName);
    console.log('Selected Files:', selectedFiles);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px', marginTop: '20px'}}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label=""
          type="date"
          variant="outlined"
          value={date}
          onChange={(e) => setDate(e.target.value)}
  />
      </div>
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ministry</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Select
                    variant="outlined"
                    value={item.value}
                    onChange={(e) => handleChange(index, 'value', e.target.value)}
                  >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                    <MenuItem value="Option 2">Option 2</MenuItem>
                    <MenuItem value="Option 3">Option 3</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    value={item.row}
                    onChange={(e) => handleChange(index, 'row', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    value={item.col}
                    onChange={(e) => handleChange(index, 'col', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeRow(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={addRow} style={{ marginLeft: '10px'}}>
        Add Row
      </Button>
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '20px 0' }}></div>
      <div style={{ marginTop: '20px' }}>
        <TextField
          label="BSB"
          variant="outlined"
          value={bsb}
          onChange={(e) => setBsb(e.target.value)}
          style={{ marginRight: '10px', marginLeft: '10px' }}
        />
        <TextField
          label="Account Number"
          variant="outlined"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Account Name"
          variant="outlined"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '20px 0' }}></div>
      <div>
          <Input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
            multiple
          />
          <label htmlFor="fileInput">
            <Button variant="contained" component="span" style={{ marginTop: '10px', marginLeft: '10px' }}>
              Upload Files
            </Button>
          </label>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: '5px' }}>
            {selectedFiles.length > 0
              ? selectedFiles.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))
              : 'No files selected'}
          </Typography>
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '5px', marginLeft: '10px', fontStyle: 'italic'}}>
          Add invoices/receipts here if they are images, or PDFs to the email. If GST was charged on your expense, we strongly prefer the tax invoice (with the supplier’s ABN and GST charged) so we can claim the GST credits (effectively 9.09% off the purchase price!)
          </Typography>
        </div>
        <div style={{ height: '1px', backgroundColor: '#ccc', margin: '20px 0' }}></div>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px', marginLeft: '10px' }}>
          Submit
        </Button>
    </form>
  );
};

export default DynamicForm;