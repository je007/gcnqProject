import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render() {
    return(
      <div className="navbar">
        <Link to="/" className="center">Food Feed!</Link>
      </div>
    );
  }
};


export default Header;
