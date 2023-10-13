export function scroll() {
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
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
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
}