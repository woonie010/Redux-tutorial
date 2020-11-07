import React, { useState } from 'react';
import firebase from '../config';

const Appp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const storeData = {
            uid: data.user.uid,
            email: data.user.email
        };
        await firebase.firestore().collection('users').doc(storeData.uid).set(storeData);
    }

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>ok</button>
        </div>
    )
}

export default Appp;