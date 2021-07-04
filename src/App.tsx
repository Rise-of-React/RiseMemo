import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { AppBar } from './components/Molecules/AppBar';
import { DroppableBoard } from './components/DroppableBoard';
import { theme } from './types/theme';
import { tempData } from './types/board/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DroppableList } from './components/DroppableList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <AppBar />
              <DroppableBoard board={tempData} />
            </Route>
            <Route exact path="/list">
              <AppBar />
              <DroppableList />
            </Route>
            <Route exact path="/board">
              <AppBar />
              <DroppableBoard board={tempData} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  );
}
