import React, { useState } from 'react';
import './SearchSortHeader.css';

const SearchSortHeader = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className='searchSortHeader'>
      <div className='relevancy'>
        <div
          className={tab === 0 ? 'tab' : 'tab active'}
          onClick={() => setTab(0)}
        >
          Feature
        </div>
        <div
          className={tab === 1 ? 'tab' : 'tab active'}
          onClick={() => setTab(1)}
        ></div>
        <div
          className={tab === 2 ? 'tab' : 'tab active'}
          onClick={() => setTab(2)}
        ></div>
      </div>
      <div className='search'>1</div>
    </div>
  );
};

export default SearchSortHeader;
