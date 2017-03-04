$(document).foundation();

$(document).ready(function(){
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    });
    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });
});
