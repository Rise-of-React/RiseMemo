import { Card, CardContent, CardHeader, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
export interface CustomCardProps {
  title: string;
  subTitle: string;
  style?: CardStyleProps;
}

type CardStyleProps = {
  backgroundColor?: string;
  width?: string;
  heigth?: string;
};

const useStyles = makeStyles<Theme, CardStyleProps>((theme: Theme) => ({
  card: (props) => ({
    backgroundColor: props.backgroundColor,
    width: 392,
    heigth: 112,
  }),
  cardContent: {
    paddingLeft: 15,
  },
  text: {
    color: '#FFFFFF',
  },
}));

export const CustomCard = (props: CustomCardProps) => {
  const classes = useStyles(props.style ?? {});

  const { title, subTitle } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction={'column'}>
          <Grid item>
            <IconButton size="small">
              <CancelIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.cardContent}>
            <Typography variant={'h6'} className={classes.text}>
              {title}
            </Typography>
            <Typography variant={'subtitle2'} className={classes.text}>
              {subTitle}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CustomCard.defaultProps = {
  title: 'test',
  subTitle: 'subtest',
  style: {
    width: 392,
    heigth: 112,
    backgroundColor: '#CE97E8',
  },
};
