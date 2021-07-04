import { Breadcrumbs } from '@material-ui/core';
import React from 'react';

export interface CustomBreadcrumbsProps {
  children: React.ReactNode;
}

export const CustomBreadcrumbs = ({ children }: CustomBreadcrumbsProps) => {
  return <Breadcrumbs aria-label="breadcrumb">{children}</Breadcrumbs>;
};
