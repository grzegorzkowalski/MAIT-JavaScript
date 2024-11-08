import './App.css'

function App() {
  const num1 = parseInt(prompt("Podaj pierwszą liczbę?"));
  const num2 = parseInt(prompt("Podaj drugą liczbę?"));
  return (
    <>
        <p>{num1 + num2}</p>
    </>
  )
}

export default App
