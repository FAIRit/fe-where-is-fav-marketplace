import React, {Component} from "react";
import {HashRouter, NavLink, Route} from "react-router-dom";


class City extends Component {
    render() {

        // JAK ZROBIĆ WARUNKOWE RENEDEROWANIE W TYM MIEJSCU ??
        // teraz jest tak, że name == warszawa jest zawsze false i wypluwa komponent z trojmiejskimi
        // oraz gdy zrobiłam warunek, to nie wyświetla się 40-42 linijka kodu
        //                 <div className="name_bar">
        //                 <h1 className="name_app">{name}</h1>
        //             </div>

        // if (name == "warszawa") {
        //
        //     return (
        //         <div className="start_container">
        //             <div className="name_bar">
        //                 <h1 className="name_app">{name}</h1>
        //             </div>
        //             <HashRouter className="start_content">
        //                 <nav className="which_district">
        //                     <div className="start_question">
        //                         <h2> gdzie Ci po drodze ? </h2>
        //                     </div>
        //                       <NavLink to="/trojmiasto/gdynia" className="enter_btn">GDYNIA</NavLink>
        //                      <NavLink to="/trojmiasto/gdansk" className="enter_btn">GDAŃSK</NavLink>
        //                      <NavLink to="/trojmiasto/sopot" className="enter_btn">SOPOT</NavLink>
        //                 </nav>
        //             </HashRouter>
        //         </div>
        //     );
        // }

        return (
            <div className="start_container">
                <div className="name_bar">
                    <h1 className="name_app">{this.props.match.params.city}</h1>
                </div>
                <HashRouter className="start_content">
                    <nav className="which_district">
                        <div className="start_question">
                            <h2> gdzie Ci po drodze ? </h2>
                        </div>
                        <NavLink to="/warszawa/ochota" className="enter_btn">OCHOTA</NavLink>
                        <NavLink to="/warszawa/praga" className="enter_btn">PRAGA</NavLink>
                        <NavLink to="/warszawa/wola" className="enter_btn">WOLA</NavLink>
                    </nav>
                </HashRouter>
            </div>

        )
    }

}

export default City

