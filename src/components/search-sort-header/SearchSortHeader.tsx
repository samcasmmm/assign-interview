import { useState } from 'react';
import './SearchSortHeader.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchSortHeader = () => {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');
  console.log('current tab : ', tab);

  return (
    <div className='searchSortHeader'>
      <div className='relevancy'>
        <div
          className={tab === 0 ? 'tab active' : 'tab'}
          onClick={() => setTab(0)}
        >
          Best Matches
        </div>
        <div
          className={tab === 1 ? 'tab active' : 'tab'}
          onClick={() => setTab(1)}
        >
          Featured
        </div>
        <div
          className={tab === 2 ? 'tab active' : 'tab'}
          onClick={() => setTab(2)}
        >
          Most Recent
        </div>
      </div>
      <div className='search'>
        <input
          type='text'
          placeholder='search . . .'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <AiOutlineSearch size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchSortHeader;
