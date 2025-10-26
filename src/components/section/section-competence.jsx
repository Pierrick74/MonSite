import { SlideLogo } from '../slide_logo';

const competences = [
    {
        titre: "Frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
        contexte: "Portfolio • Projets responsive",
    },
    {
        titre: "Mobile",
        technologies: ["Swift", "SwiftUI"],
        contexte: "Application publiée sur l’App Store",
    },
    {
        titre: "Backend",
        technologies: ["Java", "SQL"],
        contexte: "2 projets • intégration de bases SQL dans des projets Java",
    },
]

export function SectionCompetence() {
    return (
        <section id="Competences" className="h-full items-center section-spacing bg-[#F5F5F7]">
            <h2 className="section-title-competence">Compétences</h2>

            <SlideLogo />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 py-24 max-w-7xl mx-auto">
                {competences.map((comp, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-[#FFF] rounded-xl p-4 shadow-sm border rounded-xl">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-black">
                            {comp.titre}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {comp.technologies.map((tech, i) => (
                                <span key={i}>
                                    {tech}
                                    {i < comp.technologies.length - 1 && <span> / </span>}
                                </span>
                            ))}
                        </p>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                            {comp.contexte}
                        </p>
                    </div>
                ))}
            </div >
        </section >
    )
}