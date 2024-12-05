document.addEventListener('DOMContentLoaded', function () {
	var thumbsSwiper = new Swiper('.swiperThumbs', {
		slidesPerView: 5,
		spaceBetween: 10,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			768: {
				direction: 'horizontal',
				spaceBetween: 8,
			},
			1132: {
				direction: 'vertical',
				spaceBetween: 10,
			},
		},
	});

	var mainSwiper = new Swiper('.swiperMain', {
		spaceBetween: 0,
		loop: true,
		thumbs: {
			swiper: thumbsSwiper,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
