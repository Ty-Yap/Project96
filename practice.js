var firebaseConfig = {
    apiKey: "AIzaSyC57-MSk6kkUdGQ8nT2Goq-sH9dIj_j9uU",
    authDomain: "kwitter-71571.firebaseapp.com",
    databaseURL: "https://kwitter-71571-default-rtdb.firebaseio.com",
    projectId: "kwitter-71571",
    storageBucket: "kwitter-71571.appspot.com",
    messagingSenderId: "124005732232",
    appId: "1:124005732232:web:c9d104279a2097b1f8743d",
    measurementId: "G-D0225KF0WG"
  };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
    });
}