import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomeCards from "./components/HomeCards";
import AllBeers from "./components/AllBeers";
import RandomBeers from "./components/RandomBeers";
import NewBeers from "./components/NewBeer";
import axios from "axios";

class App extends Component {
  state = {
    allBeers: [],
    rdmBeers: [{}],
    ready: false,
    ranReady: false
  };

  getBeerList = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        // console.log(response);
        this.setState({ allBeers: response.data, ready: true });
      })
      .catch(err => console.log(err));
  };

  getRandomBeerList = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        console.log(response);
        this.setState({ rdmBeers: response.data, ranReady: true });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBeerList();
    this.getRandomBeerList();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props => <HomeCards {...props} />} />
        </Switch>

        <Switch>
          <Route
            exact
            path='/allbr'
            render={props => (
              <AllBeers
                {...props}
                allBeers={this.state.allBeers}
                ready={this.state.ready}
              />
            )}
          />
        </Switch>

        <Switch>
          <Route
            exact
            path='/rdmbr'
            render={props => (
              <RandomBeers
                {...props}
                rdmBeers={this.state.rdmBeers}
                ranReady={this.state.ranReady}
              />
            )}
          />
        </Switch>

        <Switch>
          <Route exact path='/mkbr' render={props => <NewBeers {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'

// class App extends Component {

//   state = {
//     beers: [], //fill this array of beers with beers from the api
//     dogs : []
//   }

//   async componentDidMount(){
//     //console.log('happens once on mount')

//     //.then promise
//     axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => { //This takes some time by the time it gets back
//         this.setState({
//           beers:res.data
//         })
//     })

//     //async await promise
//     let response = await axios.get(`https://dog.ceo/api/breed/boxer/images/random/30`)
//     this.setState({
//         dogs:response.data.message
//     })

//   }

//   showTheBeers = () => {
//     return this.state.beers.map(eachBeer => {
//       return <li>{eachBeer.name}</li>
//     })
//   }

//   showTheDogs = () => {
//     console.log(this.state.dogs)
//     return this.state.dogs.map(eachDog => {
//       return <img src={eachDog} />
//     })
//   }

//   render() { //Never set state in here
//     //console.log('render may happen more than once', this)

//     return (
//       <div>
//           Axios with React!
//           {this.showTheDogs()}
//           {this.showTheBeers()}
//       </div>
//     );
//   }
// }

// export default App;
