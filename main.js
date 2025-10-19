const scriptURL = "https://script.google.com/macros/s/AKfycbyx3pfUa_0DPL919HEoDXGH2VWZ2acae6qpooD7N_bs-SvVQZ6B-BoWLNGGH58AkLAKCw/exec";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  try {
    const formData = new FormData();
    formData.append("action", "login");
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
  localStorage.setItem("fullname", result.fullname);
  localStorage.setItem("role", result.role);
  localStorage.setItem("branch", result.branch); // ✅ add this
  window.location.href = "dashboard.html";

    } else {
      errorBox.textContent = result.message || "Invalid login credentials.";
      errorBox.style.display = "block";
    }
  } catch (err) {
    console.error(err);
    errorBox.textContent = "Connection error. Please try again.";
    errorBox.style.display = "block";
  }
});
