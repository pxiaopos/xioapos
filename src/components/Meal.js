import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(3, 2),
    margin: 10,
    width: 450,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
  },
}));

export default function PaperSheet (props) {
  const { count, id, num, v: { item, price } } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h3">{ item }</Typography>
          <Typography component="p">金額 { price } - 目前數量 { num || 0 }</Typography>
        </CardContent>
      </div>
      <div className={classes.cover}>
        <CardActions className={classes.content}>
          <Fab fontSize="small" aria-label="remove" onClick={ e => count(id, -1, -price) } ><RemoveIcon /></Fab>
          <Fab fontSize="small" aria-label="add" onClick={ e => count(id, 1, price) } ><AddIcon /></Fab>
        </CardActions>
      </div>
    </Paper>
  );
}
