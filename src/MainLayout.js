import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (
  <div className="main-layout">
    <Navigation />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;