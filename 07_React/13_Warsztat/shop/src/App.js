import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Summary from "./pages/Summary";
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/summary/:price",
    element: <Summary />
  },
]);
function App() {
  return (
        <Container>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#pricing">Koszyk</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <RouterProvider router={router} />
        </Container>
  );
}

export default App;
