import ParentComponent from "./components/Chapter06/ParentComponent";
import ChildComponent from "./components/Chapter06/ChildComponent";
import GrandchildComponent from "./components/Chapter06/GrandchildComponent";
import ShopItem from "./components/Chapter06/ShopItem";
import ShopList from "./components/Chapter06/ShopList";
import stuffList from "./data/stuffList";
import './App.css';
import HelloWorld from "./components/Chapter07/HelloWorld";
import Modal from "./components/Chapter07/Modal";
import Box from "./components/Chapter07/Box";
import Buttons from "./components/Chapter08/Buttons";
import ShowUserFunc from "./components/Chapter08/ShowUserFunc";
import HoverEvent from "./components/Chapter08/HoverEvent";
import EventsTest from "./components/Chapter08/EventsTest";
import CountThings from "./components/Chapter08/CountThings";
import TextTyper from "./components/Chapter08/TextTyper";
import ToDoList from "./components/Chapter08/ToDoList";
import RandomNumbers from "./components/Chapter08/RandomNumbers";
import ColorfulBoxes from "./components/Chapter08/ColorfulBoxes";
import CrazyDiv from "./components/Chapter08/CrazyDiv";
import ButtonCounter from "./components/Chapter09/ButtonCounter";
import Shop from "./components/Chapter09/Shop";
import TodoApp from "./components/Chapter09/TodoApp";
import MyButton from "./components/Chapter10/MyButton";
import NumberRandomInfo from "./components/Chapter10/NumberRandomInfo";
import NumberInfo from "./components/Chapter10/NumberInfo";
import SecretStuff from "./components/Chapter10/SecretStuff";

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
        {/*<HelloWorld />*/}
        {/*<Modal heading="Zapisz się do newslettera" />*/}
        {/*<Box />*/}
        {/*<Buttons />*/}
        {/*<ShowUserFunc name="Grzegorz" surname="Kowalski" />*/}
        {/*<HoverEvent />*/}
        {/*<EventsTest />*/}
        {/*  /!*Od Zadania 7 startujemy*!/*/}
        {/*<CountThings />*/}
        {/*<TextTyper text="Witaj!" />*/}
        {/*<ToDoList />*/}
        {/*<RandomNumbers />*/}
        {/*/!*<ColorfulBoxes />*!/*/}
        {/*<CrazyDiv />*/}
        {/*<ButtonCounter />*/}
        {/*<Shop />*/}
        {/*<TodoApp />*/}
        {/*<MyButton />*/}
        {/*<NumberRandomInfo />*/}
        {/*<NumberInfo number={1} />*/}
        {/*<NumberInfo number={2} />*/}
        {/*<NumberInfo number={5} />*/}
        {/*<NumberInfo number={6} />*/}
        {/*<NumberInfo number={10} />*/}
        {/*<NumberInfo number={16} />*/}
        <SecretStuff
            password="Test1234"
            correctPassword="Test1234"
            secret="Lubię pizzę."
        />
        <SecretStuff
          password="Test1234"
          correctPassword="Test"
          secret="Lubię ziemniaczki."
        />
      </header>
    </div>
  );
}

export default App;
