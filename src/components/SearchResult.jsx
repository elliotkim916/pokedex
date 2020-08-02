import React, { useEffect } from 'react';

const SearchResult = () => {
  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <React.Fragment>
      <h3>Search Result</h3>
    </React.Fragment>
  );
};

export default SearchResult;
