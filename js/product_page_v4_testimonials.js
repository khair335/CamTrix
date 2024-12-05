const nextBtn = document.getElementById('testimonial-next');
const prevBtn = document.getElementById('testimonial-prev');
const testimonialsGlideElement = document.getElementById('testimonials-glide');

if (testimonialsGlideElement) {
	const testimonialsGlide = new Glide(testimonialsGlideElement, {
		type: 'carousel',
		perView: 3,
		autoplay: 8000,
		loop: true,
		gap: 16,
		swipeThreshold: 5,
		breakpoints: {
			767: {
				perView: 1,
			},
			3000: {
				perView: 3,
			},
		},
	});

	if (nextBtn) {
		nextBtn.addEventListener('click', () => {
			testimonialsGlide.go('>');
		});
	}

	if (prevBtn) {
		prevBtn.addEventListener('click', () => {
			testimonialsGlide.go('<');
		});
	}

	// testimonialsGlide.go('=2');

	testimonialsGlide.mount();
}
