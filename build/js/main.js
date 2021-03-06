$(document).ready(function () {
	//slider
	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
  ]
	});

	$('.checkbox').on('click', function () {
		$('.checkbox').css('background-color', '#303030');
		$(this).css('background-color', '#ff8303');
		$('label').css('color', '#fff');
		$(this).find('label').css('color', '#303030');
	});

	$(function () {
		var heightMenu = $('.account-content').height();
		$('.left-menu-wrapper').height(heightMenu);
	});

	$(function () {
		var url = document.location.toString();
		$('.left-menu-link').filter(function () {
			return url.indexOf(this.href) != -1;
		}).addClass('current-link');
	});
	$(function () {
		$(document).on('click', '.open-menu', function () {
			$(this).addClass('close-menu');
			$(this).removeClass('open-menu');
			$('.left-menu-wrapper').animate({
				left: '0px'
			}, 200);

		});
		$(document).on('click', '.close-menu', function () {
			$(this).addClass('open-menu');
			$(this).removeClass('close-menu');
			$('.left-menu-wrapper').animate({
				left: '-50%'
			}, 200);
		});
	});
});