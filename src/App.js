import './App.css';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './components/Home';
import { Features } from './components/Features';
import { Trainers } from './components/Trainers';
import { Plans } from './components/Plans';
import Register from './components/login&Register/register';
import Login from './components/login&Register/login';
import { Packages } from './components/packages/packages';

function App() {
  return (
    <>
      <Router>
          <Route exact path="/Register">
            <Register/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        <br /> <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/features">
            <Features/>
          </Route>
          <Route exact path="/trainers">
            <Trainers/>
          </Route>
          <Route exact path="/Packages">
            <Packages/>
          </Route>
          <Route exact path="/plans">
            <Plans/>
          </Route>
        </Switch>

      </Router>
      
    </>
  );
}

export default App;
