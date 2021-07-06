import { makeStyles, TextField } from '@material-ui/core';

export interface CustomTextFieldProps {
  value?: string | number;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  isFullWidth?: boolean;
}

const useStyle = makeStyles((theme) => ({
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

export const CustomTextField = (props: CustomTextFieldProps) => {
  const classes = useStyle(props);

  return (
    <TextField
      id={props.id}
      className={classes.textField}
      variant="outlined"
      fullWidth={props.isFullWidth ? true : false}
      onChange={props.onChange}
      InputProps={{
        className: classes.input,
      }}
    />
  );
};

CustomTextField.defaultProps = {
  id: 'textField',
  onChange: () => {},
  value: 'value',
};
