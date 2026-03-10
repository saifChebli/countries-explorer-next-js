"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

const CountriesList = ({ countries }) => {
  const [region, setRegion] = useState("all");
  const [sort , setSort] = useState('asc')

  let filteredCountries =
    region === "all"
      ? countries
      : countries.filter((country) => country.region === region);

  console.log(filteredCountries)

  // Sort alphabetically
  filteredCountries = filteredCountries.sort((a , b) => {
    if (sort === "asc"){
      return a.name.common.localeCompare(b.name.common)
    }
      return b.name.common.localeCompare(a.name.common)
  })

  return (
    <div>
      {/* Sort */}
      <div className="flex gap-4 my-6">
        <select className="border border-gray-300 px-3 py-2 rounded" onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Sort A to Z</option>
          <option value="desc">Sort Z to A</option>
        </select>

        {/* Filter */}

        <select className="border border-gray-300 px-3 py-2 rounded" onChange={(e) => setRegion(e.target.value)}>
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {
            filteredCountries.map(country => (
                <CountryCard country={country} />
            ))
        }
      </div>
    </div>
  );
};

export default CountriesList;
