// не знал что такое модальное окно, поэтому полез в помощь

// 1. получить объект модального окна с классом .wrap
const modal_window = document.querySelector('.wrap');
// 2. получить тег span, используемый для закрытия окна
const hide_button = document.querySelector('span');
// 3. получить кнопку, используемую для показа модального окна
const show_button = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
hide_button.addEventListener('click', function () {
    modal_window.classList.add('hidden');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
show_button.addEventListener('click', function () {
    modal_window.classList.remove('hidden');
});