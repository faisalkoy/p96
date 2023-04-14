//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBndvsHCUEt6SN5Q7TdOQXhwCNpnVnyBXc",
      authDomain: "kwitter-672d1.firebaseapp.com",
      databaseURL: "https://kwitter-672d1-default-rtdb.firebaseio.com",
      projectId: "kwitter-672d1",
      storageBucket: "kwitter-672d1.appspot.com",
      messagingSenderId: "541702930626",
      appId: "1:541702930626:web:71fad1ee81ee8746643b5b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}