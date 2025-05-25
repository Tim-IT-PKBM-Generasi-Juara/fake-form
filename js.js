document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value;
    const correctPassword = "duolingo";

    if (password === correctPassword) {
        // Redirect to recovery code page
        window.location.href = "content.html";
    } else {
        // Display error message
        document.getElementById("errorMessage").textContent = "Incorrect password. Please try again.";
    }
});