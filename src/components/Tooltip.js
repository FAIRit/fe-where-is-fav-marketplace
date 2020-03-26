import React, {Component} from "react";
import {HashRouter, NavLink} from "react-router-dom";

export default class Tooltip extends Component {

    render() {

        const {market, blockName, city} = this.props;

        const activeStyle = {
            color: "#11248d",
            fontSize: "14px"
        };

        return (
            <HashRouter>
                <>
                    <h3 className="tooltip-name">{market.name}</h3>
                    <h4 className='tooltip-tip'>{market.haslo}</h4>
                    <h4 className='tooltip-address'>{market.adres}</h4>
                    <NavLink style={activeStyle}
                             to={`/${city.toLowerCase()}/${blockName.toLowerCase()}/${market.id}`}>Zobacz szczegóły
                    </NavLink>

                    </>
            </HashRouter>
        )
    }
}

