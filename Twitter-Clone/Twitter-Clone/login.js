import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCL85dNpp38xTlUSnkPMrNTK8XFQ2YIaWk",
    authDomain: "twitter-clone-1703a.firebaseapp.com",
    databaseURL: "https://twitter-clone-1703a-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-1703a",
    storageBucket: "twitter-clone-1703a.appspot.com",
    messagingSenderId: "641280779591",
    appId: "1:641280779591:web:723912906e3f357eec9862"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Variables
  const auth = getAuth(app)
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.cookie = email;
      const user = userCredential.user;
      window.location.href = "Landing.html";
      // ...
    })
    .catch((error) => {
      alert('Incorrect Information');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  })
