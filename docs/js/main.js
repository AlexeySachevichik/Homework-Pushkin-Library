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
