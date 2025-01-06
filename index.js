window.onload = function() {
    document.getElementById('codeInput').focus(); // Focus on input box on page load
};

function redirectToMap() {
    var code = document.getElementById('codeInput').value;
    if (code.length === 6 && !isNaN(code)) { // Check if the entered code is exactly 6 digits and numeric
        window.location.href = "https://projects.audioenhancement.com/project/" + code + "/map";
    } else {
        // If not 6 digits or empty, perform a Google search instead
        if (code.trim() !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(code);
        }
    }
}
function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        redirectToMap(); // Call the function to handle redirection
    }
}

function openBOM() {
    var code = document.getElementById('codeInput').value;
    if (code.length === 6 && !isNaN(code)) { // Check if the entered code is exactly 6 digits and numeric
        window.location.href = "https://projects.audioenhancement.com/project/" + code + "/bom";
    } else {
        // If not 6 digits or empty, perform a Google search instead
        if (code.trim() !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(code);
        }
    }
}