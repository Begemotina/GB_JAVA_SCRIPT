'use strict'

function show_text(card) {
    card.img.style.display = 'none';
    card.div.insertAdjacentHTML('afterbegin', `<div class="addition">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function hide_text(card) {
    card.img.style.display = 'block';
    card.div.querySelector('.addition').remove();
    card.button.innerText = 'Подробнее';
}


const buttons = document.querySelectorAll("button");
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nesciunt nobis dolorum molestiae saepe libero repudiandae magnam, quae excepturi."

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        handle_click(event);
    });
});

function handle_click(btn_event) {
    let itemNode = btn_event.target.parentNode;

    let item = {
        div: itemNode,
        img: itemNode.querySelector('img'),
        button: itemNode.querySelector('button'),
    };

    if (item.button.innerText === "Подробнее") {
        show_text(item);
    } else {
        hide_text(item);
    }
}

