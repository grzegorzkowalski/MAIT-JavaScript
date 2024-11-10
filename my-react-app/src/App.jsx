import Search from "./components/04_Chapter/Search";
import './App.css';
import people from "./data/people";

function App() {
  //const num1 = parseInt(prompt("Podaj pierwszą liczbę?"));
  //const num2 = parseInt(prompt("Podaj drugą liczbę?"));
  const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  const color = prompt("Wybierz kolor (red, green, blue)?");
  const colors = ["red", "green", "blue"];
  let borderColor = "";

  if (colors.includes(color)) {
    borderColor = color;
  }

  const styles = {
    "width": "100px",
    "height": "100px",
    "borderWidth": "5px",
    "borderStyle": "solid",
    color
  };

  return (
    <>
      {/*<p>{num1 + num2}</p>*/}
      {/*<img src={imageUrl} alt="car" />*/}
      {borderColor ? <div style={styles} /> : <div>Niepoprawny kolor</div>}
      {
        people.map((el) => {
          return (
              <div
                  className="person"
                  key={el.id}
              >
                <img src={el.avatar} />
                <div className="info">
                  <h1>{el.title} {el.name} {el.surname}</h1>
                  <p>{el.bio}</p>
                </div>
              </div>
          )
        })
      }
      <Search />
    </>
  )
}

export default App
