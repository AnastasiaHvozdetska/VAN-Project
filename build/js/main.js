$(document).ready(function () {
	//slider
	$('.slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.checkbox').on('click', function () {
		$('.checkbox').css('background-color', '#303030');
		$(this).css('background-color', '#ff8303');
		$('label').css('color', '#fff');
		$(this).find('label').css('color', '#303030');
	});

	$('.case').on('click', function () {
		$(this).parent().next('.btn-group-step').show();
	});
	
	$(function(){
		var heightMenu = $('.account-content').height();
		$('.left-menu-wrapper').height(heightMenu);
	});
	
});