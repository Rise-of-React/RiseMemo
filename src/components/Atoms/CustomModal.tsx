import { makeStyles, Modal } from '@material-ui/core';

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
  width?: number;
  height?: number;
}

const useStyle = makeStyles((theme) => ({
  modal: (props: CustomModalProps) => ({
    color: theme.palette.text.primary,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }),
}));

export const CustomModal = (props: CustomModalProps) => {
  const classes = useStyle(props);
  const { open, onClose, children } = props;

  return (
    <Modal className={classes.modal} open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

CustomModal.defaultProps = {
  open: true,
  onClose: () => {},
  children: <div style={{ width: 513, height: 1023, backgroundColor: '#c475f8' }}>test</div>,
};
