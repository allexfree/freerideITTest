'use strict';

let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger-btn-js');
let mainMenu = document.querySelector('.menu-main-js');

const burgerBtnClickHandler = () => {
  mainMenu.classList.toggle('main-menu--open');
  body.classList.toggle('modal-open');
};

export {burgerBtn, burgerBtnClickHandler};
