import "../scss/popup.scss";
var user = "";
chrome.storage.local.get("username", function (result) {
    user = result.username;
});
var firebase = require("firebase/app");
import "firebase/auth";
import "firebase/database";
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyB6NWOkhbU60j_WqBXuJQEkeKPhd6HPscE",
    authDomain: "artsketchchatex.firebaseapp.com",
    databaseURL: "https://artsketchchatex.firebaseio.com",
    projectId: "artsketchchatex",
    storageBucket: "artsketchchatex.appspot.com",
    messagingSenderId: "440718928798",
    appId: "1:440718928798:web:c36e0ea65b67a7bb8b048f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function sendMessage(message) {

    firebase.database().ref('messages').push().set({
        "sender" : user,
        "message": message
    });
    console.log('ok');
    
}

document.querySelector('.chat-message input').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        sendMessage(this.value)
        this.value = null;
    }
});

// listen for incoming messages
firebase.database().ref("messages").on("child_added",function(snapshot){
    let me = (snapshot.val().sender == user) ? " me": ""; 
    document.querySelector('.chat-messages').innerHTML += `<div class="message${me}">
    ${snapshot.val().message}
    <span class="time">00:00 AM</span>
    </div>`;
});