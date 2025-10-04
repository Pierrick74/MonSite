
export function ProjectCard({ project }) {
    return (
        <li class="project-card-base ">
            <div class="project-card-content">
                <h3 class="project-card-title">{project.title}</h3>
                <p class="project-card-subtitle">{project.subtitle}</p>
                <p class="project-card-text">{project.text}</p>
                <img src={project.imagePath} class="project-image" alt={project.imageAlt} loading="lazy" />
                <div class={`project-card-icones`}>
                    {project.technologies.length < 2 && <div></div>}
                    {project.technologies.map((tech, index) => (
                        <img
                            key={index}
                            className="project-icon-tech"
                            src={tech.src}
                            alt={tech.alt}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <div class="card-overlay">
                <h4 class="project-overlay-title">{project.overlayTitle}</h4>
                <p class="project-overlay-text">{project.overlayText}</p>
                <ul class="project-overlay-features">
                    {project.overlayInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}