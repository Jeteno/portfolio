export function header() {
   const menuContent = [
      {
         href: 'about__page',
         title: 'About',
      },
      {
         href: 'stack__page',
         title: 'Stack',
      },
      {
         href: 'portfolio__page',
         title: 'Portfolio',
      },
      {
         href: 'experience__page',
         title: 'Experience',
      },
      {
         href: 'contact__page',
         title: 'Contact',
      },
   ];

   const menuContainer = document.querySelector('.header__list');

   function renderMenu(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <li class="header__paragraph">
            <a href="#${item.href}" class="header__paragraph-link">
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