document.getElementById("Contact-Button").addEventListener("click", function() {
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
});
