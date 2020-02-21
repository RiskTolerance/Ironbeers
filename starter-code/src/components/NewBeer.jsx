import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

export default class NewBeer extends Component {
  state = {};

  addBeer = e => {
    //push the beer state to the array
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div>
          {" "}
          <form className='fill' onSubmit={this.addBeer}>
            <input
              placeholder='name'
              name='name'
              type='text'
              onChange={this.handleChange}
            />
            <input
              placeholder='tagline'
              name='tagline'
              type='text'
              onChange={this.handleChange}
            />
            <input
              placeholder='description'
              name='description'
              type='text'
              onChange={this.handleChange}
            />
            <input
              placeholder='first brew'
              name='first_brewed'
              type='text'
              onChange={this.handleChange}
            />
            <input
              placeholder='brewers tip'
              name='brewers_tips'
              type='text'
              onChange={this.handleChange}
            />
            <input
              placeholder='attenuation level'
              name='attenuation_level'
              type='number'
              onChange={this.handleChange}
            />
            <input
              placeholder='contributed by'
              name='contributed_by'
              type='text'
              onChange={this.handleChange}
            />
            <input type='Submit' />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
