// Check if user is logged in
const fullname = localStorage.getItem("fullname");
const role = localStorage.getItem("role");

if (!fullname || !role) {
  // Redirect to login if no session
  window.location.href = "index.html";
} else {
  document.getElementById("userFullname").innerText = fullname;
  document.getElementById("userRole").innerText = role;
}

// Button navigation
document.getElementById("btnReceiving").addEventListener("click", () => {
  window.location.href = "receiving.html";
});

document.getElementById("btnPending").addEventListener("click", () => {
  window.location.href = "pending.html";
});

// Logout button
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
