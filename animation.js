  
  document.addEventListener('DOMContentLoaded', function() {
    // Utiliser IntersectionObserver pour détecter quand les éléments entrent dans le viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
          // Ajouter la classe pour déclencher l'animation
          entry.target.classList.add('visible');
          // Cesser d'observer après l'animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Options ajustées
      root: null, // Viewport
      threshold: 0.25, // Déclenche quand 25% de l'élément est visible (augmentez cette valeur)
      rootMargin: '-100px 0px' // Ajoute une marge négative en haut pour retarder le déclenchement
    });
    
    // Observer tous les éléments de la timeline
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  });
  
  // Secure email
  function makeEmail() {
    const coded = "cGllcnJpY2t2aXJldEBnbWFpbC5jb20="; // base64
    const email = atob(coded); 
    let links = document.querySelector("#email");
    links.href = `mailto:${email}`;
  };

  // Toggle menu
  const toggleElements = document.querySelectorAll('[data-collapse-toggle]');
  toggleElements.forEach((element) => {
    element.addEventListener('click', () => {
      const targetId = element.dataset.collapseToggle;
      const menu = document.querySelectorAll(targetId);
      menu.forEach(item => item.classList.toggle('hidden'));
    })
  });

  function toggleMenu() {
    const menu = document.querySelector('#main-nav');
    menu.classList.toggle('hidden');
  }
