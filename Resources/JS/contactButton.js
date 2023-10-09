// Function to toggle the display of popup buttons
function togglePopupButtons() {
    const popupButtons = document.getElementById("Popup-Buttons");

    if (popupButtons.style.display === "flex") {
        popupButtons.style.transform = "translateY(150%)";
        setTimeout(() => {
            popupButtons.style.display = "none";
        }, 300);
    } else {
        popupButtons.style.display = "flex";
        setTimeout(() => {
            popupButtons.style.transform = "translateY(0)";
        }, 10);
    }
}

// Event listener for the Contact button
document.getElementById("Contact-Button").addEventListener("click", togglePopupButtons);

// Event listener for all <a class="more-info"> elements
const moreInfoLinks = document.querySelectorAll(".more-info");
moreInfoLinks.forEach(link => {
    link.addEventListener("click", togglePopupButtons);
});
