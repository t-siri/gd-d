function handleNavigation() {
	var navigation = document.getElementById('navigation').clientHeight;
	var bodyWidth = window.document.getElementsByTagName('html')[0].clientWidth;
	if (bodyWidth > 1000)  {
		if (document.documentElement.scrollTop > (navigation - 50)) {
			// Scrolled down the page
			document.getElementById("navigation").classList.add('fixed')
		} else {
			// At top of page
			document.getElementById("navigation").classList.remove('fixed')
		}
	} else{
		if (document.documentElement.scrollTop > (navigation - 550)) {
			// Scrolled down the page
			document.getElementById("navigation").classList.add('fixed')
		} else {
			// At top of page
			document.getElementById("navigation").classList.remove('fixed')
		}
	}
}

// Fix scrolling to # internal hrefs via offset for nav bar
window.addEventListener("load", () => {
	document.querySelectorAll("a[href*='#']").forEach((internalLink) => {
		// console.log(internalLink);
		internalLink.addEventListener("click", (event) => {
			event.preventDefault();
			let target = document.querySelector(internalLink.getAttribute("href"));
			
			let offset;
			if (window.innerWidth > 1000) {
				offset = 109;
			} else {
				offset = 0;
			}
		
			console.log(offset);
			let targetPosition = target.offsetTop;
			let scrollToPosition = targetPosition - offset;

			window.scrollTo({
				top: scrollToPosition,
				behavior: "smooth"
			});
		})
	});
});

window.addEventListener('scroll', handleNavigation);
window.addEventListener('resize', handleNavigation);

// window.innerHeight