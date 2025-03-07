document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserBtn = document.getElementById("existing");

    // Unified function to update button visibility
    const updateExistingButton = () => {
        const hasCredentials = localStorage.getItem("username") && localStorage.getItem("password");
        existingUserBtn.style.display = hasCredentials ? "block" : "none";
    };

    // Initial state check
    updateExistingButton();

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.clear();
        }

        alert(`Logged in as ${username}`);
        updateExistingButton();
    });

    existingUserBtn.addEventListener("click", function () {
        // Get FRESH credentials from storage
        const currentUser = localStorage.getItem("username");
        alert(`Logged in as ${currentUser}`);
    });
});