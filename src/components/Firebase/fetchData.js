const DatabaseURL = "https://marketplace-acfff.firebaseio.com";


function getMarket() {
    return fetch(`${DatabaseURL}/data.json`)
        .then(response => response.json())
        .then(data => {
            const keys = Object.keys(data);
            const markets = keys.map(key => {
                return {
                    id: key,
                    ...data[key]
                };
            });
            return Promise.resolve(markets);
        });
}

export {getMarket};
