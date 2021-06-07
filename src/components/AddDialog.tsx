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
import { MemoData } from '../types/memo/memo';


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
  onAddMemo: (title: string, memo: MemoData) => void;
}

export const AddDialog = (props: AddDialogProps) => {
  const classes = useStyles();
  const { open, onClose, subTitle, onAddMemo } = props;
  const [addState, setAddState] = React.useState<MemoData>({ title: '', subTitle: '' });

  // React.useEffect(()=>{
  //   setAddState(origin ?? {
  //     title: '',
  //     subTitle: '',
  //   });
  // },[origin])

  const onChangeValue = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = event.target.value;
      const key = event.target.id;

      const newMemo: MemoData = {
        ...addState,
        [key]: value,
      };
      setAddState(newMemo);
    },
    [addState]
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddMemo(subTitle ?? 'Todo', addState);
    onClose && onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'}>
      <Paper className={classes.dialog}>
        <form onSubmit={onSubmit}>
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
                  value={addState?.title}
                  fullWidth
                  className={classes.textField}
                  onChange={(e) => {
                    onChangeValue(e);
                  }}
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
                  id="subTitle"
                  variant="outlined"
                  value={addState?.subTitle}
                  fullWidth
                  className={classes.textField}
                  onChange={(e) => {
                    onChangeValue(e);
                  }}
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
                    type="submit"
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<CloseOutlinedIcon />}
                    style={{ backgroundColor: '#ffffff', color: '#9B51E0' }}
                    onClick={onClose}
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
