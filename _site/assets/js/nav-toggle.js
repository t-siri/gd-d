function toggleMobNav() {
	var burger = document.getElementById("menu-link");
	var navicon = document.getElementById("nav-icon1");
	var nav = document.getElementById("navigation");
	var html = document.getElementsByTagName("html")[0];
	burger.addEventListener('click', function() {
		burger.classList.toggle('active');
		burger.classList.toggle('inactive');
		navicon.classList.toggle('open');
		navicon.classList.toggle('close');
		nav.classList.toggle('active');
		nav.classList.toggle('inactive');
		html.classList.toggle('nav-active');
	});
}
toggleMobNav();