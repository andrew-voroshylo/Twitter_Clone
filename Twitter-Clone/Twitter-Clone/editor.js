import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set , get, child, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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
              ids = snapshot.val();
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        const arr = [];   
        const tweeters = document.getElementById('tweeters');
        submit.addEventListener("click", function(event){
        for(let i = 0; i < ids.length;i++){
            if(ids[i] != undefined){
            if(document.cookie == ids[i].email){
            let x = ids[i].tweet;
            let y = ids[i].id;
            arr.push(y);
            let ul = document.createElement('ul');
            const node = document.createTextNode("id: " + y + " Tweet: " + x);
            ul.appendChild(node);
            tweeters.appendChild(ul);
            }
        }
    }
        console.log(arr);
        var hider = document.getElementById("submit");
        hider.style.display = "none";
    })  
    Edit.addEventListener("click", function(event){
        console.log(arr);
        var idToUpdate = document.getElementById("first").value;
        let continueWork = false;
        for(let i = 0;i < arr.length;i++){
            console.log(idToUpdate);
            if(idToUpdate == arr[i]){
                continueWork = true;
            }
        }
        if(continueWork != true){
            console.log("NO VALUE");
            alert("Bad Input");
        }
        else{
            const tweet = document.getElementById("tweet").value;
            update(ref(db, 'tweets/'+ idToUpdate), {
                tweet: tweet
            });
            window.location.href = "Editor.html";
        }
    })
    Delete.addEventListener("click", function(event){
        console.log(arr);
        var idToUpdate = document.getElementById("first").value;
        let continueWork = false;
        for(let i = 0;i < arr.length;i++){
            console.log(idToUpdate);
            if(idToUpdate == arr[i]){
                continueWork = true;
            }
        }
        if(continueWork != true){
            console.log("NO VALUE");
            alert("Bad Input");
        }
        else{
            remove(ref(db, 'tweets/'+ idToUpdate));
            window.location.href = "Editor.html";
        }
    })

