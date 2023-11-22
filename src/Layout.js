// Layout.js
import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="App">
      {children}
    </div>
  );
};

export default Layout;
