/** @format */
import React from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../Components/context/SearchContext";

const SearchPage = () => {
  const location = useLocation();
  const { searchResults } = useSearch();

  // Extract the search query from the URL
  const query = new URLSearchParams(location.search).get("q") || ""; // Default to empty string if undefined

  return (
    <div>
      {query && query.trim() !== "" ? (
        searchResults.length > 0 ? (
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>
                <img
                  src={item.cardImage}
                  alt={item.cardTitle}
                />
                <p>{item.cardTitle}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{query}"</p>
        )
      ) : (
        <p>Please enter a search term.</p>
      )}
    </div>
  );
};

export default SearchPage;
