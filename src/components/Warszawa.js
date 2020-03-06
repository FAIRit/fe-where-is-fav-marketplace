import React from "react";
import {HashRouter, NavLink} from "react-router-dom";

function Warszawa () {
    return (
        <div className="start_container">
            <div className="name_bar">
                <h1 className="name_app">fav marketplace</h1>
            </div>
            <div className="icon"></div>
            <HashRouter className="start_content">
                <nav className="which_district">
                    <div className="start_question">
                        <h2> w okolicy której z dzielnic jesteś ? </h2>
                    </div>
                    <NavLink to="/warsaw/ochota" className="enter_btn">OCHOTA</NavLink>
                    <NavLink to="/warsaw/praga" className="enter_btn">PRAGA</NavLink>
                    <NavLink to="/warsaw/wola" className="enter_btn">WOLA</NavLink>
                </nav>
            </HashRouter>
        </div>
    );
}

export default Warszawa