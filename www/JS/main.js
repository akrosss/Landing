$(document).ready(function(){
    $('.js_tabs-link').on('click', function(e){
        e.preventDefault();
        var tabNum = $(this).attr('href');
        $(this).addClass('tab-active');
        $(this).parent().siblings().find('.js_tabs-link').removeClass('tab-active');
        $(tabNum).show(400);
        $(tabNum).addClass('.tab-active');
        $(tabNum).siblings().hide(400);
        $(tabNum).siblings().removeClass('.tab-active');
    });
});
// $(document).ready(function(){
//     $('.js_tabs-link').on('click', function(e){
//         e.preventDefault();
//         var tabNum = $(this).attr('href');
//         $(this).addClass('tab-active');
//         $(this).parent().siblings().find('.js_tabs-link').removeClass('tab-active');
//         $(tabNum).show(400);
//         $(tabNum).addClass('.tab-active');
//         $(tabNum).siblings().hide(400);
//         $(tabNum).siblings().removeClass('.tab-active');
//     });
// });
$(document).ready(function(){
    $('.js_tabs-link_2').on('click', function(e){
        e.preventDefault();
        var tabNum = $(this).attr('href');
        $(this).addClass('tab-active_2');
        $(this).parent().siblings().find('.js_tabs-link_2').removeClass('tab-active_2');
        $(tabNum).show(400);
        $(tabNum).addClass('.tab-active_2');
        $(tabNum).siblings().hide(400);
        $(tabNum).siblings().removeClass('.tab-active_2');
    });
});

$('.testimonials_slider').slick({
    infinite: true,
    slidetoToShow: 1,
    slideToScrll: 1,
    dots: true,
    arrows: true,
    appendArrows: $('.testimonials_nav'),
    prevArrow: '<button class="testimonials_arrow testimonials_prev"><i class="icon-angle-down"></i></button>',
    nextArrow: '<button class="testimonials_arrow testimonials_next"><i class="icon-angle-down"></i></button>'
});