


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Account created successfully!");

        registerForm.reset();
    });
}


// ===== LOGIN FORM =====

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Login successful!");

        loginForm.reset();
    });
}


// ===== CREATE BLOG FORM =====

const blogForm = document.getElementById("blogForm");

if (blogForm) {
    blogForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("blogTitle").value.trim();
        const category = document.getElementById("category").value;
        const content = document.getElementById("blogContent").value.trim();

        if (title === "" || category === "" || content === "") {
            alert("Please fill in all blog fields.");
            return;
        }

        alert("Blog published successfully!");

        blogForm.reset();
    });
}


// ===== SAVE BLOG AS DRAFT =====

const draftButton = document.getElementById("draftBtn");

if (draftButton) {
    draftButton.addEventListener("click", function () {

        const title = document.getElementById("blogTitle").value.trim();

        if (title === "") {
            alert("Please enter a blog title before saving.");
            return;
        }

        alert("Blog saved as draft!");
    });
}