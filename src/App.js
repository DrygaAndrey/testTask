import React, { useState, useEffect } from "react";
import ListItems from "./components/ListItems/ListItems";
import SelectedCountry from "./components/SelectedCountry/SelectedCountry";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://date.nager.at/api/v3/AvailableCountries")
      .then((response) => {
        console.log("Data", response.data);
        setData(response.data);
      })
      .catch((error) => console.log("Axios error: ", error));
  }, []);

  const onCountryClick = (country) => {
    setSelectedCountry(country);
    // #3 update this function to handle county click and fetch holidays
  };
  return (
    <div className="container">
      <h1>React Test</h1>
      <div className="body">
        <div className="search-area">
          <section className="search-field">
            <label htmlFor="search">Search text</label>
            {/* #2 On the input, filter the countries listed below */}
            <input
              id="search"
              type="text"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button>Sort</button>
            <button>Reset</button>
          </section>
          <ListItems
            data={data}
            searchText={searchText}
            onCountryClick={onCountryClick}
          />
        </div>
        <div className="info-area">
          {/* #3 display selectedCountryHolidays here */}
          <SelectedCountry
            country={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
