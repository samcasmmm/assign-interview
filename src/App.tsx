import './App.css';
import JobContainer from './components/jobDisplay/JobContainer';
import Navbar from './components/navbar/Navbar';
import SearchSortHeader from './components/search-sort-header/SearchSortHeader';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchSortHeader />
        <JobContainer />
      </main>
    </>
  );
}

export default App;
