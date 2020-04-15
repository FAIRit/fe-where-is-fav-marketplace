import React, {Component} from "react";
import {HashRouter, NavLink, useParams} from "react-router-dom";

function City() {

        const {city} = useParams();
        console.log(city);

        if (city === "trojmiasto") {

            return (
                <div className="start-container">
                    <div className="name-bar">
                        <h1 className="name-app">{city}</h1>
                    </div>
                    <HashRouter className="start-content">
                        <nav className="which-district">
                            <div className="start-question">
                                <h2> gdzie Ci po drodze ? </h2>
                            </div>
                            <NavLink to="/trojmiasto/gdynia" className="enter-btn">GDYNIA</NavLink>
                            <NavLink to="/trojmiasto/gdansk" className="enter-btn">GDAŃSK</NavLink>
                            <NavLink to="/trojmiasto/sopot" className="enter-btn">SOPOT</NavLink>
                        </nav>
                    </HashRouter>
                </div>
            );
        }

        return (
            <div className="start-container">
                <div className="name-bar">
                    <h1 className="name-app">{city}</h1>
                </div>
                <HashRouter className="start-content">
                    <nav className="which-district">
                        <div className="start-question">
                            <h2> gdzie Ci po drodze ? </h2>
                        </div>
                        <NavLink to="/warszawa/ochota" className="enter-btn">OCHOTA</NavLink>
                        <NavLink to="/warszawa/praga" className="enter-btn">PRAGA</NavLink>
                        <NavLink to="/warszawa/wola" className="enter-btn">WOLA</NavLink>
                    </nav>
                </HashRouter>
            </div>

        )
}

export default City

