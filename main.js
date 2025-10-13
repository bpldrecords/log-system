const scriptURL = "https://script.google.com/macros/s/AKfycbwMhqJ6kfXFg5TNB7qE7pepNkSkfYoNcS5fwMKtUdAaKTvV2TJHOkAlZCBOckOTMR5WHQ/exec";

document.getElementById("loginForm").addEventListener("submit", async e => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", username, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("username", username);
      localStorage.setItem("role", data.role);
      localStorage.setItem("fullname", data.fullname);

      window.location.href = "dashboard.html"; // redirect after login
    } else {
      document.getElementById("error").innerText = data.message || "Invalid username or password";
    }

  } catch (err) {
    document.getElementById("error").innerText = "Connection error";
    console.error(err);
  }
});
