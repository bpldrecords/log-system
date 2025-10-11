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
