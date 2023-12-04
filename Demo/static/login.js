let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let signInClicked = false;

signinBtn.onclick = function () {
    if (!signInClicked) {
        // First click, change the view
        nameField.style.maxHeight = "0";
        title.innerHTML = "LogIn";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
        signInClicked = true;
    } else {
        // Second click, redirect if fields are filled
        let email = document.querySelector('input[type="email"]').value;
        let password = document.querySelector('input[type="password"]').value;

        if (email && password) {
            // Fields are filled, redirect to the next page
            window.location.href = "/login?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);
        } else {
            // Fields are not filled, handle accordingly
            alert("Please fill in all fields.");
        }

        // Reset the state
        signInClicked = false;
    }
};

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(signupForm);
        const response = await fetch("/signup", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            // Show alert for successful signup
            alert("Signup successful!");
            // You can also perform other actions here if needed
        } else {
            // Display error message on the signup page
            document.getElementById("error-message").textContent = "Error during signup";
        }
    });
});
