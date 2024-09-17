/*Animación para la sección de mis proyectos realizados*/
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // El elemento se anima cuando el 10% de su altura es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Deja de observar el elemento una vez animado
      }else{
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(element => {
    observer.observe(element);

  });
});
