import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import Map from "./Map";
import Header from "./Header";
import firebase from '../components/Firebase/FirebaseConfig';


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

function TestBlock() {

    const data = useData();
    console.log(data);
    const {name, city} = useParams();

    if (data.map( item => item.name.toLowerCase() === name.toLowerCase())) {

    return (
        <>
            <div>{data.map(item => {
                console.log(item);
                return (
                <ol key={item.id}>
                    <li>{item.city}</li>L
                    <li>{item.name}</li>
                    <li>{item.desription}</li>
                </ol> )
            })} </div>
        </>
    )}
}

export default TestBlock
