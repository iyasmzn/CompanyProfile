$(document).ready(function() {
			AOS.init({
				offset: 200
			});
			$('.header-slick2').slick({
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
				speed: 1000,
				fade: true,
				cssEase: 'linear',
			});
			$('.recent-slick').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				infinite: true,
			});
			$('.carousel').carousel();
		});
			$(window).scroll(function() {
				var navbar = $('.nava').offset().top;
				var scroll = $(window).scrollTop();
				if (scroll > 500 ) {
					$('.nava').addClass('sticky-header').removeClass('nava-abs').removeClass('py-4');
					$('.fixed-upper').css({"bottom":"20px"});
					$('.nava').animate({top:"0px",opacity:"1"},'slow');
				}
				else {
					$('.nava').removeClass('sticky-header').addClass('nava-abs').addClass('py-4');	
					$('.fixed-upper').css({"bottom":"-200px"});
				}
			});