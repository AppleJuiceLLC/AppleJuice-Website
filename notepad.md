<div class="recycleSection">
    <div class="recycleCard">
        <div class="recycleImgDiv">
            <picture>
                <source src="../Images/webp/Recycling.webp" type="image/webp">
                <img src="../Images/png/Recycling.png" alt="earth logo">
            </picture>
        </div>
        <div class="recycleTextDiv">
            <h2>In-Store Recycling</h2>
            <p>
                Dispose of electronic devices and cables for free! In 2022, over 
                50 million tons of e-waste were generated globally. Responsible 
                recycling is crucial to curb pollution and conserve resources.
            </p>
        </div>
    </div>
    <div class="recycleCard">
        <div class="recycleImgDiv">
            <picture>
                <source srcset="../Images/webp/mail.webp" type="image/webp">
                <img src="../Images/png/mail.png" alt="Mail In Repair">
            </picture>
        </div>
        <div class="recycleTextDiv">
            <h2>Mail-In Recycling</h2>
            <p>
                Mail in your used working or non-working electronic devices or 
                cables and we'll recycle them for free! 7,000 laptops every 
                second are thrown away globally. Let's reduce this number together.
            </p>
        </div>
    </div>
</div>

/* Recycle Page */

.recycleSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Figtree', sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.recycleCard {
    display: flex;
    flex-direction: row;
    background-color: var(--color_22);
    margin-block: 2rem;
    border-radius: 25px;
    margin-inline: 2rem;
    max-width: 667px;
    height: 200px;
}

.recycleImgDiv {
    display: flex;
    justify-content: center;
    align-items: center;
}

.recycleCard img {
    max-width: 200px;
    max-height: 200px;
    width: 200px;
    height: 200px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}

.recycleCard h2 {
    margin-inline: 1.5rem;
}

.recycleCard p {
    margin-inline: 1.5rem;
    color: black;
}

This is my recycle page section and I have these "cards" that I have the image on the left and the text on the right, my problem is for some reason, the image looks to be like 1 or 2 pixels shifted upwards from the "cards" even though they are the same height. What is causing this?