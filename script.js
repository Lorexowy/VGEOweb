// Skrypt obsługujący menu hamburgera (rozwijane na urządzeniach mobilnych)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Obsługa FAQ (pytań i odpowiedzi)
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
          // Zamknij wszystkie inne elementy
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
              }
          });
          
          // Przełącz aktywny stan dla klikniętego elementu
          item.classList.toggle('active');
      });
  });
});