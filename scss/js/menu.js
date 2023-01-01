(function($) {
    // Menu @v2
    $('.menu-toggle').click(function() {
        $('#navigate').toggleClass('active');
        $('body').toggleClass('menu-open');
        $('#menu-backdrop').fadeToggle(200);
        return false;
    });
    // Menu-slide
    // $('.menu-slide li').each(function() {
    //     var li_parent = $(this),
    //         a_child = li_parent.find('>a');
    //     if (li_parent.find('ul').length) {
    //         li_parent.addClass('menu-slide-drop').find('>a').append('<i class="i-drop fa fa-angle-down"></i>');
    //     }
    // });
    $('.menu-slide > li').each(function() {
        var parent_item = $(this);
        var menu_item = parent_item.find('.menu-item-text');
        menu_item.on('click', function() {
            $('.menu-slide > li').not(parent_item).removeClass('open');
            parent_item.toggleClass('open');
            return false;
        })
    });
})(jQuery);

// (function($) {
//     // Menu
//     $('.btn-menu-slide, .btn-menu').on('click', function(event) {
//         event.preventDefault();
//         $('#navigate').toggleClass('active');
//         $('.bg-overlay').fadeToggle(200);
//         $('html, body').toggleClass('overflow-hidden');
//     });
//     $('.close-menu').click(function(){
//         $('#navigate, .form-search').removeClass('active');
//         $('.bg-overlay').fadeOut(200);
//         $('html, body').removeClass('overflow-hidden');
//     });
//     // Define item
//     var $li = $('.menu-slide>li');
//     // check li valid sub
//     $('.menu-slide li').each(function(){
//         var $a  = $(this).children('a');
//         if ($(this).find('ul').length) {
//             $(this).addClass('parent');
//             $('<i class="fa fa-plus"></i>').appendTo($a);
//         }
//     });
//     $('li.parent').each(function() {
//         if ($(this).find('.parent').length == 0) {
//             $(this).addClass('onelevel');
//         }
//     });
//     // Move sub to out
//     $("ul.menu-slide-sub").each(function(){
//         var getID = $(this).attr('id');
//         var getClass = $(this).attr('class');
//         var textPrev = $(this).prev('a').text();
//         $(this).clone().wrap('<div class="'+ getClass +'" id="'+ getID +'" data-ttprev="'+ textPrev +'"></div>').parent('.menu-slide-sub').appendTo('#navigate');
//         $(this).removeAttr('id class');
//         $('#navigate > .menu-slide-sub ul.menu-slide-sub').removeAttr('id class');
//     });
//     // append prev menu
//     $('#navigate > .menu-slide-sub').each(function() {
//         var text = $(this).attr('data-ttprev');
//         $('<div class="prev-menu">'+ text +'</div>').prependTo($(this));
//         // add uppercase when valid thir level
//         var ulchild = $(this).find('>ul');
//         if ($(this).find('.parent').length) {
//             ulchild.addClass('upper-this-child');
//         }
//     });
//     // Click show sub
//     $('#navigate li.parent').each(function(){
//         var $this = $(this);
//         var rel = $(this).find('>a').attr('data-rel');
//         $this.find('>a>.fa').click(function(e) {
//             e.preventDefault();
//             $('.menu-slide-sub').removeClass('active');
//             $('.menu-slide-sub').each(function() {
//                 var submenu = $(this);
//                 if (rel == submenu.attr('id')) {
//                     submenu.addClass('active');
//                     $('.menu-body, .menu-header').addClass('active');
//                     $('#navigate').addClass('sleep');
//                 }
//             })
//         })
//     })
//     $('.prev-menu').click(function(){
//         $('.menu-body, .menu-slide-sub, .menu-header').removeClass('active');
//         $('#navigate').removeClass('sleep');
//     });
//     // End
// })(jQuery);