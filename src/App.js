import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import './scss/Main.scss';
import Start from "./components/Start";
import City from "./components/City";
import Block from "./components/Block";
import Detail from "./components/Detail";
import blocks from "./data/data";
import Test from "./components/MapTest"
import TestBlock from "./components/TestBlock";

function App() {

    return (
        <div>
            <HashRouter>
                <>
                    <Route exact path="/" component={Start}/>
                    <Route exact path="/:city" component={City}/>
                    {/*<Route path path="/:city/:name" component={TestBlock} />*/}
                   <Route exact path="/:city/:name"  render={(props) => <Block {...props} blocks={blocks}/>} />
                    <Route exact path="/:city/:name/:id" component={Test} />
                       {/*render={(props) => <Detail {...props} blocks={blocks}/>}/>*/}
                    {/* <Route component={NotFound}/>*/}
                </>
            </HashRouter>
        </div>
    )
}

export default App;
