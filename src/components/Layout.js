import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Banner from './Banner';
import '../styles/layout.css';
import '../styles/texts.css'

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Navbar/>
      <main className='pt-16' style={{paddingTop: '100px'}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
