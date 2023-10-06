function adjustDivHeight() {
    const baseHeight = 121;
    const increment = 5;
    const width = $(window).width();
    
    const additionalHeight = Math.floor(width / 40) * increment;
    $(".Juice-Up-Section").css('height', baseHeight + additionalHeight + "px");
}

function adjustTextSize() {
    const basePadding = 0.1;
    const increment = 0.75;
    const width = $(window).width();

    const additionalPadding = Math.floor(width / 100) * increment;
    $(".adjustTextSize").css('padding-inline', basePadding + additionalPadding + "rem");
}

$(document).ready(function() {
    adjustDivHeight();
    adjustTextSize();
    $(window).resize(adjustDivHeight);
    $(window).resize(adjustTextSize);
});
