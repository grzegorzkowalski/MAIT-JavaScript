import Menu from "./components/Chapter04/Menu";
import Search from "./components/Chapter04/Search";
import LikeBox from "./components/Chapter04/LikeBox";
import Hello from "./components/Chapter05/Hello";
import './App.css';
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Menu />*/}
        {/*<Search />*/}
        {/*<LikeBox />*/}
        {/*<Hello name="Grzegorz" surname="Kowalski" />*/}
        {/*<Hello name="Szogi" surname="Kowalski" />*/}
        {/*<Hello name="Orzech" surname="Stefanowski" />*/}
        <CurrencyConverter
            from="EUR"
            to="USD"
            value={200}
            rate={1.12275}
        />
          <CurrencyConverter
              from="PLN"
              to="EUR"
              value={200}
              rate={0.22}
          />
          <CurrencyConverter
              from="KAT"
              to="PLN"
              value={200}
              rate={10}
          />
      </header>
    </div>
  );
}

export default App;
