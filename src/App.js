import React from 'react';
import {HashRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import './scss/Main.scss';
import Home from "./components/Home";
import Trojmiasto from "./components/Trojmiasto";
import Warszawa from "./components/Warszawa";



function App() {
  return (
      <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/3city" component={Trojmiasto} />
        <Route path="/warsaw" component={Warszawa} />
      </HashRouter>
  );
}

export default App;
