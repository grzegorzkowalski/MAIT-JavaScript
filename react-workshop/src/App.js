import Hello from "./components/Chapter11/Hello";
import './App.css';
import CarList from "./components/Chapter11/CarList";
import AddTwoNumbers from "./components/Chapter11/AddTwoNumbers";

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
        {/*<Hello />*/}
        {/*<CarList />*/}
        <AddTwoNumbers />
        {/*//Do zrobienia ostatnie zadanie z Formularzy i zadania z Fetch*/}
        {/*  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")*/}
        {/*  .then(res => res.json())*/}
        {/*  .then(res2 => console.log(res2));*/}
      </header>
    </div>
  );
}

export default App;
