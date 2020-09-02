'use strict';

let userMenu = document.querySelector('.menu-user-js');
let userMenuLinks = document.querySelectorAll('.link-menu-user-js');

const userMenuLinkClickHandler = (evt) => {
  let target = evt.target;
  userMenuLinks.forEach(link => {
    link.classList.remove('user-menu-link--active');
  });
  target.classList.add('user-menu-link--active');
}

export {userMenu, userMenuLinkClickHandler};
