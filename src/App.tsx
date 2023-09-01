import './App.css';
import Navbar from './components/navbar/Navbar';
import SearchSortHeader from './components/search-sort-header/SearchSortHeader';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <h1>App</h1>
        <SearchSortHeader />
      </main>
    </>
  );
}

export default App;
