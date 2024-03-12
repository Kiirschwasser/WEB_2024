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
  