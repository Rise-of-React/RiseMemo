import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { getFormattedDate } from '../../utils/date';
import { CustomModal } from '../Atoms/CustomModal';
import { CalenderBoxList } from './CalenderBoxList';

export interface CalenderModalProps {
  date: Date;
  open: boolean;
  onClose: () => void;
}

const useStyle = makeStyles((theme) => ({
  modal: (props: CalenderModalProps) => ({
    backgroundColor: theme.palette.primary.main,
    width: 513,
    height: 1023,
    padding: 30,
  }),
}));

const lists = [{ date: new Date(), isCurrent: true, title: 'test' }];

export const CalenderModal = (props: CalenderModalProps) => {
  const classes = useStyle(props);
  const { date, open, onClose } = props;

  return (
    <CustomModal open={open} onClose={onClose}>
      <Paper className={classes.modal}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">{getFormattedDate(date)}</Typography>
          </Grid>
          <Grid item container justify="center">
            <CalenderBoxList lists={lists} />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </CustomModal>
  );
};

CalenderModal.defaultProps = {
  open: true,
  onClose: () => {},
  date: new Date(),
};
