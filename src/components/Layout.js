import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../styles/global';

const Layout = (props) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {props.children}
    </div>
  )
}

export default Layout;
