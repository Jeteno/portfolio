export function stack() {
   const cardContent = [
      {
         img: './../img/stack/html.png',
         title: 'HTML',
      },
      {
         img: './../img/stack/css.png',
         title: 'CSS',
      },
      {
         img: './../img/stack/js.png',
         title: 'JavaScript',
      },
      {
         img: './../img/stack/ts.png',
         title: 'TypeScript',
      },
      {
         img: './../img/stack/sass.png',
         title: 'Sass',
      },
      {
         img: './../img/stack/pug.png',
         title: 'Pug',
      },
      {
         img: './../img/stack/node-js.png',
         title: 'Node.js',
      },
      {
         img: './../img/stack/webpack.png',
         title: 'Webpack',
      },
      {
         img: './../img/stack/gulp.png',
         title: 'Gulp',
      },
      {
         img: './../img/stack/react.png',
         title: 'React.js',
      },
      {
         img: './../img/stack/git.png',
         title: 'Git',
      },
      {
         img: './../img/stack/bootstrap.png',
         title: 'Bootstrap',
      },
   ];

   const cardContainer = document.querySelector('.stack__cards');

   function renderCard(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <div class="stack__card">
            <div class="stack__card-image">
               <img src="${item.img}" alt="${item.title}" class="stack__card-img">
            </div>
            <div class="stack__card-content">
               <h3 class="stack__card-content-title">
                  ${item.title}
               </h3>
            </div>
         </div>
        `;
    
        cards += cardBlock;
      });
    
      cardContainer.innerHTML = cards;
   };

   renderCard(cardContent);
}