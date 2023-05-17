import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import FindWeather from "./pages/FindWeather";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cityweather/:city",
        element: <CityWeather />
    },
    {
        path: "/findweather",
        element: <FindWeather />
    },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
