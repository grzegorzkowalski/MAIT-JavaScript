import ParentComponent from "./components/Chapter06/ParentComponent";
import ChildComponent from "./components/Chapter06/ChildComponent";
import GrandchildComponent from "./components/Chapter06/GrandchildComponent";
import ShopItem from "./components/Chapter06/ShopItem";
import ShopList from "./components/Chapter06/ShopList";
import stuffList from "./data/stuffList";
import './App.css';
import HelloWorld from "./components/Chapter07/HelloWorld";

const shopItemElement = {
    title: "MacBook Pro",
    image: "https://www.cortland.pl/images/thumbnails/380/380/detailed/161/Apple_MacBook_Pro_132_7zj9-ui.jpg?t=1660049774",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<ParentComponent>*/}
        {/*    <ChildComponent>*/}
        {/*         <GrandchildComponent />*/}
        {/*    </ChildComponent>*/}
        {/*</ParentComponent>*/}
        {/*<ShopItem item={shopItemElement} />*/}
        {/*<ShopList list={stuffList} />*/}
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
