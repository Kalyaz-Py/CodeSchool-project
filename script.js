const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

// Открыть модальное окно
function openModal() {
  modal.style.display = 'flex'; // Было 'block'
}

// Закрыть модальное окно
function closeModal() {
  modal.style.display = 'none';
}

// Закрытие модального окна при клике на кнопку закрытия
closeButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Исправленный код для центрирования модального окна
window.addEventListener('resize', () => {
  modal.style.display = window.innerWidth > 768 ? 'flex' : 'block';
});














































