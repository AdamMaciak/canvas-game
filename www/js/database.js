var firebaseConfig = {
    apiKey: "AIzaSyBQd1NXCPDMrruTiF0s_qQRLLW7NZwiJUA",
    authDomain: "cordova-game-8afc7.firebaseapp.com",
    databaseURL: "https://cordova-game-8afc7.firebaseio.com",
    projectId: "cordova-game-8afc7",
    storageBucket: "cordova-game-8afc7.appspot.com",
    messagingSenderId: "792085979743",
    appId: "1:792085979743:web:45a13da97da51b2d8b31ea",
    measurementId: "G-CTBQYGHQVX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//test function
function addToDb() {
    db.collection("cities").add({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(function () {
            console.log("Document successfully written!");
            window.alert("Document saved")
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

var db = firebase.firestore();
