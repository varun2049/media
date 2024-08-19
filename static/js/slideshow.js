$(document).ready(function() {
    let currentSlide = 1;
    const slides = $(".slide");
    const totalSlides = slides.length;

    function updateSlides(index) {
        slides.css('opacity', '0.7').css('transform', 'scale(0.8)').css('z-index', 5);

        // Center slide
        slides.eq(index).css('opacity', '1').css('transform', 'scale(1.1)').css('z-index', 10);

        // Previous slide
        slides.eq((index - 1 + totalSlides) % totalSlides)
            .css('transform', 'scale(0.8) translateX(-150%)')
            .css('opacity', '0.7');

        // Next slide
        slides.eq((index + 1) % totalSlides)
            .css('transform', 'scale(0.8) translateX(150%)')
            .css('opacity', '0.7');
    }

    $("#prev").click(function() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        updateSlides(currentSlide);
    });

    $("#next").click(function() {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        updateSlides(currentSlide);
    });

    updateSlides(currentSlide); // Initialize
});
