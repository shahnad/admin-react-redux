import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Link
} from '@material-ui/core';
import Orders from './orders';
import Chart from './chart';
import Deposits from './deposits';
import Loader from '../../../../components/Loader';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },


}));

export default function DashboardPage(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [isLoading, setLoading] = React.useState(false)
  return (
    <div className={classes.root}>
      {isLoading && <Loader />}
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid xs={12}>
          ww
        </Grid>
      </Grid>
    </div>
  );
}