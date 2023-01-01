// Equal Height Hack
Flickity.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
};
Flickity.createMethods.push('_createResizeClass');
var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
};
(function($) {
    $(window).on('load', function() {
        $('.home-slider').flickity({
            contain: true,
            cellAlign: 'left',
            groupCells: '100%',
            pageDots: true,
            autoPlay: 4000,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            selectedAttraction: 0.02,
            friction: 0.3
        });
        $('.carousel-single, .menucate, .carousel-c2md3, .carousel-c2md4, .carousel-c2md5').flickity({
            contain: true,
            cellAlign: 'left',
            groupCells: '100%',
            pageDots: true,
        });
    });
    // products detail - gallery vertical
    if ($('.carousel-nav').length || $('.carousel-main').length) {
        var $carousel = $('.carousel-main').flickity();
        var $carouselNav = $('.carousel-nav');
        var $carouselNavCells = $carouselNav.find('.carousel-cell');
        $carouselNav.on('click', '.carousel-cell', function(event) {
            var index = $(event.currentTarget).index();
            $carousel.flickity('select', index);
        });
        var flkty = $carousel.data('flickity');
        var navTop = $carouselNav.position().top;
        var navCellHeight = $carouselNavCells.height();
        var navHeight = $carouselNav.height();

        $carousel.on('select.flickity', function() {
            // set selected nav cell
            $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
            var $selected = $carouselNavCells.eq(flkty.selectedIndex)
                .addClass('is-nav-selected');
            // scroll nav
            var scrollY = $selected.position().top +
                $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
            $carouselNav.animate({
                scrollTop: scrollY
            });
        });
    }
    
})(jQuery);