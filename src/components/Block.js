import React, {Component} from "react";
import Map from "./Map";
import Header from "./Header";

export default class Block extends Component {

    render() {
        const {blocks} = this.props;
        const {name} = this.props.match.params;
        const block_name = blocks.filter( el => el.name.toLowerCase() === name.toLowerCase());

        if(!block_name[0]){
            return <h1>Nie znaleziono dzielnicy</h1>
        }

        return (
            <>
                <Header blocks={blocks} blockShortcut={name}/>
                <Map data={block_name[0]}/>
            </>
        )
    }
}