import './js/flickity-install';
import './js/header.js';
import './js/menu.js';
import './js/sidebar-stick.js';
import './js/form-material.js';


$(".menu, .thumb-res").bind("touchstart touchend", function () {});
$('<div/>', { class: 'bg-overlay', id: 'menu-backdrop' }).appendTo('#header');

// menu overlay close menu
$('#menu-backdrop, #close-menu').click(function() {
    $('#menu-backdrop').fadeOut(200);
    $('body').removeClass('menu-open');
    $('#navigate, #form-search').removeClass('active');
});
// Back to top
$(window).on('scroll', function() {
    ($(window).scrollTop() > 150 ? $('#backtop').addClass('active') : $('#backtop').removeClass('active')); 
})
$('#backtop').click(function(){
    $("html, body").animate({scrollTop: 0}, 100);
});

// Form search
$('.search-toggle').click(function() {
    $('#form-search').toggleClass('active');
    $('#menu-backdrop').fadeToggle(200);
    $('body').toggleClass('form-search-open');
});
$('#close-search').click(function() {
    $('#menu-backdrop').fadeOut();
    $('#form-search').removeClass('active');
    $('body').removeClass('form-search-open');
});
$('#form-search .form-control').on('focusin', function() {
    $('#form-search').addClass('focus');
});
$('#form-search .form-control').on('focusout', function() {
    $('#form-search').removeClass('focus');
});


// click to active victim
$('[data-clickjs]').on('click', function () {
    var this_atr = $(this).attr('data-active');
    $('#' + this_atr + '').toggleClass('active');
    $(this).toggleClass('active');
    $('html,body').toggleClass(this_atr+'-open');
});

// products 


// products detail
var detail_pro = $('#toggleContent');
if (detail_pro.height() > 500) {
    detail_pro.addClass('textover');
}

// Load
// var wow = new WOW({
//     offset: 30
// });
$(window).on('load', function() {
    $('.preloader').addClass('loaded');
    // wow.init();
    
    $('#dockCalc').height($('#dockMobile').height());
});

// ************************* */
// (function($) {
//     // content
// })(jQuery);