  
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


    document.addEventListener('DOMContentLoaded', function() {
      fetch('projet.json')
        .then(response => response.json())
        .then(projetData => {

      const projectsContainer = document.getElementById('projectsPerso');
      projectsContainer.innerHTML = ''; // Clear existing content

       projetData.forEach(project => {
        const projectCard = document.createElement('li');
        projectCard.className = 'col-10 col-md-5 col-lg-3 p-0 m-2 bg-dark rounded card project-card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-dark text-white rounded';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header-content mb-2';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = project.title;
        const cardSubtitle = document.createElement('h6');
        cardSubtitle.className = 'card-subtitle mb-1 text-secondary';
        cardSubtitle.textContent = project.subTitle;
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardSubtitle);
        cardBody.appendChild(cardHeader);

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = project.text;
        cardBody.appendChild(cardText);

        const cardImage = document.createElement('div');
        cardImage.className = 'project-image-container mb-3 mt-auto';
        const image = document.createElement('img');
        image.src = `assets/photos/${project.photo}.webp`;
        image.className = 'card-img';
        image.alt = `image de ${project.photo}`;
        cardImage.appendChild(image);
        cardBody.appendChild(cardImage);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'd-flex justify-content-around align-items-center';
        project.icones.forEach(icone => {
          const iconElement = document.createElement('img');
          if(icone === 'appstore') {
          iconElement.src = `assets/photos/appstore.webp`;
          iconElement.className = 'appstore_icone rounded';
          iconElement.alt = `Icone ${icone}`;
        } else {
          iconElement.src = `assets/photos/icone/icone_${icone}.webp`;
          iconElement.className = 'rounded techno_icone';
          iconElement.alt = `Icone ${icone}`;
        }
          cardFooter.appendChild(iconElement);
        })
        cardBody.appendChild(cardFooter);

        projectCard.appendChild(cardBody);

        const cardOverlay = document.createElement('div');
        cardOverlay.className = 'card-overlay';

        const overlayTitle = document.createElement('h3');
        overlayTitle.className = 'overlay-title';
        overlayTitle.textContent = project.overlayTitle;
        cardOverlay.appendChild(overlayTitle);

        const overlayText = document.createElement('p');
        overlayText.className = 'overlay-text';
        overlayText.textContent = project.overlayText;
        cardOverlay.appendChild(overlayText);

        const overlayfeature = document.createElement('ul');
        overlayfeature.className = 'overlay-features';
        project.overlayFeatures.forEach(feature => {
          const featureItem = document.createElement('li');
          featureItem.textContent = feature;
          overlayfeature.appendChild(featureItem);
        });
        cardOverlay.appendChild(overlayfeature);

        projectCard.appendChild(cardOverlay);

        projectsContainer.appendChild(projectCard);
      });
    })
    .catch(error => {
      console.error('Erreur lors du chargement des projets:', error);
    });
  });