// import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

// const RandomBeers = props => {
//   const showBeers = () => {
//     return props.rdmBeers.map(eachBeer => {
//       return (
//         <div className='beerCard' key={eachBeer._id}>
//           <h2>{eachBeer.name}</h2>
//           <div className='imageDesc'>
//             <img
//               style={{ height: "150px" }}
//               src={eachBeer.image_url}
//               alt='the beer'
//             />
//             <div className='desc'>
//               <h3>Tagline:</h3> <h4>{eachBeer.tagline}</h4>
//               <h3>Creator:</h3> <h4>{eachBeer.contributed_by}</h4>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };
//   return (
//     <div>
//       <NavBar />
//       <div>{showBeers()}</div>
//       <Footer />
//     </div>
//   );
// };

// export default RandomBeers;
import React, { Component } from "react";

export default class RandomBeers extends Component {
  state = {
    rabBeer: this.props.rdmBeers
  };
  showBeers = () => {
    let copyBeer = this.props.rdmBeers;
    console.log(this.props);
    return copyBeer.map(eachBeer => {
      return (
        <div className='beerCard' key={eachBeer._id}>
          <h2>{eachBeer.name}</h2>
          <div className='imageDesc'>
            <img
              style={{ height: "150px" }}
              src={eachBeer.image_url}
              alt='the beer'
            />
            <div className='desc'>
              <h3>Tagline:</h3> <h4>{eachBeer.tagline}</h4>
              <h3>Creator:</h3> <h4>{eachBeer.contributed_by}</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar />
        {/* {this.showBeers()} */}
        {/* {this.props.ranReady ? this.props.rdmBeers.name : "Loading..."} */}
        {this.props.rdmBeers.name}
        {/* <div className='beerCard' key={eachBeer.name}>
          <h2>{eachBeer.name}</h2>
          <div className='imageDesc'>
            <img
              style={{ height: "150px" }}
              src={eachBeer.image_url}
              alt='the beer'
            />
            <div className='desc'>
              <h3>Tagline:</h3> <h4>{eachBeer.tagline}</h4>
              <h3>Creator:</h3> <h4>{eachBeer.contributed_by}</h4>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
