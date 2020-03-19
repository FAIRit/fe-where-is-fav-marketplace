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

                    <h2 className="name-market">{market_details.name}</h2>
                    <h4 className="haslo-market">{market_details.haslo}</h4>

                    <div className='articleetails'>
                        <p className="des-market">{market_details.desription}</p>
                        <p className="whatbuy-market">{market_details.toBuy}</p>
                        <p className="transport-market">{market_details.transport}</p>
                        <p className="adres-market">{market_details.adres}</p>
                    </div>
                </div>
            </>
        )
    }
}