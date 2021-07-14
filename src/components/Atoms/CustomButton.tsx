import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Button, makeStyles } from '@material-ui/core';

export interface CustomButtonProps {
  isSubmit?: boolean;
  icon?: React.ReactNode;
  isIcon?: boolean;
  label?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const useStyle = makeStyles((theme) => ({
  button: (props: CustomButtonProps) => ({
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main,
    width: props.width,
    height: props.height,
  }),
}));

export const CustomButton = (props: CustomButtonProps) => {
  const classes = useStyle(props);

  return (
    <Button
      className={classes.button}
      variant="contained"
      startIcon={props.isIcon && props.icon}
      type={props.isSubmit ? 'submit' : 'button'}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

CustomButton.defaultProps = {
  isSubmit: true,
  isIcon: true,
  icon: <AddOutlinedIcon />,
  label: 'Button',
};
