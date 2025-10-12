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
        <section id="Competences" class="h-full w-screen items-center mt-20">
            <h2 class="section-title">Compétences</h2>

            <SlideLogo />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 2xl:p-30 mx-5">
                {competences.map((comp, index) => (
                    <div key={index}>
                        <h3 class="competances-title">{comp.titre}</h3>
                        <p class="competances-corps">
                            {comp.technologies.map((tech, i) => (
                                <span key={i}>
                                    {tech}
                                    {i < comp.technologies.length - 1 && <em> / </em>}
                                </span>
                            ))}
                        </p>
                        <p class="competances-corps">
                            {comp.contexte}
                        </p>
                    </div>
                ))}
            </div >
        </section >
    )
}