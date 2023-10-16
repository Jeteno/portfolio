export function scroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const animatedPage = document.querySelectorAll('.animated__page');
    const menuLink = document.querySelectorAll('a.header__paragraph-link');
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.header__nav');
    const logoLink = document.querySelector('.header__logo-link');
    let currentIndex = 0;
    
    window.addEventListener('scroll', function() {
      for (let i = 0; i < animatedPage.length; i++) {
        let block = animatedPage[i];
        let offset = block.getBoundingClientRect().top + window.pageYOffset;
        let windowHeight = window.innerHeight;
    
        if (window.pageYOffset > offset - windowHeight + 200) {
          block.style.transform = 'translateX(0)';
        }
      }
    
      for (let i = 0; i < anchorLinks.length; i++) {
        let link = anchorLinks[i];
        let href = link.getAttribute('href');
        
        if (href === '#') {
          continue;
        }
        
        let target = document.querySelector(href.charAt(0) === '#' ? href : '#' + href);
    
        if (target) {
          let offset = target.getBoundingClientRect().top + window.pageYOffset;
          let windowHeight = window.innerHeight;
    
          if (window.pageYOffset > offset - windowHeight + 200) {
            link.style.transform = 'translateX(0)';
          } 
        }
      }
    });

    function smoothScroll(target){
        var headerOffset = 100;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    function addActiveClassToLink(currentIndex) {
        for (let i = currentIndex; i < menuLink.length; i++) {
            menuLink.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });    
        }
    }

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

    logoLink.addEventListener('click', () => {
        menuLink.forEach(menuLink => {
            if (menuLink.classList.contains('active')) {
                menuLink.classList.remove('active');
            }
        });
    });
}