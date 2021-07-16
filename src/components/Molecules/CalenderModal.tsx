import { Dialog, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { getFormattedDate } from '../../utils/date';
import { CustomButton } from '../Atoms/CustomButton';
import { CalenderBoxList } from './CalenderBoxList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CalenderAddDrawer } from '../Organisms/CalenderAddDrawer';
import { CalenderDeleteDialog } from '../Organisms/CalenderDeleteDialog';

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
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const handleDrawerClose = React.useCallback(() => {
    setDrawerOpen(false);
  }, [setDrawerOpen]);

  const handleDialogClose = React.useCallback(() => {
    setDialogOpen(false);
  }, [setDrawerOpen]);

  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth={'lg'} PaperProps={{ classes: { root: classes.modal } }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">{getFormattedDate(date)}</Typography>
          </Grid>
          <Grid item container justify="center" style={{ paddingBottom: 30 }}>
            <CalenderBoxList
              lists={lists}
              onDelete={() => {
                setDialogOpen(true);
              }}
            />
          </Grid>
          <Grid item container justify="center" style={{ paddingBottom: 30 }}>
            <CustomButton
              label="New Event"
              isIcon={false}
              width={344}
              height={56}
              onClick={() => {
                setDrawerOpen(true);
              }}
            />
          </Grid>
          <Grid item container justify="center">
            <CustomButton label="Back" icon={<ArrowBackIcon />} width={344} height={56} onClick={onClose} />
          </Grid>
        </Grid>
      </Dialog>
      <CalenderAddDrawer open={drawerOpen} onClose={handleDrawerClose} />
      <CalenderDeleteDialog open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

CalenderModal.defaultProps = {
  open: true,
  onClose: () => {},
  date: new Date(),
};
