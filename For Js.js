// Function to show the signup form
function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-error-message").textContent = "";
}

// Function to show the login form
function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-error-message").textContent = "";
}

// Function to login
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error-message");

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        showWelcomeMessage();
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}

// Function to sign up
function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const errorMessage = document.getElementById("signup-error-message");

    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Username already exists.";
    } else {
        localStorage.setItem(username, password);
        alert("Signup successful! You can now log in.");
        showLoginForm();
    }
}

// Function to show welcome message
function showWelcomeMessage() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("user-name").textContent = localStorage.getItem("username");
}

// Function to logout
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    showLoginForm();
}

// Check if user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
    showWelcomeMessage();
}