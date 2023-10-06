$(document).ready(function(){
    let currentTestimonial = 0;
    let testimonials = $('.testimonial');
    let dots = $('.testimonial-dots .dot');

    function showTestimonial(index) {
        testimonials.hide();
        testimonials.eq(index).show();
        dots.removeClass('active');
        dots.eq(index).addClass('active');
        currentTestimonial = index;
    }

    dots.each(function(index, dot) {
        $(dot).on('click', function() {
            showTestimonial(index);
        });
    });

    showTestimonial(currentTestimonial);

    setInterval(function(){
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
});
