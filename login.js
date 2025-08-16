// Import Supabase client
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Replace these with your own Supabase project credentials
const SUPABASE_URL = "https://iawjybkimcfijucfyhry.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhd2p5YmtpbWNmaWp1Y2Z5aHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNjM4MDAsImV4cCI6MjA3MDgzOTgwMH0.DQZRlvF0RTP6m2fvuyGoRYg5rGBnHIbPXm79gLQP5ec";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ======== Toggle Between Login and Register ======== //
document.getElementById("register").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

document.getElementById("login").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// ======== Handle Register ======== //
document.getElementById("registerButton").addEventListener("click", async function (e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Registration failed: " + error.message);
  } else {
    alert("Registration successful! Please check your email to confirm.");
    // Switch back to login form
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
});

// ======== Handle Login ======== //
document.getElementById("loginButton").addEventListener("click", async function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Login successful!");
    // Redirect to dashboard or home page
    window.location.href = "home.html";
  }
});
