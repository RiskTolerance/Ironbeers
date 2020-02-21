import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  render() {
    return (
      <div className='homeCards'>
        <Link to='allbr'>
          <div className='imgContainer'>
            <img alt='beer' src='/images/beers.png'></img>
            <div className='cardText'>
              <h1>All Beers</h1>
              <p>View all the beers!</p>
            </div>
          </div>
        </Link>
        <Link to='rdmbr'>
          <div className='imgContainer'>
            <img alt='beer' src='/images/random-beer.png'></img>
            <div className='cardText'>
              <h1>Random Beers</h1>
              <p>A random list of beer!</p>
            </div>
          </div>
        </Link>
        <Link to='mkbr'>
          <div className='imgContainer'>
            <img alt='beer' src='/images/new-beer.png'></img>
            <div className='cardText'>
              <h1>New Beer</h1>
              <p>Create a new beer!</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
