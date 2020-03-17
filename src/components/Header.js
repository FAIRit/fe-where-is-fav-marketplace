import React, {Component} from "react";

export default class Header extends Component {

    state = {
        block: null
    }

    getBlockData(){
        const {blocks,blockShortcut} = this.props;
        console.log(blocks);
        let elem = blocks.filter( bl => bl.name.toLowerCase() === blockShortcut.toLowerCase());
        if(elem[0]){
            this.setState({block: elem[0]})
        } else {
            this.setState({block: null});
        }
    }

    componentDidMount() {
        this.getBlockData();
    }

    render() {
        if(this.state.block === null) return null;


        return (
            <div className="market-box">
                <div className='market-name'>{this.state.block.name}</div>
            </div>
        )
    }

}