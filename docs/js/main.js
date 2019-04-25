var button = document.getElementById('button');
var menu = document.getElementById('menu');
var lines = document.getElementsByClassName('mb-line');

button.addEventListener('click', function(){
	menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
});

window.addEventListener('resize', function(){
	document.documentElement.clientWidth > 992 ? menu.style.display = 'flex' : menu.style.display = 'none';
});

document.addEventListener('click', function(e){
	if (e.target !== menu &&
		e.target !== button &&
		e.target !== button.childNotes &&
		menu.style.display === 'flex' &&
		document.documentElement.clientWidth < 991
	) {
		menu.style.display = 'none';
	}
});

var books = document.getElementsByClassName('wbi-book');
var magaz = document.getElementsByClassName('wmi-magazine');

for(var i=0; i<books.length; i++){
	books[i].addEventListener('click', function(e){
		var key = e.target.parentNode.getAttribute('data-key');
		var popup = document.getElementById(key);
		popup.style.display = 'flex';
	});
};

for(var i=0; i<magaz.length; i++){
	magaz[i].addEventListener('click', function(e){
		var key = e.target.parentNode.getAttribute('data-key');
		var popup = document.getElementById(key);
		popup.style.display = 'flex';
	});
}

var popup = document.getElementsByClassName('popup');
var pClose = document.getElementsByClassName('p-close');

function hideAllPopup(arr){
	for (var i=0; i<arr.length; i++) {
		arr[i].style.display = 'none';
	}
}

for(var i=0; i<pClose.length; i++){
	pClose[i].addEventListener('click', function(e){
		hideAllPopup(popup);
	});
};