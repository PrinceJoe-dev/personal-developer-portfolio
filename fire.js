
// Display a welcome message when the webpage loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to my Developer Portfolio!");

    // Select all navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Add click events to navigation links
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigation link clicked:", link.textContent);
        });
    });
});
