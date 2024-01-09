const contactForm = document.getElementById("contact-form");

// Check if the website uses HTTPS
if (window.location.protocol !== "https:") {
    // Disable all input elements inside the form
    const inputs = contactForm.querySelectorAll("input, textarea, button");
    inputs.forEach(input => {
        input.disabled = true;
    });

    // Optionally, show a warning message to the user
    const warningMsg = document.createElement("p");
    warningMsg.textContent = "This form requires a secure HTTPS connection to submit.";
    warningMsg.style.color = "white";
    contactForm.appendChild(warningMsg);
} else {
    // Attach the event listener only if the protocol is HTTPS
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert("Oops, something went wrong. Please try again later.");
            }
        })
        .catch((error) => {
            alert("Oops, something went wrong. Please try again later.");
        });
    });
}
