import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className='navBar'>
        <Link to='/'>
          <img
            alt='home button'
            className='homeIcon'
            src='/images/home-solid.svg'
          />
        </Link>
      </div>
    );
  }
}
