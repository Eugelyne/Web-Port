// Function to handle user signup
function signup() {
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value;
    const errorMessage = document.getElementById("signup-error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Username already exists. Please choose another.";
    } else {
        // Store the new user's credentials in local storage
        localStorage.setItem(username, password);
        alert("Signup successful! Logging you in...");
        
        // Automatically log in the user after successful signup
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", username);
        showWelcomeMessage(); // Show the welcome message
    }
}

// Function to handle user login
function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Check if the username exists and the password matches
    if (localStorage.getItem(username) && localStorage.getItem(username) === password) {
        // Store login state and username in local storage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", username);
        showWelcomeMessage();
    } else {
        // Display error message for invalid credentials
        errorMessage.textContent = "Invalid username or password.";
    }
}

// Function to handle user logout
function logout() {
    // Remove user session data from local storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    showLoginForm();
}

// Function to display the welcome message
function showWelcomeMessage() {
    document.getElementById("login-form").style.display = "none"; // Hide login form
    document.getElementById("signup-form").style.display = "none"; // Hide signup form
    document.getElementById("welcome-message").style.display = "block"; // Show welcome message
    document.getElementById("user-name").textContent = localStorage.getItem("currentUser"); // Display username
}

// Function to show the login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block"; // Show login form
    document.getElementById("signup-form").style.display = "none"; // Hide signup form
    document.getElementById("welcome-message").style.display = "none"; // Hide welcome message
}

// Function to show the signup form
function showSignupForm() {
    document.getElementById("login-form").style.display = "none"; // Hide login form
    document.getElementById("signup-form").style.display = "block"; // Show signup form
    document.getElementById("login-error-message").textContent = ""; // Clear login error message
}

// Check if user is already logged in when the page loads
if (localStorage.getItem("loggedIn") === "true") {
    showWelcomeMessage();
}