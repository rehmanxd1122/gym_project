// Contact page JavaScript: form validation message and theme toggle.
const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");
const themeButton = document.getElementById("themeToggle");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the demo form from reloading the page.
    if (form.checkValidity()) {
        feedback.textContent = "Thank you! Your demo message is ready.";
    } else {
        feedback.textContent = "Please complete all fields correctly.";
        form.reportValidity();
    }
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
