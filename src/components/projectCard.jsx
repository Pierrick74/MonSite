
export function ProjectCard({ project }) {
    return (
        <li class="project-card-base ">
            <div class="project-card-content">
                <h3 class="project-card-title">{project.title}</h3>
                <p class="project-card-subtitle">{project.subtitle}</p>
                <p class="project-card-text">{project.text}</p>
                <img src={project.imagePath} class="project-image" alt={project.imageAlt} loading="lazy" />
                <div class="project-card-icones">
                    <img class="project-icon-tech" src="assets/photos/icone/icone_html.webp" alt="Logo HTML5" loading="lazy" />
                    <img class="project-icon-tech" src="assets/photos/icone/icone_css.webp" alt="Logo CSS" loading="lazy" />
                    <img class="project-icon-tech" src="assets/photos/icone/icone_tailwind.webp" alt="Logo Tailwind CSS" loading="lazy" />
                </div>
            </div>

            <div class="card-overlay">
                <h4 class="project-overlay-title">Portfolio Personnel</h4>
                <p class="project-overlay-text">Portfolio conçu avec un design minimaliste inspiré d'Apple pour présenter mes projets et compétences en développement web.</p>
                <ul class="project-overlay-features">
                    <li>Responsive design (Tailwind CSS)</li>
                    <li>Interface utilisateur épurée et intuitive</li>
                    <li>Animations CSS pour une meilleure expérience</li>
                    <li>Structure sémantique SEO-friendly</li>
                </ul>
            </div>
        </li>
    )
}