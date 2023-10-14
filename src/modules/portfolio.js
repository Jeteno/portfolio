export function portfolio() {
   const portfolioContent = [
      {
         href: 'www.bonovizio.jeteno.ru',
         title: 'Bonovizio',
         subtitle: 'Slider implementations using the Swiper library. The project also includes working with forms, including mandatory fields, and displaying the received data in the developer console',
         img: '../img/portfolio/bonovizio.png',
      },
      {
         href: 'www.bookshop.jeteno.ru',
         title: 'Bookshop',
         subtitle: 'This project is a web application developed using the Webpack build tool. It includes a number of functionality and components for displaying and interacting with book data from the Google API.',
         img: '../img/portfolio/bookshop.png',
      },
      {
         href: 'www.freedom.jeteno.ru',
         title: 'Freedom',
         subtitle: 'In this project, I focused on creating a responsive design so that web pages display correctly on a wide range of devices and screens',
         img: '../img/portfolio/freedom.png',
      },
      {
         href: 'www.mogu.jeteno.ru',
         title: 'Mogu',
         subtitle: 'A special feature of this project is the use of the Pug templating language, which allowed me to create more modular and easily maintainable code. This implements the spectacular appearance of blocks on the site and the animation of cards, which is activated when you hover the mouse cursor. While working, I also set up validation of feedback forms.',
         img: '../img/portfolio/mogu.png',
      },
      {
         href: 'www.notes.jeteno.ru',
         title: 'Notes',
         subtitle: 'This project was written using React, Ts and Webpack, it implements the function of creating notes and saving them with subsequent editing',
         img: '../img/portfolio/notes.png',
      },
      {
         href: 'www.registration.jeteno.ru',
         title: 'Registration',
         subtitle: 'This project is popup in which validation of forms and their display in the console is implemented',
         img: '../img/portfolio/registration.png',
      },
      {
         href: 'www.relvise.jeteno.ru',
         title: 'Relvise',
         subtitle: 'This project is written entirely in pure HTML and SCSS',
         img: '../img/portfolio/relvise.png',
      },
      {
         href: 'www.shopguide.jeteno.ru',
         title: 'Shop Gude',
         subtitle: 'This project is written using Webpack, it implements several sliders in pure JS',
         img: '../img/portfolio/shopgude.png',
      },
      {
         href: 'www.status.jeteno.ru',
         title: 'Status',
         subtitle: 'This project is written using Webpack, it implements the function of submitting a form and pays special attention to adaptability',
         img: '../img/portfolio/status.png',
      },
      {
         href: 'www.youtalk.jeteno.ru',
         title: 'YouTalk',
         subtitle: 'This project is written entirely in pure HTML and SCSS',
         img: '../img/portfolio/youtalk.png',
      },
   ];

   const portfolioContainer = document.querySelector('.portfolio__content-cards');

   function renderPortfolio(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <div class="portfolio__card">
            <div class="portfolio__card-images">
               <img src="${item.img}" alt="${item.title}" class="portfolio__img">
            </div>
            <div class="portfolio__card-content">
               <div class="portfolio__card-title">
                  <h3 class="portfolio__title">
                     ${item.title}
                  </h3>
               </div>
               <div class="portfolio__card-subtitle center">
                  <p class="portfolio__subtitle ">
                     ${item.subtitle}
                  </p>
               </div>
               <button class="portfolio__card-btn">
                  <a href="${item.href}" class="portfolio__card-btn-link" target="_blank">
                     See More
                  </a>
               </button>
            </div>
         </div>
        `;
    
        cards += cardBlock;
      });
    
      portfolioContainer.innerHTML = cards;
   };

   renderPortfolio(portfolioContent);
}