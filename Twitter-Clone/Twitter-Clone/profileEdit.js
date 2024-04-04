import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child, update } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, updatePassword,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

  var z = document.getElementById("hide");
  z.style.display = "none";
  const auth = getAuth(app)
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
    if(email != document.cookie){
        alert('This is not the email of currently logged in user');
      }
      else{
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.cookie = email;
      const user = userCredential.user;
      z.style.display = "block";
      var zooo = document.getElementById("zoo");
      zooo.style.display = "none";
      const users = auth.currentUser;
    

EditPass.addEventListener("click", function(event){
const newPassword = document.getElementById("second").value;
if(newPassword != ""){
updatePassword(users, newPassword).then(() => {
    window.location.href = "ProfileEdit.html";
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});
}
else{
    alert('Password cannot be null')
}
})
    })
    .catch((error) => {
      alert('Incorrect Information');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
  })

        let b = 0; 
        let x = document.cookie;
        let replacement = 0;
        const db = getDatabase();
            const a = ref(db);
            get(child(a, '/users/')).then((snapshot) => {
        if (snapshot.exists()) {
            b = snapshot.val();
            replacement = (b[x.replaceAll('.', '_')].username);
          document.getElementById("demo").innerHTML = replacement;
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      Edit.addEventListener("click", function(event){
             const username = document.getElementById("first").value;
            if(username != ""){
             update(ref(db, 'users/'+ x.replaceAll('.', '_')), {
                 username: username
             });
            window.location.href = "ProfileEdit.html";
            }
            else{
                alert('Please input Username');
            }
        
    })
  