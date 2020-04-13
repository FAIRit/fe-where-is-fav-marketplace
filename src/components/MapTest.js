import React, { useEffect, useState} from "react";
import firebase from '../components/Firebase/FirebaseConfig';
import {useParams} from 'react-router-dom';


function useData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('warszawa')
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(newData)
            })    }, []);
    return data;
}

function Test() {

    const data = useData();
    const {id} = useParams();
    console.log(id);

    return (
        <> {data.map(item => {
            console.log(item);
            // if ((name.toLowerCase() === item.name.toLowerCase()) && (id === item.id.toString()))
            return (
            <div className='details-market' key={item.id}>
                <div className="name-bar">
                    <h1 className="name-market">{item.name}</h1>
                </div>
                <h4 className="haslo-market">{item.haslo}</h4>

                <div className='article-details'>
                    <p className="des-market"><span>krótka historia:</span>
                        {item.desription}</p>
                    <p className="whatbuy"><span>co kupisz:</span>
                        {item.toBuy}</p>
                    <p className="transport"><span>dojedziesz:</span>
                        {item.transport}</p>
                    <p className="adres-market">{item.adres}</p>
                </div>
            </div> )
        })} </>
    )}


export default Test
