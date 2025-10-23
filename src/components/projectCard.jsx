import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"

export function ProjectCard({ project }) {
    const [isShowDetail, setShowDetail] = useState(false);

    useEffect(() => {
        setShowDetail(false);
    }, [project.id]);

    const toggleDetail = () => setShowDetail(!isShowDetail);

    return (
        <div className="flex justify-center xl:w-3/5">
            <li className="project-card-base ">

                <h3 className="text-xl md:text-xl lg:text-2xl font-bold leading-tight tracking-tight text-black">{project.title}</h3>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed">{project.subtitle}</p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed project-card-text">{project.text}</p>
                <img src={project.imagePath} className="project-image" alt={project.imageAlt} loading="lazy" />
                <div className="flex justify-between">
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
                    <Button className="rounded-full bg-neutral-950 w-10 h-10 text-white text-3xl" onClick={toggleDetail}>{isShowDetail ? '-' : '+'}</Button>
                </div>
                {isShowDetail &&

                    <div className="card-overlay">
                        <h4 className="project-overlay-title">{project.overlayTitle}</h4>
                        <p className="project-overlay-text">{project.overlayText}</p>
                        <ul className="project-overlay-features">
                            {project.overlayInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                    </div>}
            </li>
        </div>
    )
}