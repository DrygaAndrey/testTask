import { useState } from "react";
import "./ListItem.sass";

function ListItem({ country, onCountryClick }) {
  return <li onClick={()=>{onCountryClick(country)}}>{country.name}</li>;
}

export default ListItem;
