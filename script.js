const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const sendButton = document.getElementById('button-send-form')

const inputForm1 = document.getElementById('form-input1');
const inputForm2 = document.getElementById('form-input2');

// Открыть модальное окно
function openModal() {
  modal.style.display = 'flex'; // Было 'block'
  modal.classList.add('modal')
}
// Очистка формы
function clearForm() {
  inputForm1.value = '';
  inputForm2.value = '';
}

// Закрыть модальное окно
function closeModal() {
  modal.style.display = 'none';
  clearForm();
}

// Закрытие модального окна при клике на кнопку закрытия
closeButton.addEventListener('click', closeModal);


// Закрытие модального окна при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});



















































