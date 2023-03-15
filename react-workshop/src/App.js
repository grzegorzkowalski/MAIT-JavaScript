import AddNumbers from "./components/Chapter05/AddNumbers";
import Sum from "./components/Chapter05/Sum";
import LikeBox from "./components/Chapter04/LikeBox";
import './App.css';
import Menu from "./components/Chapter04/Menu";
import menuData from "./data/menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddNumbers numberA={3} numberB={7} />
        <Sum numbers={[1,2,3,4,5]} />
        <LikeBox likes={10000} />
        <Menu menu={menuData} />
      </header>
    </div>
  );
}

export default App;
