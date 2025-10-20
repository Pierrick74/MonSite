import { ProjectCard } from "../projectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PROJECTS = [
    {
        id: 1,
        title: "Site Internet",
        subtitle: "New",
        text: "Portefolio: Création de ce site en REACT / Tailwind CSS.",
        imagePath: "assets/photos/site.webp",
        imageAlt: "Image de mon site actuellement",
        technologies: ["React", "Tailwind CSS"],
        overlayTitle: "Portfolio Personnel",
        overlayText: "Portfolio conçu avec un design minimaliste inspiré d'Apple pour présenter mes projets et compétences en développement web.",
        overlayInfo: ["Responsive design (Tailwind CSS)",
            "Interface utilisateur épurée et intuitive",
            "Animations CSS pour une meilleure expérience",
            "Structure sémantique SEO-friendly"]

    },
    {
        id: 2,
        title: "Application Mobile",
        subtitle: "JAN 2025",
        text: "MarmotMonitor: gestion des premiers jours d'un enfant.",
        imagePath: "assets/photos/marmotMonitorApp.webp",
        imageAlt: "Image de MarmotMonitor",
        technologies: ["SWIFTUI"],
        overlayTitle: "MarmotMonitor",
        overlayText: "Application iOS pour aider les nouveaux parents à suivre et gérer les soins quotidiens de leur nouveau-né.",
        overlayInfo: ["Suivi des repas, du sommeil et des changes",
            "Graphiques d'évolution du poids et de la taille",
            "Tableau de bord journalier avec synthèse des activités",
            "Interface intuitive et adaptée à l'usage quotidien"
        ]
    },
    {
        id: 3,
        title: "Jeu d'Aventure Java",
        subtitle: "JUIN 2025",
        text: "JavaQuest: jeu d'aventure développé en Java avec JavaFX",
        imagePath: "assets/photos/javaquest.webp",
        imageAlt: "Image de JavaQuest",
        technologies: ["Java"],
        overlayTitle: "JavaQuest",
        overlayText: "Jeu d'aventure développé en Java durant ma formation au Campus Numérique in the Alps. Le joueur incarne un guerrier (Warrior ou Wizard) qui doit atteindre le coffre aux trésors en affrontant des créatures ennemies et en récupérant des équipements.",
        overlayInfo: ["Choix de classe de personnage avec capacités uniques",
            "Système de combat contre dragons, gobelins et orcs",
            "Gestion d'inventaire et d'équipements",
            "Sauvegarde de progression via base de données H2",
            "Technologies : Java 17, JavaFX 21, Maven"
        ],
    }
]

export function SectionProjet() {
    return (
        <section id="projects" class="h-full w-screen items-center mt-20">
            <h2 class="section-title pb-12">Projects</h2>
            <ul class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 md:gap-10 lg:gap-20 2xl:gap-40 justify-items-center px-5 2xl:px-30">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id}
                        project={project} />
                ))}
            </ul>
            <div className="m-6">
                <Tabs defaultValue="account" className=" bg-[#F5F5F7] p-4 rounded-xl">
                    <TabsList>
                        <TabsTrigger value="account" className="  grid grid-cols-4 bg-[#FFF] data-[state=active]:bg-[#F5F5F7] text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-black" >WEB</TabsTrigger>
                        <TabsTrigger value="password" className="  grid grid-cols-4 bg-[#FFF] data-[state=active]:bg-[#F5F5F7]">Mobile</TabsTrigger>
                        <TabsTrigger value="java" className=" grid grid-cols-4 bg-[#FFF] data-[state=active]:bg-[#F5F5F7]">Java</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <ProjectCard project={PROJECTS[0]} />
                    </TabsContent>
                    <TabsContent value="password">
                        <ProjectCard project={PROJECTS[1]} />
                    </TabsContent>
                    <TabsContent value="java">
                        <ProjectCard project={PROJECTS[2]} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}