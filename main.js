// Initialize Supabase client
const supabaseUrl = 'https://tbfxfnbkmpwmahpdrcke.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZnhmbmJrbXB3bWFocGRyY2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzAxNDQsImV4cCI6MjA3NjU0NjE0NH0.7lGTqu310YMMgYIaDsSPt3pwk_505JMEccBJ_F8Xbi8';

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

const loginForm = document.getElementById('loginForm');
const errorBox = document.getElementById('error');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const { data, error } = await supabaseClient
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password); // For testing only

    if (error) throw error;

    if (data.length > 0) {
      const user = data[0];
      localStorage.setItem("fullname", user.fullname);
      localStorage.setItem("role", user.role);
      localStorage.setItem("branch", user.branch);
      window.location.href = "dashboard.html";
    } else {
      errorBox.textContent = "Invalid login credentials.";
      errorBox.style.display = "block";
    }
  } catch (err) {
    console.error(err);
    errorBox.textContent = "Connection error. Please try again.";
    errorBox.style.display = "block";
  }
});
