import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CityWeather from "./components/CityWeather";
import FindWeather from "./components/FindWeather";
import Home from "./components/Home";
import Navigation from "./components/Navigation.jsx";

function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/cityweather/:city" element={<CityWeather />} />
            <Route path="/findweather" element={<FindWeather />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
