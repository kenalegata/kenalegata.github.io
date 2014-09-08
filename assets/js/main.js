(function($, window, document) {
    'use strict';

    $(function() {
    	if ($(window).width() < 600) {
			$('.sub-navigation-block').prev().addClass('with-content');
		}

		$(window).resize( function () {
			if ($(window).width() >= 600) {
				$('.sub-navigation-block').prev().removeClass('with-content');
			} else {
				$('.sub-navigation-block').prev().addClass('with-content');
			}
		});

		$('body').on('click', '.with-content', function(event) {
			$('body').toggleClass('full-height');
			$(this).next().toggleClass('is-open');
			event.preventDefault();
		});

		$('body').on('click', '[data-dropdown]', function (event) {
			$(this).find('i').toggleClass('icon-down-open icon-up-open');
			$(this).closest('li').find('ul').toggleClass('hide');
		});

		$('[data-js-menu]').on('click', function () {
			if ($('.wrapper').hasClass('menu-is-open')) {
				$('.mobile-sub-navigation-block').removeClass('submenu-is-open');
			}
			$('.wrapper').toggleClass('menu-is-open');
		});

		$('[data-js-submenu-return]').on('click', function () {
			$('.mobile-sub-navigation-block').removeClass('submenu-is-open');
		});
    });

}(jQuery, window, document));