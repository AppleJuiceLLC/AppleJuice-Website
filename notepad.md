<div id="Popup-Buttons" class="Popup-Buttons hidden">
    <div class="btn-container">
        <a href="tel:+17046629228" class="popup-btn phone"></a>
        <span>Mooresville</span>
    </div>
    <div class="btn-container">
        <a href="tel:+18283861945" class="popup-btn phone"></a>
        <span>Boone</span>
    </div>
    <div class="btn-container">
        <a href="mailto:service@apple-juice.com" class="popup-btn email"></a>
    </div>
    <div class="btn-container">
        <a href="https://m.me/AppleJuiceLLC3/" class="popup-btn messenger"></a>
    </div>
</div>
<div>
    <a class="more-info">Call for more information</a>
</div>
<div>
    <a class="more-info">Call for more information</a>
</div>
<div>
    <a class="more-info">Call for more information</a>
</div>

.Contact-Button {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    height: 45px;
    width: 45px;
    margin: 1rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: var(--color_3);
    cursor: pointer;
    outline: none;
    z-index: 9998;
}

.Contact-Button:focus {
    outline: none;
}

.Contact-Button .dots {
    height: 5px;
    width: 5px;
    background-color: black;
    border-radius: 50%;
    margin: 2px;
}

.hidden {
    display: none;
}

.Popup-Buttons {
    position: fixed;
    bottom: 80px;
    left: 0;
    display: none;
    flex-direction: column-reverse;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: translateY(150%);
    z-index: 998;
}

.Popup-Buttons div {
    display: flex;
    flex-direction: row;
}

.btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.btn-container span {
    font-family: 'Figtree', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: var(--color_27);
    background-color: black;
    padding-inline: 10px;
    padding-block: 5px;
    border-radius: 15px;
    vertical-align: middle;
}

.btn-container .popup-btn {
    margin-right: 10px;
}

.popup-btn {
    background-color: var(--color_3);
    border: none;
    width: 45px;
    height: 45px;
    margin-inline: 1rem;
    margin-block: 5px;
    border-radius: 30px;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
}

.popup-btn.phone {
    display: block;
    background-image: url('../Images/webp/phone-call.webp');
    background-image: url('../Images/png/phone-call.png');
    background-repeat: no-repeat;
}

.popup-btn.email {
    background-image: url('../Images/webp/email.webp');
    background-image: url('../Images/png/email.png');
}

.popup-btn.messenger {
    background-image: url('../Images/webp/messenger.webp');
    background-image: url('../Images/png/messenger.png');
}

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

This is my contact button that I keep on screen and when you click it it opens. What I would like to do is add functionality so that when the user clicks any of the <a class="contact"> the popup button will activate just like if it was tapped