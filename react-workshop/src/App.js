import Menu from "./components/Chapter04/Menu";
import Search from "./components/Chapter04/Search";
import LikeBox from "./components/Chapter04/LikeBox";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Search />
        <LikeBox />
      </header>
    </div>
  );
}

export default App;
