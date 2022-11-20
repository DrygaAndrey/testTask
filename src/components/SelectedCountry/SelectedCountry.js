import React, { useState, useEffect } from "react";

import "./SelectedCountry.sass";
import axios from "axios";

function SelectedCountry({ country, setSelectedCountry }) {
  const [selectedCountryData, setSelectedCountryData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (country.name) {
      axios
        .get(
          `https://date.nager.at/api/v3/NextPublicHolidays/${country.countryCode}`
        )
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => console.log("Axios error: ", error));
    }
  }, [country]);

  return (
    <div className="selectedCountry">
      {!country.name ? (
        <></>
      ) : (
        <>
          <p>Availabe holidays in {country.name}</p>
          {data.map((item) => {
            return (
              <div className="holiday">
                <div className="date">Date:{item.date}</div>
                <div className="name">Name: {item.name}</div>
              </div>
            );
          })}
          <button
            onClick={() => {
              setSelectedCountry({});
            }}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default SelectedCountry;
