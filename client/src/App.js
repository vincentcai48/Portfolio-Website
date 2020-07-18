import React from 'react';
import Navigation from "./Components/Navigation"
import Main from "./Components/Main"
import Contact from "./Components/Contact"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Designs from "./Components/Designs"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/designs" component={Designs}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
