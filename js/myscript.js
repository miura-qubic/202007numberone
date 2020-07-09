
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	$(window).on('scroll load', function () {
		let scrollPos = $(window).scrollTop();
		if (scrollPos > 300) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});

	$('.top02 h2').click(function () {
		$('.top02 .item').slideToggle();
		$('.top02 h2 span').toggleClass('active');
	});





});