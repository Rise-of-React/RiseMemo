import { Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import url from '../../images/404.gif';
import { CustomButton } from '../Atoms/CustomButton';

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <Grid container justify="center" alignContent="center">
      <img src={url} alt="loading..." />
      <CustomButton
        onClick={() => {
          history.goBack();
        }}
        label="Back To Page"
      />
      ;
    </Grid>
  );
};
