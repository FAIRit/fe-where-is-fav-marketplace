import React from "react";
import {HashRouter, NavLink} from "react-router-dom";


function Trojmiasto() {
return (
    <div className="start_container">
        <div className="name_bar">
            <h1 className="name_app">fav marketplace</h1>
        </div>
        <div className="icon"></div>
        <HashRouter className="start_content">
            <nav className="which_district">
                <div className="start_question">
                    <h2> w okolicy którego miasta jesteś ? </h2>
                </div>
                <NavLink to="/3city/gdansk" className="enter_btn">GDAŃSK</NavLink>
                <NavLink to="/3city/gdynia" className="enter_btn">GDYNIA</NavLink>
                <NavLink to="/3city/sopot" className="enter_btn">SOPOT</NavLink>
            </nav>
        </HashRouter>
    </div>
);
    }

    export default Trojmiasto