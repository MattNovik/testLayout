import {ScrollLock} from '../utils/scroll-lock';

const toggle = document.querySelector('.main-nav__toggle');
const menuList = document.querySelector('.main-nav__list');
const wrapper = document.querySelector('.wrapper');

const initMobMenu = () => {
  if (menuList && toggle) {
    const burger = toggle.querySelector('.burger');
    const close = toggle.querySelector('.close');
    const scrollLock = new ScrollLock();

    const toggleMenu = (e) => {
      /* window.scrollTo(0, 0); */
      e.stopPropagation();
      if (e.target.closest('.main-nav__toggle')) {
        menuList.classList.toggle('main-nav__list--opened-mob');
        burger.classList.toggle('visibility-hidden');
        close.classList.toggle('visibility-hidden');
        if (menuList.classList.contains('main-nav__list--opened-mob')) {
          scrollLock.disableScrolling();
          wrapper.addEventListener('click', function clickRemoveMenu(event) {
            toggleMenu(event);
          });
        } else {
          scrollLock.enableScrolling();
          wrapper.removeEventListener('click', function clickRemoveMenu(event) {
            toggleMenu(event);
          });
        }
        if (wrapper) {
          wrapper.classList.toggle('wrapper--opened');
        }
        return;
      }
      if (!e.target.closest('.wrapper').classList.contains('wrapper--opened') || e.target.closest('.main-nav__list')) {
        return;
      } else {
        menuList.classList.toggle('main-nav__list--opened-mob');
        burger.classList.toggle('visibility-hidden');
        close.classList.toggle('visibility-hidden');
        if (menuList.classList.contains('main-nav__list--opened-mob')) {
          scrollLock.disableScrolling();
          wrapper.addEventListener('click', function clickRemoveMenu(event) {
            toggleMenu(event);
          });
        } else {
          scrollLock.enableScrolling();
          wrapper.removeEventListener('click', function clickRemoveMenu(event) {
            toggleMenu(event);
          });
        }
        if (wrapper) {
          wrapper.classList.toggle('wrapper--opened');
        }
      }
    };

    toggle.addEventListener('click', (e) => toggleMenu(e));
  }
};


export default initMobMenu;
