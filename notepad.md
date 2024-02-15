<a class="Contact-Button" id="Contact-Button">
    <div class="dots"></div>
    <div class="dots"></div>
    <div class="dots"></div>
</a>
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

.Contact-Button {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 50px;
    margin: 1rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    border: 3px solid var(--color_27);
    background-color: black;
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
    background-color: var(--color_27);
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
    background-color: black;
    border: 3px solid var(--color_27);
    width: 50px;
    height: 50px;
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

So this code is for my website where at the bottom left I have a button that when tapped / clicked, four buttons pop up right above the button the user just selected, and gives links to call, email, or go to messenger. I would like to change this a bit, I want it to instead open up a rectangular menu that I can add a few more buttons to. On viewports larger than 500px I want the menu to stay towards the left side to make it stick close to that button, but on viewports less than 500px I want it to slide up and be centered please.