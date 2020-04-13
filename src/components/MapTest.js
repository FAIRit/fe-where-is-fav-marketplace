import React, { useEffect, useState} from "react";
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

function TestMap() {

        const data = useData();

    return (
        <>
            <div className="testDiv">{data.map(item => {
                return<ol className="testList" key={item.id}>
                    <li>{item.city}</li>
                    <li>{item.name}</li>
                    <li>{item.desription}</li>
                </ol>
            })} </div>
        </>
    );
}

export default TestMap
