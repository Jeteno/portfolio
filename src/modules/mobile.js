export function mobile() {
   const card = document.querySelector('.portfolio__card');

   card.addEventListener('touchstart', function() {
   this.classList.add('touched');
   });

   card.addEventListener('touchend', function() {
   this.classList.remove('touched');
   });
}