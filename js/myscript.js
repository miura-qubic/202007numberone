
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

	$("body").removeClass("preload");
	
	$('.slick01').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 6000,
		speed: 1500,
		draggable:false,
		swipe: false,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.slick02').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 6000,
		speed: 1500,
		draggable: false,
		swipe: false,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.slick03').slick({
		autoplay: true,
		arrows: false,
		draggable: false,
		swipe: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		speed: 8000,
		slidesToShow: 7,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.slick01').on('beforeChange', function () {
		$('.slick01 .slick-slide').removeClass('is-prev');
		$('.slick01 .slick-slide').removeClass('is-next');
		$('.slick01 .slick-slide.slick-active').addClass('is-prev');
		$('.slick01 .slick-slide.slick-active').next('.slick-slide').addClass('is-next');
	});

	$('.slick02').on('beforeChange', function () {
		$('.slick02 .slick-slide').removeClass('is-prev');
		$('.slick02 .slick-slide').removeClass('is-next');
		$('.slick02 .slick-slide.slick-active').addClass('is-prev');
		$('.slick02 .slick-slide.slick-active').next('.slick-slide').addClass('is-next');
	});

	$(window).on('scroll load', function () {
		let scrollPos = $(window).scrollTop();
		if (scrollPos > 300) {
			$('header').addClass('active').css('transition', '.3s');
		} else {
			$('header').removeClass('active');
		}

		$('.fadein, .action').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 200) {
				$(this).addClass('active');
			}
		});

		$('.action').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight) {
				$('.bg_img.one').css({ 'transform': 'translateY(' + - scroll / 8 + 'px)', });
				$('.bg_img.two').css({ 'transform': 'translateY(' + - scroll / 4 + 'px)', });
				$('.bg_img.three').css({ 'transform': 'translateY(' + - scroll / 5 + 'px)', });
				$('.bg_img.four').css({ 'transform': 'translateY(' + - scroll / 5 + 'px)', });
				$('.bg_img.five').css({ 'transform': 'translateY(' + - scroll / 3 + 'px)', });
			}
		});

		$('main').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight) {
				$('.bg_img.sixth').css({ 'transform': 'translateY(' + - scroll / 2 + 'px)', });
				$('.bg_img.seventh').css({ 'transform': 'translateY(' + - scroll / 4 + 'px)', });
				$('.bg_img.eighth').css({ 'transform': 'translateY(' + - scroll / 5 + 'px)', });
				$('.bg_img.nineth').css({ 'transform': 'translateY(' + - scroll / 5 + 'px)', });
				$('.bg_img.tenth').css({ 'transform': 'translateY(' + - scroll / 3 + 'px)', });
			}
		});

		$('.mask').each(function () {
			let $item = $(this);
			let top = $item.offset().top; // ターゲットの位置取得
			let position = top - $(window).height();  // イベントを発火させたい位置
			if ($(window).scrollTop() > position) {
				$item.addClass('is_view');
			}
		});


	});

	$(window).on('load', function () {
		$('aside,.top01,header,.lower_mv').addClass('is_show');
	});

	$('.top02 h2').click(function () {
		$('.top02 .item').slideToggle();
		$('.top02 h2 span').toggleClass('active');
	});





});