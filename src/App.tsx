import './App.css';
import Navbar from './components/navbar/Navbar';
import SearchSortHeader from './components/search-sort-header/SearchSortHeader';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchSortHeader />
      </main>
    </>
  );
}

export default App;
