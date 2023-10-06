const swiper = new Swiper('.swiper', {
    // Optional parameters
    updateOnWindowResize: true,
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var slideLinks = document.querySelectorAll('.slide-link');

slideLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        var slideIndex = parseInt(link.getAttribute('href').replace('#slide', '')) - 1;
        swiper.slideTo(slideIndex);

        var swiperContainer = document.querySelector('.swiper');
        var offset = 100; // Adjust this value as needed
        var targetPosition = swiperContainer.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    });
});