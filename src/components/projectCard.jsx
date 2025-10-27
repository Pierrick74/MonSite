import { useState, useEffect } from "react";

export function ProjectCard({ project }) {
    const [isShowDetail, setShowDetail] = useState(false);

    useEffect(() => {
        setShowDetail(false);
    }, [project.id]);

    const toggleDetail = () => setShowDetail(!isShowDetail);

    return (
        <div className="flex justify-center xl:w-3/5">
            <li className="project-card-base bg-background">
                <img src={project.imagePath} className="project-image" alt={project.imageAlt} loading="lazy" />
                <div className="flex justify-between items-start gap-2">
                    <h3 className="heading-card text-black">{project.title}</h3>
                    <button
                        className="text-[#0071e3] hover:underline font-medium text-body flex items-center gap-1 flex-shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 rounded px-2 py-1"
                        onClick={toggleDetail}
                        aria-label={isShowDetail ? "Masquer les détails du projet" : "Afficher les détails du projet"}
                        aria-expanded={isShowDetail}
                    >
                        <span>Voir plus</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-200 ${isShowDetail ? 'rotate-180' : ''}`}
                        >
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className="text-body text-gray-500">{project.subtitle}</p>
                <p className="text-body-large text-gray-600 pb-3">{project.text}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <p
                            key={index}
                            className="parcours-badge"
                        >
                            {tech}
                        </p>
                    ))}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isShowDetail ? 'max-h-[800px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                    <div className="card-overlay">
                        <h4 className="project-overlay-title">{project.overlayTitle}</h4>
                        <p className="project-overlay-text">{project.overlayText}</p>
                        <ul className="project-overlay-features">
                            {project.overlayInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                        <div className="flex justify-end">
                            <a
                                href={project.lien}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0071e3] hover:underline font-medium text-body-large"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}