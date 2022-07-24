import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection,getDocs, doc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuXF82LrXjbOKi11wpOJWfruPtZIpkrPI",
    authDomain: "newsandbox-e5fb2.firebaseapp.com",
    projectId: "newsandbox-e5fb2",
    storageBucket: "newsandbox-e5fb2.appspot.com",
    messagingSenderId: "1025121540568",
    appId: "1:1025121540568:web:ee6fc230634064c103baad"
};

// init firebase app
initializeApp(firebaseConfig)


// init services
const db = getFirestore()

  // collection ref
const colRef=collection(db,'books')

  // get collection data
getDocs(colRef)
.then((snapshot)=>{
    let books =[]
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data(),id:doc.id})
    })
    console.log(books)
})
.catch(err =>{
    console.log(err.message)
})