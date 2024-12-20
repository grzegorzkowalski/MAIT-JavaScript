import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CityWeather from "./components/CityWeather";
import FindWeather from "./components/FindWeather";
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route element={<CityWeather />} path="/cityweather/:city" />
            <Route element={<FindWeather /> } path="/findweather" />
            <Route element={<Home />} path="/" />
        </Routes>
    </BrowserRouter>
  )
}

export default App
