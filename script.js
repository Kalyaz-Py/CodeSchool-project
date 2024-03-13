const anchor = document.getElementById('wrapBut')

anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.getElementById('curses'); // замени 'target' на id элемента, к которому нужно плавно прокрутить
    target.scrollIntoView({ behavior: 'smooth' });
})











































