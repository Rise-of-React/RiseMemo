import { Dialog, Grid, makeStyles, Typography } from '@material-ui/core';
import { Calender } from '../../types/calender/calender';
import { CustomButton } from '../Atoms/CustomButton';

export interface CalenderDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  data: Calender;
}
const useStyle = makeStyles((theme) => ({
  modal: (props: CalenderDeleteDialogProps) => ({
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
    width: 423,
    height: 185,
    padding: 30,
  }),
}));
export const CalenderDeleteDialog = (props: CalenderDeleteDialogProps) => {
  const classes = useStyle(props);
  const { open, onClose, data } = props;
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'} PaperProps={{ classes: { root: classes.modal } }}>
      <Grid container>
        <Grid item style={{ paddingBottom: '3vh' }}>
          <Typography variant="h4">Delete {data.title} ?</Typography>
        </Grid>
        <Grid item container direction="row" justify="space-between">
          <Grid item>
            <CustomButton label="Yes" onClick={() => {}} />
          </Grid>
          <Grid item>
            <CustomButton label="Cancel" onClick={onClose} />
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

CalenderDeleteDialog.defaultProps = {
  open: true,
  data: { date: new Date(), isCurrent: true, title: 'test' },
};
