const mailInForm = document.getElementById("mail-in-form");
const httpsArea = document.getElementById("HTTPS-Message");

// Check if the website uses HTTPS
if (window.location.protocol !== "https:") {
    // Disable all input elements inside the form
    const inputs = mailInForm.querySelectorAll("input, textarea, button");
    inputs.forEach(input => {
        input.disabled = true;
    });

    // Optionally, show a warning message to the user
    const warningMsg = document.createElement("p");
    warningMsg.textContent = "This form requires a secure HTTPS connection to submit.";
    warningMsg.style.color = "red";
    httpsArea.appendChild(warningMsg);
} else {
    // Attach the event listener only if the protocol is HTTPS
    mailInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(mailInForm);
        fetch(mailInForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                mailInForm.reset();
            } else {
                alert("Oops, something went wrong. Please try again later.");
            }
        })
        .catch((error) => {
            alert("Oops, something went wrong. Please try again later.");
        });
    });
}
