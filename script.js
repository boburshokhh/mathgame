// Генерация случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция игры
  function guess() {
    var min = 1;
    var max = 100;
    var targetNumber = getRandomNumber(min, max);
    var attempts = 0;
  
    var userInput = parseInt(document.getElementById('user-input').value);
  
    while (true) {
      if (isNaN(userInput)) {
        alert('Пожалуйста, введите число.');
        return;
      }
  
      attempts++;
  
      if (userInput < min || userInput > max) {
        alert('Число должно быть в диапазоне от ' + min + ' до ' + max);
      } else if (userInput < targetNumber) {
        alert('Загаданное число больше. Попробуйте еще раз.');
      } else if (userInput > targetNumber) {
        alert('Загаданное число меньше. Попробуйте еще раз.');
      } else {
        alert('Поздравляем! Вы угадали число ' + targetNumber + ' за ' + attempts + ' попыток.');
        break;
      }
      
      userInput = parseInt(document.getElementById('user-input').value);
    }
  }
  
  // Запуск игры
  document.getElementById('min-number').textContent = '1';
  document.getElementById('max-number').textContent = '100';
  