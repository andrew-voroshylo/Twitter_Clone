import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set , get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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

  let ids = 0;
  const db = getDatabase();
      const a = ref(db);
      get(child(a, '/tweets/')).then((snapshot) => {
          if (snapshot.exists()) {
              let allInfo = snapshot.val();
              ids = allInfo.length;
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
    event.preventDefault()
    const email = document.cookie;
    const tweet = document.getElementById('tweet').value;
    if(tweet!= ""){
    const id = ids;
 
      const db = getDatabase();
      try {
        set(ref(db, 'tweets/' + id), {
          id : id,
          tweet: tweet,
          email: email
        });
        window.location.href = "Create.html";
      } catch (error) {
        console.error(error);
      }
    }
    else{
        alert('Tweet should not be empty')
    }
  })

 