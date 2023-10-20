'use strict';
window.addEventListener('DOMContentLoaded', function() {


    //Начало кода


const modalTrigger = document.querySelector('[data-menu]');
const btnClose = document.querySelector('[data-close]');
const menuBtns = this.document.querySelectorAll('.menuBtns');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const dataModal = document.querySelector('[data-modal]');


modalTrigger.addEventListener('click', function() {
    // document.querySelector('.home__info').style.display = 'none';
    // console.log('Yes');
    header.classList.add('header-off');
    main.classList.add('main-off');
    footer.classList.add('footer-off');
    dataModal.classList.add('modal-on');
})

function closeBtn() {
    header.classList.remove('header-off');
    main.classList.remove('main-off');
    footer.classList.remove('footer-off');
    dataModal.classList.remove('modal-on');
};

btnClose.addEventListener('click', closeBtn);

menuBtns.forEach(btn => {
    btn.addEventListener('click', closeBtn)
});

this.document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && header.classList.contains('header-off')) {
        closeBtn();
    }
})











});
