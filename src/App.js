import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import './scss/Main.scss';
import Start from "./components/Start";
import City from "./components/City";
import Block from "./components/Block";
import Detail from "./components/Detail";
import blocks from "./data/data";


function App() {
    return (
        <HashRouter>
            <>
                <Route exact path="/" component={Start}/>
                <Route path="/:city" component={City}/>
                <Route exact path="/:city/:name" render={props => <Block {...props} blocks={blocks}/>}/>
                <Route exact path="/:city/:name/:id" render={props => <Detail {...props} blocks={blocks}/>}/>
                {/* <Route component={NotFound}/>*/}
</>
</HashRouter>
);
}

export default App;
