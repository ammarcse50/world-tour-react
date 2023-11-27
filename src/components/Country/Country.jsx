import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area } = country;
  console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3>name : {name.common}</h3>
      <img src={flags.png} width={300} height={200} alt="" />
      <h3>population : {population}</h3>
      <h3>area : {area}</h3>
      <button onClick={handleVisited}> {visited ? "visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to vist"}
    </div>
  );
};

export default Country;
