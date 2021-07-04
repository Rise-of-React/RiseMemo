import { CssBaseline, Grid, makeStyles, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { DroppableBoard } from './components/DroppableBoard';
import { defaultTheme } from './types/theme';
import { tempData } from './types/board/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DroppableList } from './components/DroppableList';
import { Template } from './components/template/template';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
          <Route exact path="/list">
            <Template>
              <DroppableList />
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
