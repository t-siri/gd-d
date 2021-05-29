function toggleContact() {
	var contact = document.getElementById('contact-content');
	contact.classList.toggle('contact-content__visible');
	contact.classList.toggle('contact-content__hidden');
}

function toggleContactX() {
	var contact = document.getElementById('contact-content');
	var close = document.getElementById('close-nav');
	var formClose = document.getElementById('form-close');
	close.addEventListener('click', function() {
		contact.classList.toggle('contact-content__visible');
		contact.classList.toggle('contact-content__hidden');
	});
	formClose.addEventListener('click', function() {
		contact.classList.toggle('contact-content__visible');
		contact.classList.toggle('contact-content__hidden');
	});
}
toggleContactX() 

function toggleMobNav() {
	var burger = document.getElementById("menu-link");
	var navicon = document.getElementById("nav-icon1");
	var nav = document.getElementById("navigation");
	var contact = document.getElementById("contact");
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