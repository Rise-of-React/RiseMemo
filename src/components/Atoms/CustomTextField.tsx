import { makeStyles, TextField, Typography } from '@material-ui/core';

export interface CustomTextFieldProps {
  value?: string | number;
  id?: string;
  title?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  isFullWidth?: boolean;
  isDate?: boolean;
}

const useStyle = makeStyles((theme) => ({
  textField: {
    borderRadius: 4,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.text.primary,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.primary,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.primary,
      },
    },
  },
  input: {
    color: theme.palette.text.primary,
  },
  title: {
    color: theme.palette.text.primary,
  },
}));

export const CustomTextField = (props: CustomTextFieldProps) => {
  const classes = useStyle(props);

  return (
    <div>
      <Typography variant="subtitle2" className={classes.title}>
        {props.title}
      </Typography>
      <TextField
        id={props.id}
        className={classes.textField}
        type={props.isDate ? 'date' : 'text'}
        variant="outlined"
        fullWidth={props.isFullWidth ? true : false}
        onChange={props.onChange}
        InputProps={{
          className: classes.input,
        }}
      />
    </div>
  );
};

CustomTextField.defaultProps = {
  id: 'textField',
  onChange: () => {},
  value: 'value',
  title: 'your title',
  isDate: false,
};
