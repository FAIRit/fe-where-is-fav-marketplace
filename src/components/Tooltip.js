import React, {Component} from "react";
import {HashRouter, NavLink} from "react-router-dom";

export default class Tooltip extends Component {

    render() {
        const {item: market, block_name} = this.props;

        return (
            <HashRouter>
                <>
                    <h3 className="tooltip_name">{market.name}</h3>
                    <h4 className='tooltip_tip'>{market.haslo}</h4>
                    <h4 className='tooltip_adres'>{market.adres}</h4>
                    <NavLink to={`/warszawa/${block_name.toLowerCase()}/${market.id}`}>Zobacz szczegóły</NavLink>
                </>
            </HashRouter>
        )
    }
}