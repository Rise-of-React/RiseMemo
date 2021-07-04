import { Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { DroppableBoard } from './components/DroppableBoard';
import { theme } from './types/theme';
import { tempData } from './types/board/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DroppableList } from './components/DroppableList';
import { Header } from './components/Organisms/Header';
import { Template } from './components/template/template';

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
    </ThemeProvider>
  );
}
