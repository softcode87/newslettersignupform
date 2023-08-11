/*function showInvalidPage() {
    window.location.href = "window.location.href"; // Redirect to the invalid response page
}

function showSuccessMessage() {
    window.location.href = "window.location.href"; // Redirect to the success message page
}
*/
function checkEmail() {
    const email = document.getElementById("emailInput").value;

    if (isValidEmail(email)) {
        showSuccessPage(email);
    } else {
        showInvalidPage();
    }
}

function isValidEmail(email) {
    // Replace with your email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showInvalidPage() {
    window.location.href = "invalid.html"; // Redirect to the invalid response page
}

function showSuccessPage(email) {
    // Pass email as a parameter to the success page
    window.location.href = "success.html?email=" + encodeURIComponent(email);
}