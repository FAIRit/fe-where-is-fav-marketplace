import React, { useState, useEffect } from 'react'
import firebase from './FirebaseConfig'



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

    const GetData = () => {
    const data = useData();

    return (
        <>
                <div>{data.map(item => {
                    console.log(item);
                return<ol key={item.id}>
                   <li>{item.city}</li>L
                   <li>{item.name}</li>
                    <li>{item.desription}</li>
                </ol>
                })} </div>
        </>
            )}


            export default GetData
