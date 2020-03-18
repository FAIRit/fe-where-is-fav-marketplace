import React, {Component} from "react";
import {HashRouter, NavLink} from "react-router-dom";

export default class Tooltip extends Component {

    render() {

        const {item: market, block_name} = this.props;

        const activeStyle = {
            color: "#11248d",
            fontSize: "14px"
        };

        // const city = this.props.match.params.city;
        //
        // if (city === "warszawa") {

            return (
                <HashRouter>
                    <>
                        <h3 className="tooltip-name">{market.name}</h3>
                        <h4 className='tooltip-tip'>{market.haslo}</h4>
                        <h4 className='tooltip-address'>{market.adres}</h4>
                        <NavLink style={activeStyle}
                                 to={`/warszawa/${block_name.toLowerCase()}/${market.id}`}>Zobacz szczegóły
                        </NavLink>
                    </>
                </HashRouter>
            )
        }
}
        // return (
        //     <HashRouter>
        //         <>
        //             <h3 className="tooltip-name">{market.name}</h3>
        //             <h4 className='tooltip-tip'>{market.haslo}</h4>
        //             <h4 className='tooltip-address'>{market.adres}</h4>
        //             <NavLink style={activeStyle}
        //                      to={`/trojmiasto/${block_name.toLowerCase()}/${market.id}`}>Zobacz szczegóły
        //             </NavLink>
        //         </>
        //     </HashRouter>
        // )
