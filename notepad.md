HTML

<div class="disclaimer">
    <p>All product and company names are trademarks of their respective holders.</p>
    <p>iPhone, iPad, iPod, iPod Touch, Mac, and iMac are registered trademarks and property of Apple, Inc.</p>
    <p>AppleJuice is a third-party repair company and is not affiliated with Apple.</p>
</div>

CSS

.disclaimer p {
    color: white;
    margin-inline: 1rem;
    font-family: 'Figtree', sans-serif;
    font-size: 11px;
    line-height: 0.3;
    text-wrap: nowrap;
}

Issue

I love the way this disclaimer looks on desktop and tablets. However on mobile what happens is because of the nowrap the text area becomes to wide for the viewport. I would leave the wrap on, but then this causes another problem with the line spacing where the text overlaps itself. I need a way to keep this three lines of text but look good on all platforms and not mess up the viewport or overlap text.