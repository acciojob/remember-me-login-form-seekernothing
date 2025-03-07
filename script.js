document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserBtn = document.getElementById("existing");

    // Update existing user button visibility
    const updateExistingButton = () => {
        const hasCredentials = localStorage.getItem("username") && localStorage.getItem("password");
        existingUserBtn.style.display = hasCredentials ? "block" : "none";
    };

    // Initial check for saved credentials
    updateExistingButton();

    // Form submission handler
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Update localStorage based on checkbox state
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
        updateExistingButton(); // Refresh button visibility
    });

    // Existing user login handler
    existingUserBtn.addEventListener("click", function () {
        const currentUsername = localStorage.getItem("username");
        alert(`Logged in as ${currentUsername}`);
    });
});