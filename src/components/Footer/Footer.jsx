import React from 'react';
import cs from './Footer.module.sass';

const Footer = () => (
  <footer className={cs.footer}>
    <img src='/img/logo.svg' alt='logo' />
    <span>Contact: fake@email.com</span>
  </footer>
);

export default Footer;
