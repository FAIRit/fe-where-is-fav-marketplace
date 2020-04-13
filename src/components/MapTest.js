import React, { useEffect, useState} from "react";
import firebase from '../components/Firebase/FirebaseConfig';
import {useParams} from 'react-router-dom';


function useData(id) {
    const [data, setData] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('warszawa').doc(id)
            .get().then(doc => doc.exists ? setData(doc.data()) : null);
    }, [id]);

    return data;
}

function Test() {

    const {id} = useParams();
    const data = useData(id);

    return (
        <>
            {data
                ?
                <div className='details-market' key={data.id}>
                    <div className="name-bar">
                        <h1 className="name-market">{data.name}</h1>
                    </div>
                    <h4 className="haslo-market">{data.haslo}</h4>

                    <div className='article-details'>
                        <p className="des-market"><span>krótka historia:</span>
                            {data.desription}</p>
                        <p className="whatbuy"><span>co kupisz:</span>
                            {data.toBuy}</p>
                        <p className="transport"><span>dojedziesz:</span>
                            {data.transport}</p>
                        <p className="adres-market">{data.adres}</p>
                    </div>
                </div>
                : <p>Nie znaleziono</p>
            }
        </>
    );
}


export default Test
