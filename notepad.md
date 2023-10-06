<div class="locations-div">
    <div class="location-card">
        <div>
            <picture>
                <source srcset="../Images/webp/MooresvilleMap.webp" type="image/webp">
                <img src="../Images/png/MooresvilleMap.png" alt="Mooresville Location on a map">
            </picture>
        </div>
        <div>
            <h1>Mooresville</h1>
            <a href="https://www.google.com/maps/place/AppleJuice+iRepairs+Mooresville/@35.5965143,-80.8714849,17z/data=!3m1!4b1!4m6!3m5!1s0x885154eecfa412d3:0xe040de3de905968e!8m2!3d35.59651!4d-80.86891!16s%2Fg%2F11ddxvwbl5?entry=ttu">
                <h2>690 Bluefield Road Suite d, Mooresville, NC, USA</h2>
            </a>
            <p>Find us near Super Target between Rice Fun & Sushi @ the Lake Too.</p>
        </div>
    </div>
    <div class="location-card">
        <div>
            <picture>
                <source srcset="../Images/webp/booneMap.webp" type="image/webp">
                <img src="../Images/png/booneMap.png" alt="Boone Location on a map">
            </picture>
        </div>
        <div>
            <h1>Boone</h1>
            <a href="https://www.google.com/maps/place/AppleJuice+iRepairs+%7C+Apple+Specialist+Repair+%26+Sales!/@36.2195611,-81.6654539,17z/data=!3m1!4b1!4m6!3m5!1s0x8850fa3b6e764b93:0x6b84f1a34132b072!8m2!3d36.2195568!4d-81.662879!16s%2Fg%2F11b73zvhq2?entry=ttu">
                <h2>199 New Market Centre Suite 9, Boone, NC, USA</h2>
            </a>
            <p>Find us in New Market Centre between Higher Ground Coffe Shop and Great Clips</p>
        </div>
    </div>
</div>

.locations-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 2rem;
    width: 100%;
}

.location-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
}

.location-card img {
    max-width: 300px;
    max-height: 300px;
    border-radius: 25px;
}

.location-card div:first-child {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.location-card div:nth-child(2) {
    margin-left: 2rem;
    width: 100%;
}

.location-data h1 {
    font-family: 'Figtree', sans-serif;
    color: white;
}

.location-data h2, p {
    font-family: 'Figtree', sans-serif;
    color: var(--color_27);
}

I need a media query where if the width of the viewport is less than 1000px then I want the text fields to show below the images rather than to the right of them.