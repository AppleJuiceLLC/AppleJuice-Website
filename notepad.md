<div class="R-S-Boxes" id="R-S-Boxes">
    <div class="device-box">
        <picture>
            <source srcset="Resources/Images/webp/iMac Clean.webp" type="image/webp">
            <img src="Resources/Images/jpg/iMac Clean.jpg" alt="Image">
        </picture>
        <h1>Mac</h1>
        <p>
            Is your iMac, MacBook, Mac mini, or Mac Pro not working properly?
        </p>
        <h2>Starting @ $99</h2>
        <a href="Resources/HTML/Mac.html" class="learn-more">Learn More</a>
    </div>
    <div class="device-box">
        <picture>
            <source srcset="Resources/Images/webp/iPhone Image.webp" type="image/webp">
            <img src="Resources/Images/jpg/iPhone Image.jpg" alt="Image">
        </picture>
        <h1>iPhone</h1>
        <p>
            Is your iPhone speaker muffled, screen cracked or need a new battery?
        </p>
        <h2>Starting @ 59.95</h2>
        <a href="Resources/HTML/iPhone.html" class="learn-more">Learn More</a>
    </div>
    <div class="device-box">
        <picture>
            <source srcset="Resources/Images/webp/apple-watch.webp" type="image/webp">
            <img src="Resources/Images/jpg/apple-watch.jpg" alt="Image">
        </picture>
        <h1>Apple Watch</h1>
        <p>
            Is your Apple Watch not syncing or is the face cracked or lifting off on its own?
        </p>
        <h2>Starting @ 49.95</h2>
        <a href="Resources/HTML/Watch.html" class="learn-more">Learn More</a>
    </div>
    <div class="device-box">
        <picture>
            <source srcset="Resources/Images/webp/iPad.webp" type="image/webp">
            <img src="Resources/Images/jpg/iPad.jpg" alt="Image">
        </picture>
        <h1>iPad</h1>
        <p>
            Is your iPad not updating or worse; it's bent. We can help.
        </p>
        <h2>Starting @ 39.95</h2>
        <a href="Resources/HTML/iPad.html" class="learn-more">Learn More</a>
    </div>
</div>

.R-S-Boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0;
}

.device-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-inline: 1rem;
    border-radius: 15px;
    width: 90%;
    height: 600px;
    max-width: 600px;
    max-height: 600px;
}

.R-S-Boxes h1 {
    top: 0;
    left: 0;
    font-family: 'Figtree', sans-serif;
    color: var(--color_4);
    margin: 0;
}

.R-S-Boxes h2 {
    font-family: 'Figtree', sans-serif;
    color: var(--color_4);
}

.R-S-Boxes img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0;
    padding: 0;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.R-S-Boxes p {
    font-family: 'Figtree', sans-serif;
    color: darkslategray;
    margin-inline: 2rem;
}

.learn-more {
    background-color: white;
    font-family: 'Figtree', sans-serif;
    text-align: center;
    width: 35%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 30px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
}

.learn-more:hover {
    box-shadow: 0px 2px 15px var(--color_19);
    transform: scale(1.10);
}

I love the way these divs look on my webpage. However with the flex wrap on the divs, I want to limit the items on each row to two. Is this possible?