import React, {Component} from "react";

// const imageUrl = "images/peter-wendt--r5KSMkyoSc-unsplash.jpg";

export default class Details extends Component {

    render() {
        const {blocks} = this.props;
        const {city, name, id} = this.props.match.params;

        const block = blocks.filter(block => block.name.toLowerCase() === name.toLowerCase())[0];
        console.log(block);
        const market_details = block.markets.filter(market => market.id = id)[0];

        console.log(market_details);
        console.log(city);

        return (
            <>
                <div className='details-market' key={market_details.id}>
                    <div className="name-bar">
                        <h1 className="name-market">{market_details.name}</h1>
                    </div>
                    <h4 className="haslo-market">{market_details.haslo}</h4>

                    <div className='article-details'>
                        <p className="des-market"><span>krótka historia:</span><br></br>
                            {market_details.desription}</p>
                        <p className="whatbuy"><span>co kupisz:</span><br></br>
                            {market_details.toBuy}</p>
                        <p className="transport"><span>dojedziesz:</span><br></br>
                            {market_details.transport}</p>
                        <p className="adres-market">{market_details.adres}</p>
                    </div>
                </div>
            </>
        )
    }
}
