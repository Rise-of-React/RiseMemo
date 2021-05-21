import { Typography } from '@material-ui/core';
import React from 'react';

interface CustomTypoGraphyProps {
  title: string;
}

export const CustomTypoGraphy = ({ title }: CustomTypoGraphyProps) => {
  return (
    <div>
      <Typography variant={'h6'}>{title}</Typography>
    </div>
  );
};
