import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const TableDwt = (sx, customeRows, customeHeads) => {

    const defaultHeads = [ 
        'Dessert (100g serving)',
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        ];
        
        const defaultRows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9)
        ];
        
        const rows = (customeRows === undefined) ? defaultRows : customeRows;
        const heades = (customeHeads === undefined) ? defaultHeads : customeHeads;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ ...sx, minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>{defaultHeads[0]}</TableCell>
            <TableCell align="right">{heades[1]}</TableCell>
            <TableCell align="right">{heades[2]}</TableCell>
            <TableCell align="right">{heades[3]}</TableCell>
            <TableCell align="right">{heades[4]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {defaultRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDwt;