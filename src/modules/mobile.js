export function mobile() {
   // Получить все элементы, к которым хотите применить стиль :hover на мобильных устройствах
// Получить элемент, к которому хотите применить изменение стилей
   const card = document.querySelector('.portfolio__card');

   // Добавить обработчики событий прикосновения на мобильных устройствах
   card.addEventListener('touchstart', function() {
   this.classList.add('touched');
   });

   card.addEventListener('touchend', function() {
   this.classList.remove('touched');
   });
}