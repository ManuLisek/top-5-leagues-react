import React from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (
  <div className="main-layout">
    <Navigation />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;