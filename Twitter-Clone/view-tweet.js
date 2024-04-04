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
  let counter = 0;
  const db = getDatabase();
      const a = ref(db);
      get(child(a, '/tweets/')).then((snapshot) => {
          if (snapshot.exists()) {
              ids = snapshot.val();
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    
        const tweeters = document.getElementById('tweeters');
        submit.addEventListener("click", function(event){
        for(let i = counter; i < counter+5;i++){
            if(ids[i] != undefined){
            let x = ids[i].tweet;
            console.log(x);
            let ul = document.createElement('ul');
            const node = document.createTextNode("Tweet: " + x);
            ul.appendChild(node);
            tweeters.appendChild(ul);
            }
        }
        counter = counter +5;
        if(counter > ids.length){
            var x = document.getElementById("submit");
            x.style.display = "none";
        }
    })