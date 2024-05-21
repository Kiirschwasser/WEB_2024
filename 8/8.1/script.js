document.getElementById('open-modal-btn').addEventListener('click',function(){
	document.getElementById('my-modal').classList.add('open')
})
document.getElementById('close-my-modal-btn').addEventListener('click',function(){
	document.getElementById('my-modal').classList.remove('open')
})
document.querySelector('#my-modal .modal__box').addEventListener('click', event => {
	EventTarget._isClickWithinModal =true;
});

document.getElementById('my-modal').addEventListener('click',event =>{
	if (event._isClickWithinModal) return;
	event.currentTarget.classList.remove('open');
})


// Функция myFunction() вызывается при нажатии на кнопку и переключает класс элемента с id "myDropdown"
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Обработчик события клика на окне браузера
  window.onclick = function(e) {
	// Проверяем, что кликнули не по элементу с классом 'dropbtn'
	if (!e.target.matches('.dropbtn')) {
	  // Получаем элемент с id "myDropdown"
	  var myDropdown = document.getElementById("myDropdown");
	  // Проверяем, содержит ли этот элемент класс 'show'
	  if (myDropdown.classList.contains('show')) {
		// Если содержит, то удаляем класс 'show'
		myDropdown.classList.remove('show');
	  }
	}
  }
  