import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("added country");
    const newVisitedCountries = [...visitedCountries, country];

    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div className="country-container">
      <h1>Countries</h1>
      <h3>Visted Country :{visitedCountries.length}</h3>
      <h3>{countries.length}</h3>
      {countries.map((country) => (
        <Country
          handleVisitedCountry={handleVisitedCountry}
          key={country.cca3}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
