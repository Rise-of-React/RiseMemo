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
import { MemoData } from '../../types/memo/memo';
import { CustomButton } from '../Atoms/CustomButton';
import { CustomTextField } from '../Atoms/CustomTextField';

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
                <CustomTextField id="title" value={addState.title} onChange={onChangeValue} isFullWidth />
              </Grid>
              <Grid item style={{ paddingBottom: '15vh' }}>
                <Typography variant="subtitle2" style={{ color: '#ffffff' }}>
                  Subtitle
                </Typography>
                <CustomTextField id="subTitle" value={addState.subTitle} onChange={onChangeValue} isFullWidth />
              </Grid>
              <Grid item container direction="row" justify="space-between">
                <Grid item>
                  <CustomButton isSubmit icon={<AddOutlinedIcon />} label="Add" />
                </Grid>
                <Grid item>
                  <CustomButton onClick={onClose} icon={<CloseOutlinedIcon />} label="Close" />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </form>
      </Paper>
    </Dialog>
  );
};
