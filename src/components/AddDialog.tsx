import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: 790,
    height: 511,
    backgroundColor: '#A55BCE',
    borderRadius: '15',
  },
  title: {
    color: '#ffffff',
  },
  content: {
    height: 400,
  },
  textField: {
    borderRadius: 4,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffffff',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
      },
    },
  },
  input: {
    color: '#ffffff',
  },
}));

export interface AddDialogProps {
  open: boolean;
  onClose: () => void;
  subTitle?: string;
}

export const AddDialog = (props: AddDialogProps) => {
  const classes = useStyles();
  const { open, onClose, subTitle } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'}>
      <Paper className={classes.dialog}>
        <form>
          <DialogTitle className={classes.title}>
            <Typography variant="h5">Add Card</Typography>
            <Typography variant="subtitle2">{subTitle}</Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container direction={'column'} className={classes.content} justify="flex-end">
              <Grid item>
                <Typography variant="subtitle2" style={{ color: '#ffffff' }}>
                  title
                </Typography>
                <TextField
                  id="title"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item style={{ paddingBottom: '15vh' }}>
                <Typography variant="subtitle2" style={{ color: '#ffffff' }}>
                  Subtitle
                </Typography>
                <TextField
                  id="subtitle"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item container direction="row" justify="space-between">
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    style={{ backgroundColor: '#ffffff', color: '#9B51E0' }}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<CloseOutlinedIcon />}
                    style={{ backgroundColor: '#ffffff', color: '#9B51E0' }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </form>
      </Paper>
    </Dialog>
  );
};
