/** @format */
import React, { createContext, useContext, useState, useEffect } from "react";
import aggregatedData from "../assets/assetsData";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Update search results whenever the query changes
  useEffect(() => {
    if (query.trim() !== "") {
      const results = aggregatedData.filter((item) =>
        item.cardTitle.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]); // Clear results if no valid query
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{ query, setQuery, searchResults, handleInputChange }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => {
  return useContext(SearchContext);
};
