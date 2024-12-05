const scrollers = document.querySelectorAll('.scroller-container')

scrollers.forEach((item) => {
	const scrollerInner = item.querySelector('.scroller')
	const innerContent = Array.from(scrollerInner.children)
	innerContent.forEach((content) => {
		const duplicteItem = content.cloneNode(true)
		duplicteItem.setAttribute('aria-hidden', true)
		scrollerInner.append(duplicteItem)
	})
})
