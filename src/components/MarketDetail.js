import React, { useEffect, useState} from "react";
import firebase from '../components/Firebase/FirebaseConfig';
import {useParams} from 'react-router-dom';
import photo from "../assets/Webp.net-resizeimage.png";


function useData(id) {
    const [data, setData] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('warszawa').doc(id)
            .get().then(doc => doc.exists ? setData(doc.data()) : null);
    }, [id]);

    return data;
}

function MarketDetail() {

    const {id} = useParams();
    const data = useData(id);

    return (
        <>
            {data
                ?
                <div className='details-market' key={data.id}>
                    <div className="name-bar">
                        <h1 className="name-market">{data.name}</h1>
                        <h4 className="haslo-market">{data.haslo}</h4>
                    </div>
                    <img src={photo} alt='marketPhoto'/>
                    <div className='article-details'>
                        <span>Krótka historia: </span>
                        <p>{data.desription}</p>
                        <span>Co tam kupisz: </span>
                        <p>{data.toBuy}</p>
                        <span>Transport: </span>
                        <p>{data.transport}</p>
                        <span>Lokalizacja: </span>
                        <p>{data.address}</p>
                    </div>
                </div>
                : <p>Nie znaleziono</p>
            }
        </>
    );
}


export default MarketDetail
