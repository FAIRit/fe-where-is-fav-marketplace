import React, { Component} from "react";

// const imageUrl = "images/peter-wendt--r5KSMkyoSc-unsplash.jpg";


export default class Details extends Component {

    render() {
        const {blocks} = this.props;
        const {name, id} = this.props.match.params;
        const block = blocks.find(block => block.name.toLowerCase() === name.toLowerCase());
        const marketDetails = block.markets.find(market => market.id.toString() === id);

        return (
            <>
                <div className='details-market' key={marketDetails.id}>
                    <div className="name-bar">
                        <h1 className="name-market">{marketDetails.name}</h1>
                    </div>
                    <h4 className="haslo-market">{marketDetails.haslo}</h4>

                    <div className='article-details'>
                        <p className="des-market"><span>krótka historia:</span><br></br>
                            {marketDetails.desription}</p>
                        <p className="whatbuy"><span>co kupisz:</span><br></br>
                            {marketDetails.toBuy}</p>
                        <p className="transport"><span>dojedziesz:</span><br></br>
                            {marketDetails.transport}</p>
                        <p className="adres-market">{marketDetails.adres}</p>
                    </div>
                </div>
            </>
        )
    }
}
