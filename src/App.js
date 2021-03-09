import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './components/Destination/Destination';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import CountryDetails from './components/CountryDetails/CountryDetails';

export const CountryContext = createContext();

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setAllCountries(data));
  }, []);

  return (
    <CountryContext.Provider value={allCountries}>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">Rest Countries</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
              <Nav.Link><Link to="/destination">Destination</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/country/:countryCode">
            <CountryDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </CountryContext.Provider>
  );
}

export default App;
