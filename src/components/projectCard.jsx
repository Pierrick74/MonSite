import { useState } from "react";
import { Button } from "@/components/ui/button"

export function ProjectCard({ project }) {
    const [isShowDetail, setShowDetail] = useState(false);

    const toggleDetail = () => setShowDetail(!isShowDetail);

    return (
        <li class="project-card-base ">

            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-black">{project.title}</h3>
            <p class="text-base md:text-lg text-gray-500 leading-relaxed">{project.subtitle}</p>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxedproject-card-text">{project.text}</p>
            <img src={project.imagePath} class="project-image" alt={project.imageAlt} loading="lazy" />
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

                <div class="card-overlay">
                    <h4 class="project-overlay-title">{project.overlayTitle}</h4>
                    <p class="project-overlay-text">{project.overlayText}</p>
                    <ul class="project-overlay-features">
                        {project.overlayInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                </div>}
        </li>
    )
}