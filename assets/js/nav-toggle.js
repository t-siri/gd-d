function toggleMobNav() {
	var burger = document.getElementById("menu-link");
	var navicon = document.getElementById("nav-icon1");
	var nav = document.getElementById("navigation");
	var html = document.getElementsByTagName("html")[0];
	var navList = document.querySelectorAll(".nav-list-item");
	burger.addEventListener('click', function () {
		burger.classList.toggle('active');
		burger.classList.toggle('inactive');
		navicon.classList.toggle('open');
		navicon.classList.toggle('close');
		nav.classList.toggle('active');
		nav.classList.toggle('inactive');
		html.classList.toggle('nav-active');
	});

	for (let i = 0; i < navList.length; i++) {
		navList[i].addEventListener("click", function () {
			burger.classList.toggle('active');
			burger.classList.toggle('inactive');
			navicon.classList.toggle('close');
			navicon.classList.toggle('open');
			nav.classList.toggle('active');
			nav.classList.toggle('inactive');
			html.classList.toggle('nav-active');
		});
	}
}
toggleMobNav();