import { useState, useEffect } from "react";

export function ProjectCard({ project }) {
    const [isShowDetail, setShowDetail] = useState(false);

    useEffect(() => {
        setShowDetail(false);
    }, [project.id]);

    const toggleDetail = () => setShowDetail(!isShowDetail);

    return (
        <div className="flex justify-center xl:w-3/5">
            <li className="project-card-base ">
                <img src={project.imagePath} className="project-image" alt={project.imageAlt} loading="lazy" />
                <h3 className="heading-card text-black">{project.title}</h3>
                <p className="text-body text-gray-500">{project.subtitle}</p>
                <p className="text-body-large text-gray-600 pb-3">{project.text}</p>
                <div className="flex justify-between items-center">
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
                    <button
                        className="rounded-full bg-[#0071e3] w-10 h-10 text-white transition-all hover:scale-105 flex-shrink-0 flex items-center justify-center p-0 border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                        onClick={toggleDetail}
                        aria-label={isShowDetail ? "Masquer les détails du projet" : "Afficher les détails du projet"}
                        aria-expanded={isShowDetail}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-200"
                        >
                            {isShowDetail ? (
                                <line x1="4" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            ) : (
                                <>
                                    <line x1="10" y1="4" x2="10" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="4" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </>
                            )}
                        </svg>
                    </button>
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
                    </div>
                </div>
            </li>
        </div>
    )
}