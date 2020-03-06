import React from "react";
import {HashRouter, Route, NavLink, Switch} from "react-router-dom";
import Start_Header from "./Start Header";

function Start() {
    return (
        // kontener Start_Header - jak dodać przy HashRouter ?
        <div className="start_container">
            <div className="name_bar">
                <h1 className="name_app">fav marketplace</h1>
            </div>
            <div className="icon"></div>
            <HashRouter className="start_content">
                <nav className="which_city">
                    <div className="start_question">
                        <h2> gdzie szukasz marketu ? </h2>
                    </div>
                    <NavLink to="/3city" className="enter_btn">TRÓJMIASTO</NavLink>
                    <NavLink to="/warsaw" className="enter_btn">WARSZAWA</NavLink>
                </nav>
            </HashRouter>
        </div>
    );
}

export default Start