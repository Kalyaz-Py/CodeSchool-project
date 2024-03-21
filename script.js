let anchor = document.getElementById('wrapBut')
anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.getElementById('our-sections'); // замени 'our-sections' на id элемента, к которому нужно плавно прокрутить
    target.scrollIntoView({ behavior: "smooth" });
})

let pythonBut = document.getElementById('py-but')
pythonBut.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.getElementById('py-slide'); // замени 'our-sections' на id элемента, к которому нужно плавно прокрутить
    target.scrollIntoView({ behavior: "smooth" });
})

let frontBut = document.getElementById('fr-but')
frontBut.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.getElementById('front-slide'); // замени 'our-sections' на id элемента, к которому нужно плавно прокрутить
    target.scrollIntoView({ behavior: "smooth" });
})













































