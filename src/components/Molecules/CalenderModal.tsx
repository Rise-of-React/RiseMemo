import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { getFormattedDate } from '../../utils/date';
import { CustomButton } from '../Atoms/CustomButton';
import { CustomModal } from '../Atoms/CustomModal';
import { CalenderBoxList } from './CalenderBoxList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export interface CalenderModalProps {
  date: Date;
  open: boolean;
  onClose: () => void;
}

const useStyle = makeStyles((theme) => ({
  modal: (props: CalenderModalProps) => ({
    borderRadius: 20,
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
          <Grid item container justify="center" style={{ paddingBottom: 30 }}>
            <CalenderBoxList lists={lists} />
          </Grid>
          <Grid item container justify="center" style={{ paddingBottom: 30 }}>
            <CustomButton label="New Event" isIcon={false} width={344} height={56} />
          </Grid>
          <Grid item container justify="center">
            <CustomButton label="Back" icon={<ArrowBackIcon />} width={344} height={56} onClick={onClose} />
          </Grid>
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
