import { CssBaseline, Grid, makeStyles, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { DroppableBoard } from './components/DroppableBoard';
import { tempData } from './types/board/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Template } from './components/Template/Template';
import { Calender } from './components/Organisms/Calender';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Template>
              <DroppableBoard board={tempData} />
            </Template>
          </Route>
          <Route exact path="/Calender">
            <Template>
              <Calender />
            </Template>
          </Route>
          <Route exact path="/board">
            <Template>
              <DroppableBoard board={tempData} />
            </Template>
          </Route>
        </Switch>
      </BrowserRouter>
    </Grid>
  );
}
