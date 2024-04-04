import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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
    const username = document.getElementById('username').value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const db = getDatabase();
      try {
        set(ref(db, 'users/' + email.replaceAll('.', '_')), {
          username: username,
          email: email
        });
        setTimeout(() => { window.location.href = "Login.html"; }, 500);
      } catch (error) {
        alert('Bad Registration');
        console.error(error);
      }
    },
    (rejected) => {
      alert('Your Registration Information is not valid');
    })
  })
 

  