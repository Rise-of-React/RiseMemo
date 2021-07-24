import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { tempData } from './types/board/board';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Calender } from './components/Organisms/Calender';
import { GraphWidget } from './components/Molecules/GraphWidget';
import { HomeCardList } from './components/Organisms/HomeCardList';
import { DroppableBoard } from './components/Organisms/DroppableBoard';
import { Template } from './components/Template/Template';
import { NotFoundPage } from './components/Pages/NotFoundPage';

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
              <Grid container direction="column" alignItems="center">
                <GraphWidget />
                <HomeCardList />
              </Grid>
            </Template>
          </Route>
          <Route exact path="/calender">
            <Template>
              <Calender />
            </Template>
          </Route>
          <Route exact path="/board">
            <Template>
              <DroppableBoard board={tempData} />
            </Template>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </Grid>
  );
}
