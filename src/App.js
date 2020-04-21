import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
// pages
import Home from "./Home/index";
import Frontend from "./Frontend/index";
import Resources from "./Resources/index";
import Developers from "./Developers/index";
import Index from "./Index/index";

function App() {
  return (
<Router>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container">
        <a className="navbar-brand" href="#">HOW ?..</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Resources">Resources</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Developers">Developers</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Frontend">Frontend</Link>
            </li>

          </ul>
        </div>
        </div>
      </nav>

    
  <Route path="/" component={Home} exact />
  <Route path="/Frontend" component={Frontend} exact />
  <Route path="/Resources" component={Resources} exact /> 
  <Route path="/Developers" component={Developers} exact />
  <Route path="/Developers" component={Index} />

</Router>
  );
}

export default App;
