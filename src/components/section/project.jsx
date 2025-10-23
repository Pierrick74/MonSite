import { useState, useEffect } from "react";
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
        technologies: ["SwuiftUI"],
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
    const [activeTab, setActiveTab] = useState("web");

    // Précharger toutes les images au montage
    useEffect(() => {
        PROJECTS.forEach(project => {
            const img = new Image();
            img.src = project.imagePath;
        });
    }, []);

    return (
        <section id="projects" className="h-full items-center section-spacing">
            <h2 className="section-title ">Projects</h2>
            <p className="text-justify mx-6 pt-2 pb-4 lg:text-lg 2xl:text-xl xl:my-5 text-zinc-500 font-normal tracking-normal leading-relaxed">Voici quelques exemples de réalisation, vous trouverez plus sur mon GITHUB</p>
            <div className="flex justify-center">
                <div className="mx-6 xl:mx-20 xl:max-w-4xl xl:w-full">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className=" bg-[#F5F5F7] p-4 rounded-xl">
                        <TabsList className="grid grid-cols-3 gap-2">
                            <TabsTrigger value="web" className=" bg-[#FFF] data-[state=active]:bg-[#F5F5F7] text-xl md:text-1xl lg:text-2xl text-center leading-tight tracking-tight text-black" >Web</TabsTrigger>
                            <TabsTrigger value="mobile" className=" bg-[#FFF] data-[state=active]:bg-[#F5F5F7] text-xl md:text-1xl lg:text-2xl text-center leading-tight tracking-tight text-black">Mobile</TabsTrigger>
                            <TabsTrigger value="java" className=" bg-[#FFF] data-[state=active]:bg-[#F5F5F7] text-xl md:text-1xl lg:text-2xl text-center leading-tight tracking-tight text-black">Java</TabsTrigger>
                        </TabsList>
                        <TabsContent value="web" className="flex justify-center">
                            <ProjectCard project={PROJECTS[0]} />
                        </TabsContent>
                        <TabsContent value="mobile" className="flex justify-center">
                            <ProjectCard project={PROJECTS[1]} />
                        </TabsContent>
                        <TabsContent value="java" className="flex justify-center">
                            <ProjectCard project={PROJECTS[2]} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}