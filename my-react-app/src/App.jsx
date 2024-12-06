import Buttons from "./components/08_Chapter/Buttons";
import EventsTest from "./components/08_Chapter/EventsTest";
import CrazyDiv from "./components/08_Chapter/CrazyDiv";
import RandomNumbers from "./components/08_Chapter/RandomNumbers";
import ButtonCounter from "./components/09_Chapter/ButtonCounter";
import NumberInfo from "./components/10_Chapter/NumberInfo";
import './App.css';
import MyButton from "./components/10_Chapter/MyButton";
import SecretStuff from "./components/10_Chapter/SecretStuff.jsx";

function App() {

  return (
    <>
      {/*<Buttons />*/}
      {/*<EventsTest />*/}
      {/*<CrazyDiv />*/}
      {/*<RandomNumbers />*/}
      {/*<ButtonCounter />*/}
      {/*{*/}
      {/*  [1,2,5,7,10,16].map(el => <NumberInfo key={el} number={el} />)*/}
      {/*}*/}
      <MyButton />
      <SecretStuff secret="Lubię pizzę" password="Test1234" correctPassword="Test1234" />
      <SecretStuff secret="Lubię pizzę" password="Test" correctPassword="1234" />
    </>
  )
}

export default App
