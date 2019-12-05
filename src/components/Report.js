import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { addComma } from '../helper/number'

import menu from '../configs/menu';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>日期</StyledTableCell>
            {
              menu.list.map((v, i) => {
                return <StyledTableCell key={i} align="right">{v.item}</StyledTableCell>
              })
            }
            <StyledTableCell>總金額</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              props.data.map((data, i) => (
                <StyledTableRow key={`${data.data}_${i}`}>
                  <StyledTableCell>{data.date}</StyledTableCell>
                    { menu.list.map((_, mi) => <StyledTableCell key={`${data.date}_${i}_${mi}`}>{data.list.counter[mi] ? data.list.counter[mi] : 0}</StyledTableCell>)}
                  <StyledTableCell>{addComma(data.list.sum)}</StyledTableCell>
                </StyledTableRow>

              ))
            }
        </TableBody>
      </Table>
    </Paper>
  );
}