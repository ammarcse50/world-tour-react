import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area } = country;
  console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // const passWithParams =country=>handleVisitedCountry(country);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "black" : "white" }}>
        name : {name.common}
      </h3>
      <img src={flags.png} width={300} height={200} alt="" />
      <h3 style={{ color: visited ? "black" : "white" }}>
        population : {population}
      </h3>
      <h3 style={{ color: visited ? "black" : "white" }}>area : {area}</h3>
      <button onClick={() => handleVisitedCountry(country)}>
        mark visited
      </button>
      <button onClick={handleVisited}> {visited ? "visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to vist"}
    </div>
  );
};

export default Country;
