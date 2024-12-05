const reviews_glide = new Swiper('#reviews-swiper', {
	slidesPerView: 1.34,
	spaceBetween: 16,
	centeredSlides: true,
	init: true,
	initialSlide: 1,
	loop: true,
	updateOnWindowResize: true,
	breakpoints: {
		768: {
			slidesPerView: 4,
			initialSlide: 0,
			centeredSlides: false,
			loopAdditionalSlides: 0,
		},
	},
})
