import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDu1fsYDo4uI_8K_jpUim3xH79-gtaMcH4",
    authDomain: "todolist-6084c.firebaseapp.com",
    databaseURL: "https://todolist-6084c.firebaseio.com",
    projectId: "todolist-6084c",
    storageBucket: "todolist-6084c.appspot.com",
    messagingSenderId: "1095727590642",
    appId: "1:1095727590642:web:0c9da542ff45de262df46b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;