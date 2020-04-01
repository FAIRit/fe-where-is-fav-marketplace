import React, { useEffect, useState } from "react";
import { getMarket } from "../components/Firebase/fetchData";

// const imageUrl = "images/peter-wendt--r5KSMkyoSc-unsplash.jpg";

const Details = () => {

    const [data, setData] = useState([]);
    const fetchMarket = () => getMarket().then(data => setData(data));

        const {blocks} = this.props;
        const {name, id} = this.props.match.params;
        const block = blocks.find(block => block.name.toLowerCase() === name.toLowerCase());
        const market_details = block.markets.find(market => market.id = id);

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

export default Details();
