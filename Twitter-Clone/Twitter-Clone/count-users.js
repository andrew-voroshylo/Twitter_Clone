import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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


const db = getDatabase();
    const a = ref(db);
    get(child(a, '/users/')).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          console.log(snapshot.size);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

