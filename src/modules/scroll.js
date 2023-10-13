export function scroll() {
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