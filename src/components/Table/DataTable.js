import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function DataTable({ data, columnNames }) {
  return (
    <TableContainer component={Paper} sx={{width: '100%'}}>
      <Table>
        <TableHead>
          <TableRow>
            {columnNames.map((columnName) => (
              <TableCell key={columnName}>{columnName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columnNames.map((columnName) => (
                <TableCell key={columnName}>{row[columnName]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;