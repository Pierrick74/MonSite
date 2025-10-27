import { ParcoursCard } from "../ParcoursCards"

const parcoursData = [
    {
        date: "2024 - Présent",
        metier: "Développeur Web Full Stack",
        entreprise: "Campus Numérique in the Alps",
        description: "Formation full-stack moderne",
        skills: ["HTML5", "CSS3", "Javascript", "Tailwind CSS", "React", "Java", "PHP"]
    },
    {
        date: "2023 - 2024",
        metier: "Développeur iOS",
        entreprise: "OpenClassrooms",
        description: "Formation et développement d'applications mobiles natives pour iOS en utilisant Swift et SwiftUI. Réalisation de projets concrets comme MarmotMonitor et Reciplease.",
        skills: ["Swift", "SwiftUI", "iOS"]
    },
    {
        date: "2005 - 2024",
        metier: "Opérateur embarqué",
        entreprise: "Marine Nationale",
        description: "19 ans de service au sein de la Marine Nationale française. Acquisition de compétences en rigueur, méthode et travail d'équipe. Gestion de projets techniques dans des environnements exigeants.",
        skills: ["Leadership", "Gestion de projet", "Rigueur"]
    }

]


export function Parcours() {
    return (
        <section id="parcours" className="h-full items-center section-spacing">
            <h2 className="section-title">Parcours Professionnel</h2>
            <div className="relative max-w-6xl mx-auto py-5 p-3">
                <ul className="timeline-list">
                    {parcoursData.map((parcours, index) => (
                        <li className="timeline-item" key={index}>
                            <div className="timeline-marker"></div>
                            <ParcoursCard parcours={parcours} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}