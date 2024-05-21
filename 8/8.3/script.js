document.getElementById('open-modal-btn').addEventListener('click', function() {
	document.getElementById('my-modal').classList.add('open');
  });
  
  document.getElementById('close-my-modal-btn').addEventListener('click', function() {
	document.getElementById('my-modal').classList.remove('open');
  });
  
  document.querySelector('#my-modal .modal__box').addEventListener('click', function(event) {
	event.stopPropagation(); // Остановить распространение события
  });
  
  document.getElementById('my-modal').addEventListener('click', function(event) {
	if (!event.target.closest('.modal__box')) {
	  document.getElementById('my-modal').classList.remove('open');
	}
  });

  function calculateSum() {
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	
	if (!isNaN(num1) && !isNaN(num2)) {
	  let sum = num1 + num2;
	  document.getElementById('result').textContent = 'Сумма чисел ' + num1 + ' и ' + num2 + ' равна: ' + sum;
	} else {
	  document.getElementById('result').textContent = 'Пожалуйста, введите числа.';
	}
  }
  