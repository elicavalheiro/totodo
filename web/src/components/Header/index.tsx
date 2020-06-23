import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return(
    <header className="h-container">
      <a href="/" className="logo">
        <img src={logo} alt=".tododo"/>
      </a>
      <div>
        <a href="/about" className="about">about</a>
        <button className="btn_login">Sign In</button>
      </div>
    </header>
  )
}

export default Header;
