import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Button, makeStyles } from '@material-ui/core';

export interface CustomButtonProps {
  isSubmit?: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

const useStyle = makeStyles((theme) => ({
  button: (props: CustomButtonProps) => ({
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main,
  }),
}));

export const CustomButton = (props: CustomButtonProps) => {
  const classes = useStyle(props);

  return (
    <Button
      className={classes.button}
      variant="contained"
      startIcon={props.icon}
      type={props.isSubmit ? 'submit' : 'button'}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

CustomButton.defaultProps = {
  isSubmit: true,
  icon: <AddOutlinedIcon />,
  label: 'Button',
};
