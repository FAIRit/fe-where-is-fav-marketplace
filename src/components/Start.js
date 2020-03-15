import React from "react";
import {HashRouter, NavLink} from "react-router-dom";


function Start() {
    return (
        <div className="start_container">
            <div className="name_bar">
                <h1 className="name_app">fav marketplace</h1>
            </div>
            <HashRouter className="start_content">
                <nav className="which_city">
                    <div className="start_question">
                        <h2> gdzie szukasz marketu ? </h2>
                    </div>
                    <NavLink to="/trojmiasto" className="enter_btn">TRÓJMIASTO</NavLink>
                    <NavLink to="/warszawa" className="enter_btn">WARSZAWA</NavLink>
                </nav>
            </HashRouter>
        </div>
    );
}

export default Start