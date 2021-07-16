import React from 'react';
import { Card, CardContent, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { CardStyleProps } from '../../../types/card/card';

export interface CustomCardProps {
  title: string;
  subTitle: string;
  style?: CardStyleProps;
}

const useStyles = makeStyles<Theme, CardStyleProps>((theme: Theme) => ({
  card: (props) => ({
    backgroundColor: props.backgroundColor,
    width: Number(props.width),
    height: Number(props.height),
    borderRadius: 20,
  }),
  cardContent: (props) => ({
    paddingLeft: 15,
  }),
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
            <IconButton size="small" style={{ color: '#FFFFFF' }}>
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
    width: '392',
    height: '112',
    backgroundColor: '#CE97E8',
  },
};
