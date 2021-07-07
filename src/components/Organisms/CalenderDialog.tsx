import { Dialog, makeStyles, Paper } from '@material-ui/core';

export interface CalenderDialogProps {
  open: boolean;
  onClose: () => void;
}
const useStyles = makeStyles((theme) => ({}));

export const CalenderDialog = (props: CalenderDialogProps) => {
  const classes = useStyles();
  const { open, onClose } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={'lg'}
      PaperProps={{
        style: { width: 512, height: 1028, backgroundColor: '#A55BCE' },
      }}
    >
      <form onSubmit={() => {}}></form>
    </Dialog>
  );
};
