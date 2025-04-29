function generateRandomString() {
  const characters = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~";
  const length = Math.floor(Math.random() * 3) + 4;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Функция для обновления текста на кнопке
function updateButtonText() {
  const btn = document.getElementById("whoBtn");
  btn.textContent = generateRandomString();
}

// Первый запуск
updateButtonText();

// Обновление каждую секунду
setInterval(updateButtonText, 50);

// Ошибка при нажатии
document.getElementById("whoBtn").addEventListener("click", () => {
  document.getElementById("error").style.display = "block";
});
