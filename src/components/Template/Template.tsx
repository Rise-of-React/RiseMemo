import React from 'react';
import { Header } from '../Organisms/Header';

export const Template: React.FC = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};
