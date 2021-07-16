import { Grid } from '@material-ui/core';
import React from 'react';
import { CustomTextField } from '../CustomTextField';

export const StepOne = () => {
  const [title, setTitle] = React.useState<string>();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  return (
    <Grid style={{ height: 250 }}>
      <CustomTextField title="title" onChange={handleChange} id="title" value={title} isFullWidth />
    </Grid>
  );
};
