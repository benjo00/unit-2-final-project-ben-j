import React from 'react';
import data from './MockData.jsx';

function Search({ input }) {
  const cleanedInput = input.trim().toLowerCase();

  const filteredData = data.filter((item) => {
    if (cleanedInput === '') return true;
    return item.text.toLowerCase().includes(cleanedInput);
  });
// This adds validation as per project requested requirements. Shows "No results found." It also utilizes the trim and tolowercase functionality in order to ensure the search function works regardless of user input outside of these
  return (
    <div>
      <ul className="searchResults">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
}

export default Search;

// the above creates the searchbar function and maps the data from the mockdata files