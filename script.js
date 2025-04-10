
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {

          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
              }
          });
          

          item.classList.toggle('active');
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {

      if (window.getComputedStyle(hamburger).display !== 'none') {
        navMenu.classList.remove('active');
      }
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
      alert("Proszę uzupełnić wszystkie pola.");
      return;
  }
  const recipient = "biuro@vgeo.pl";
  const subject = encodeURIComponent("Wiadomość od: " + name);
  const body = encodeURIComponent(message + "\n\nKontakt zwrotny: " + email);
  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  if (confirm("Czy na pewno chcesz wysłać wiadomość?")) {
      window.location.href = mailtoLink;
  }
});