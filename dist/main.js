/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
function header() {
   const menuContent = [
      {
         href: '#about__page',
         title: 'About',
      },
      {
         href: '#',
         title: 'Stack',
      },
      {
         href: '#',
         title: 'Portfolio',
      },
      {
         href: '#',
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

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuBurger: () => (/* binding */ menuBurger)
/* harmony export */ });
function menuBurger() {
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.header__nav');

   if (iconMenu) {
      iconMenu.addEventListener('click', function (e) {
         iconMenu.classList.toggle('active__menu');
         menuBody.classList.toggle('active__menu');
      })
   }
}

/***/ }),

/***/ "./src/modules/portfolio.js":
/*!**********************************!*\
  !*** ./src/modules/portfolio.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   portfolio: () => (/* binding */ portfolio)
/* harmony export */ });
function portfolio() {
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

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
function scroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const menuLink = document.querySelectorAll('a.header__paragraph-link');
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.header__nav');
    let currentIndex = 0;

    window.addEventListener('scroll', function() {
        const animatedPage = document.querySelectorAll('.animated__page');
    
        for(let i = 0; i < animatedPage.length; i++) {
            let block = animatedPage[i];
            let offset = block.getBoundingClientRect().top + this.window.pageYOffset;
            let windowHeight = this.window.innerHeight;
    
            if (window.pageYOffset > offset - windowHeight + 200) {
                block.style.transform = 'translateX(0)';
            }
        }
    });
    window.addEventListener('scroll', function() {  
        for(let i = 0; i < anchorLinks.length; i++) {
            let link = anchorLinks[i];
            let target = document.querySelector(link.getAttribute('href'));

            if (target) {
                let offset = target.getBoundingClientRect().top + window.pageYOffset;
                let windowHeight = window.innerHeight;

                if (window.pageYOffset > offset - windowHeight + 200) {
                    block.style.transform = 'translateX(0)';
                } 
            }
        }
    });

    function smoothScroll(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function addActiveClassToLink(index) {
        menuLink.forEach(item => item.classList.remove('active'));
        menuLink[index].classList.add('active');
    };

    menuLink.forEach((dot, index) => {
        dot.addEventListener('click', () => {
        currentIndex = index;
    
        addActiveClassToLink(currentIndex);
        });
    });

    function removeMenu() {
        iconMenu.classList.remove('active__menu');
        menuBody.classList.remove('active__menu');
    }

    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
        event.preventDefault();
        let target = document.querySelector(link.getAttribute('href'));
        if (target) {
            smoothScroll(target);
            removeMenu();
            addActiveClassToLink()
        }
        });
    });

    function setFirstCategoryActive() {
        if (menuLink.length > 0) {
        const firstCategory = menuLink[currentIndex];
        
        firstCategory.classList.add('active');
        }
    };

    setFirstCategoryActive();
}

/***/ }),

/***/ "./src/modules/stack.js":
/*!******************************!*\
  !*** ./src/modules/stack.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stack: () => (/* binding */ stack)
/* harmony export */ });
function stack() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modules/header */ "./src/modules/header.js");
/* harmony import */ var _src_modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modules/scroll */ "./src/modules/scroll.js");
/* harmony import */ var _src_modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _src_modules_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/modules/stack */ "./src/modules/stack.js");
/* harmony import */ var _src_modules_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/modules/portfolio */ "./src/modules/portfolio.js");








(0,_src_modules_header__WEBPACK_IMPORTED_MODULE_1__.header)();
(0,_src_modules_menu__WEBPACK_IMPORTED_MODULE_3__.menuBurger)();
// scroll();
(0,_src_modules_stack__WEBPACK_IMPORTED_MODULE_4__.stack)();
(0,_src_modules_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map