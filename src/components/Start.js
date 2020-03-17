import React from "react";
import {HashRouter, NavLink} from "react-router-dom";


function Start() {
    return (
        <div className="start-container">
            <div className="name-bar">
                <h1 className="name-app">fav marketplace</h1>
            </div>
            <HashRouter className="start-content">
                <nav className="which-city">
                    <div className="start-question">
                        <h2> gdzie szukasz marketu ? </h2>
                    </div>
                    <NavLink to="/trojmiasto" className="enter-btn">TRÓJMIASTO</NavLink>
                    <NavLink to="/warszawa" className="enter-btn">WARSZAWA</NavLink>
                </nav>
            </HashRouter>
        </div>
    );
}

export default Start