import React, {Component} from "react";
import Map from "./Map";
import Header from "./Header";


export default class Block extends Component {

    render() {
        const {blocks} = this.props;
        console.log(blocks);
        const {name, city} = this.props.match.params;
        const block = blocks.find( el => el.name.toLowerCase() === name.toLowerCase());
        console.log(block);
        if(!block){
            return <h1>Nie znaleziono dzielnicy</h1>
        }
        return (
            <>
                <Header blocks={blocks} blockShortcut={name}/>
                <Map city={city} block={block}/>
            </>
        )
    }
}
