


const modal_window = document.querySelector('.wrap');
const hide_button = document.querySelector('span');
const show_button = document.querySelector('button');


hide_button.addEventListener('click', function () {
    modal_window.classList.remove('animate__rollIn');
    modal_window.classList.add('animate__rollOut');
    setTimeout(function () {
        modal_window.classList.add('hidden');
    },1000);



});


show_button.addEventListener('click', function () {
    modal_window.classList.remove( 'hidden', 'animate__rollOut' );
    modal_window.classList.add('animate__animated', 'animate__rollIn');


});