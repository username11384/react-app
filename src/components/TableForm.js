import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';

const TableForm = () => {
  const [tableData, setTableData] = useState([
    // Initial data with one empty row and column
    { column1: '', column2: '' },
  ]);

  const handleAddRow = () => {
    setTableData([...tableData, { column1: '', column2: '' }]);
  };

  const handleAddColumn = () => {
    // Add a new column to each row
    const updatedTableData = tableData.map((row) => ({
      ...row,
      [`column${Object.keys(row).length + 1}`]: '',
    }));
    setTableData(updatedTableData);
  };

  const handleInputChange = (value, rowIndex, columnName) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][columnName] = value;
    setTableData(updatedTableData);
  };

  const handleSubmit = () => {
    // You can handle form submission here
    console.log('Form Data:', tableData);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(tableData[0]).map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.keys(row).map((column, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <TextField
                      value={row[column]}
                      onChange={(e) =>
                        handleInputChange(e.target.value, rowIndex, column)
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" onClick={handleAddRow}>
        Add Row
      </Button>
      <Button variant="contained" onClick={handleAddColumn}>
        Add Column
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default TableForm;