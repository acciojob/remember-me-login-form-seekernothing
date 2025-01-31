//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserBtn = document.getElementById("existing");

    // Check if saved credentials exist
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserBtn.style.display = "block";
    }

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);

        // Show "Login as existing user" button if credentials were saved
        if (localStorage.getItem("username")) {
            existingUserBtn.style.display = "block";
        }
    });

    // Handle "Login as existing user"
    existingUserBtn.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
