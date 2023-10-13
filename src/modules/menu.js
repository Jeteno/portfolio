export function menuBurger() {
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.header__nav');

   if (iconMenu) {
      iconMenu.addEventListener('click', function (e) {
         iconMenu.classList.toggle('active__menu');
         menuBody.classList.toggle('active__menu');
      })
   }
}