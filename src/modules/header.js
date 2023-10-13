export function header() {
   const menuContent = [
      {
         href: '#',
         title: 'Обо мне',
      },
      {
         href: '#',
         title: 'Стек',
      },
      {
         href: '#',
         title: 'Портфолио',
      },
      {
         href: '#',
         title: 'Контакты',
      },
   ];

   const menuContainer = document.querySelector('.header__list');

   function renderMenu(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <li class="header__paragraph">
            <a href="${item.href}" class="header__paragraph-link">
               ${item.title}
            </a>
         </li>
        `;
    
        cards += cardBlock;
      });
    
      menuContainer.innerHTML = cards;
   };

   renderMenu(menuContent);
}