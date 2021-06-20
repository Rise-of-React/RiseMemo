import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import { CustomChip } from '../Atoms/CustomChip';

export interface BarMenuProps {
  children: React.ReactNode;
}

export const BarMenu = ({ children }: BarMenuProps) => {
  return <Breadcrumbs aria-label="breadcrumb">{children}</Breadcrumbs>;
};
