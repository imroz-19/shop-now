import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/app-logo.svg';
import './Header.scss'

const Header = () => {
  return(
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop">Shop</Link>
          <Link to="/shop">Contact</Link>
          <Link to="/sign-in">Sign in</Link>
        </div>
      </div>
    </>
  )
}

export default Header;