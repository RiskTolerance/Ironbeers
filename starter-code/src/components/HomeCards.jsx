import React, { Component } from "react";

export default class Beers extends Component {
  render() {
    return (
      <div className='homeCards'>
        <div className='imgContainer'>
          <a href='https://www.google.com/'>
            <img src='/images/beers.png'></img>
          </a>
          <div className='cardText'>
            <h1>All Beers</h1>
            <p>View all the beers!</p>
          </div>
        </div>

        <div className='imgContainer'>
          <a href='https://www.google.com/'>
            <img src='/images/random-beer.png'></img>
          </a>
          <div className='cardText'>
            <h1>Random Beers</h1>
            <p>A random list of beer!</p>
          </div>
        </div>

        <div className='imgContainer'>
          <a href='https://www.google.com/'>
            <img src='/images/new-beer.png'></img>
          </a>
          <div className='cardText'>
            <h1>New Beer</h1>
            <p>Create a new beer!</p>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div>
          <img src='/images/random-beer.png' />
          <h1>title</h1>
          <p>description</p>
        </div>
        <div>
          <img src='/images/new-beer.png' />
          <h1>title</h1>
          <p>description</p>
        </div> */
}
