import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AllBeers = props => {
  console.log(props);
  const showBeers = () => {
    return props.allBeers.map(eachBeer => {
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
  return (
    <div>
      <NavBar />
      <div>{showBeers()}</div>
      <Footer />
    </div>
  );
};

export default AllBeers;
