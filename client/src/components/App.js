import React from 'react';
import Header from '../containers/Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
