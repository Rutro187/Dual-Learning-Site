
'use strict';

// [START import]
const functions = require('firebase-functions');
const express = require('express');
const app = express();
// [END import]

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]

//* Creates firebase admin and gets access to firestore defined in same firebase project.
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();


/**
* Simple request that extracts data from firebase firestore (database)
* --------------------------------------------------------------------------------------
* Try: https://quizapp-2b262.firebaseapp.com/quiz
*/
app.get('/quiz', (req, res) => {
    var docRef = firestore.collection("quiz");

 // See https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
 docRef.get().then((doc) => {
     if (doc.exists) {
         return res.status(200).json(doc.data());
     } else {
         return res.status(400).json({"message":"User ID not found."});
     }
 }).catch((error) => {
     return res.status(400).json({"message":"Unable to connect to Firestore."});
 });
});
/* [END `/userProfile` ] */