import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { addComma } from 'core/utilities/number';

import { set, single } from 'configs/menu';

const StyledTableCell = withStyles(theme => ({
  head: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    borderRight: '1px solid #c5cae9',
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
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
  zero: {
    color: '#bdbdbd',
  },
}));

export default function CustomizedTables (props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell colSpan={set.length}>餐盒</StyledTableCell>
            <StyledTableCell colSpan={single.length}>單點</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>日期</StyledTableCell>
            {
              set.map((v) => {
                return <StyledTableCell key={v.id} align="right">{v.item}</StyledTableCell>;
              })
            }
            {
              single.map((v) => {
                return <StyledTableCell key={v.id} align="right">{v.item}</StyledTableCell>;
              })
            }
            <StyledTableCell>總金額</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.data.map((data, i) => (
              <StyledTableRow key={`${data.data}_${i}`}>
                <StyledTableCell><span>{data.date}</span></StyledTableCell>
                {
                  set.map((v) => {
                    return (
                      <StyledTableCell key={`${data.date}_${v.id}`}>
                        {data.list.counter[v.id]
                          ? <span>{data.list.counter[v.id]}</span>
                          : <span className={classes.zero}>0</span>}
                      </StyledTableCell>
                    );
                  })
                }
                {
                  single.map((v) => {
                    return (
                      <StyledTableCell key={`${data.date}_${v.id}`}>
                        {data.list.counter[v.id]
                          ? <span>{data.list.counter[v.id]}</span>
                          : <span className={classes.zero}>0</span>}
                      </StyledTableCell>
                    );
                  })
                }
                <StyledTableCell><span>{addComma(data.list.sum)}</span></StyledTableCell>
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}
