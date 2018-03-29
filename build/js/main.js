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
	
	$(function(){
		var heightMenu = $('.account-content').height();
		$('.left-menu-wrapper').height(heightMenu);
	});
	
	$(function(){
		var url = document.location.toString();
		$('.left-menu-link').filter(function(){
			return url.indexOf(this.href) != -1;
		}).addClass('current-link');
	});
});