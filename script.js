<<<<<<< HEAD
// Dummy users for testing
const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "pass1" }
];

let loggedUser = "";

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("loginError");

  const user = users.find(u => u.username === username && u.password === password);
  if(user) {
    loggedUser = user.username;
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("logSection").style.display = "block";
    document.getElementById("receive").value = loggedUser; // auto-fill Receive
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}

// Logging Form Submission
const API_URL = "https://script.google.com/macros/s/AKfycby9M2qtn59Dqh9Kl6kb9CyoK7_E5-bt9sLi9RWgH5djTpMpV_-GtXIWEvlDxB14Iju6Yg/execPASTE_YOUR_WEB_APP_URL_HERE";

function submitForm() {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const transaction = document.getElementById('transaction').value;
  const receive = loggedUser;
  const dateOut = document.getElementById('dateOut').value;
  const timeOut = document.getElementById('timeOut').value;
  const status = document.getElementById('status').value;
  const release = document.getElementById('release').value;

  if (!name) { alert("Please enter your name!"); return; }

  const data = {
    name,
    description,
    transaction,
    receive,
    dateOut,
    timeOut,
    status,
    release,
    releaseby: loggedUser
  };

  fetch(API_URL, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    if(res.result === "success"){
      alert("Log successfully saved!");
      document.querySelectorAll("#logForm input, #logForm select").forEach(el => el.value = "");
      document.getElementById("receive").value = loggedUser;
    } else {
      alert("Server Error: " + res.message);
    }
  })
  .catch(err => { alert("Error: " + err); });
}
=======
const API_URL = "https://script.google.com/macros/s/AKfycbz3eOCQ59Erbznmvi2cdw9uZwHJS_Vwa1eAMGFrXY_fPhYZbn2qXmxhVrPpAf8FY1gZMg/exec"; // Replace with your Google Script URL

function submitForm() {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const transaction = document.getElementById('transaction').value;
  const receive = document.getElementById('receive').value;
  const dateOut = document.getElementById('dateOut').value;
  const timeOut = document.getElementById('timeOut').value;
  const status = document.getElementById('status').value;
  const release = document.getElementById('release').value;

  if (!name) {
    alert("Please enter your name!");
    return;
  }

  const data = {
    name,
    description,
    transaction,
    receive,
    dateOut,
    timeOut,
    status,
    release
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    alert("Log successfully saved!");
    document.querySelectorAll("input, select").forEach(el => el.value = "");
  })
  .catch(err => {
    alert("Error: " + err);
  });
}
>>>>>>> 4d2b7a13f01e59f7cb36125761d6a2df70052380
