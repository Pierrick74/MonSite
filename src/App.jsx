import React from 'react'

import { Link } from 'lucide-react'
import { ContactBtn } from './components/ui/contact-button';
import { SectionMenu } from './components/section/section-menu';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

function App() {
    return (
        <div className="App">
            <header>
                <div class="m-6">
                    <SectionMenu />
                </div>
            </header >
            <main>
                <h1 class="sr-only">Pierrick VIRET Développeur Web et mobile</h1>
                <section id="Description" class="h-full w-screen items-center">
                    <div
                        class="flex h-screen w-full items-end justify-items-end bg-[url(/assets/photos/img_profile.webp)] bg-size-[70vh] bg-fixed bg-center bg-no-repeat md:bg-size-[85vh] md:bg-bottom-right lg:bg-size-[80vh]">
                        <div class="bg-zinc-50 p-3 rounded-t-1g xl:w-1/2 px-5 pt-5">
                            <p class="uppercase md:text-lg xl:text-2xl xl:my-2 2xl:text-3xl text-zinc-500 font-medium tracking-normal leading-normal">Pierrick VIRET</p>
                            <h2 class="xl:my-4 text-xl tracking-tight leading-tight font-bold lg:text-4xl xl:text-5xl ">Développeur Web et mobile</h2>
                            <p class="text-justify lg:text-lg 2xl:text-xl xl:my-5 text-zinc-500 font-normal tracking-normal leading-relaxed">
                                Développeur iOS en formation développement web front-end. Mon parcours de 19 ans dans la Marine Nationale m'a doté d'une rigueur que j'applique désormais à la création d'interfaces
                                utilisateur mobiles et web performantes.
                            </p>
                            <div class="flex flex-wrap md:gap-5 mt-2 items-center mb-3">
                                <p class="p-[1em] md:text-xl 2xl:text-2xl lg:p-0">Faites décoller votre projet&nbsp;!</p>
                                <ContactBtn />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" class="h-full w-screen items-center mt-20">
                    <h2 class="section-title">Projects Personnels</h2>
                    <ul class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 md:gap-10 lg:gap-20 2xl:gap-40 justify-items-center px-5 2xl:px-30">
                        <li class="project-card-base ">
                            <div class="project-card-content">
                                <h3 class="project-card-title">Site internet</h3>
                                <p class="project-card-subtitle">New</p>
                                <p class="project-card-text">Portefolio: Création de ce site en HTML5/CSS3/Tailwind CSS.</p>
                                <img src="assets/photos/site.webp" class="project-image" alt="Image de mon site actuellement" loading="lazy" />
                                <div class="project-card-icones">
                                    <img class="project-icon-tech" src="assets/photos/icone/icone_html.webp" alt="Logo HTML5" loading="lazy" />
                                    <img class="project-icon-tech" src="assets/photos/icone/icone_css.webp" alt="Logo CSS" loading="lazy" />
                                    <img class="project-icon-tech" src="assets/photos/icone/icone_tailwind.webp" alt="Logo Tailwind CSS" loading="lazy" />
                                </div>
                            </div>

                            <div class="card-overlay">
                                <h4 class="project-overlay-title">Portfolio Personnel</h4>
                                <p class="project-overlay-text">Portfolio conçu avec un design minimaliste inspiré d'Apple pour présenter mes projets et compétences en développement web.</p>
                                <ul class="project-overlay-features">
                                    <li>Responsive design (Tailwind CSS)</li>
                                    <li>Interface utilisateur épurée et intuitive</li>
                                    <li>Animations CSS pour une meilleure expérience</li>
                                    <li>Structure sémantique SEO-friendly</li>
                                </ul>
                            </div>
                        </li>
                        <li class="project-card-base">
                            <div class="project-card-content">
                                <h3 class="project-card-title">Application Mobile</h3>
                                <p class="project-card-subtitle">JAN 2025</p>
                                <p class="project-card-text">MarmotMonitor: gestion des premiers jours d'un enfant</p>
                                <img src="assets/photos/marmotMonitorApp.webp" class="project-image" alt="Image de MarmotMonitor" loading="lazy" />

                                <div class="project-card-icones">
                                    <img class="project-icon-tech col-span-1" src="assets/photos/icone/icone_swiftui.webp" alt="SwiftUI icon" loading="lazy" />
                                    <div class="flex justify-center col-span-2">
                                        <img class="project-icon-tech" src="assets/photos/appstore.webp" alt="Swift icon" loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div class="card-overlay">
                                <h4 class="project-overlay-title">MarmotMonitor</h4>
                                <p class="project-overlay-text">Application iOS pour aider les nouveaux parents à suivre et gérer les soins quotidiens de leur nouveau-né.</p>
                                <ul class="project-overlay-features">
                                    <li>Suivi des repas, du sommeil et des changes</li>
                                    <li>Graphiques d'évolution du poids et de la taille</li>
                                    <li>Tableau de bord journalier avec synthèse des activités</li>
                                    <li>Interface intuitive et adaptée à l'usage quotidien</li>
                                </ul>
                            </div>
                        </li>
                        <li class="project-card-base">
                            <div class="project-card-content">
                                <h2 class="project-card-title">Application Mobile</h2>
                                <p class="project-card-subtitle">2023</p>
                                <p class="project-card-text">Reciplease: application de recette de cuisine</p>

                                <img src="assets/photos/reciplease.webp" class="project-image" alt="Image de Reciplease" loading="lazy" />

                                <div class="project-card-icones">
                                    <div></div>
                                    <img class="project-icon-tech" src="assets/photos/icone/icone_swift.webp" alt="Swift icon" loading="lazy" />
                                    <div></div>
                                </div>
                            </div>

                            <div class="card-overlay">
                                <h3 class="project-overlay-title">Reciplease</h3>
                                <p class="project-overlay-text">Application iOS permettant de découvrir des recettes de cuisine en fonction des ingrédients disponibles dans votre réfrigérateur.</p>
                                <ul class="project-overlay-features">
                                    <li>Recherche de recettes par ingrédients</li>
                                    <li>Filtres diététiques (végétarien, sans gluten, etc.)</li>
                                    <li>Sauvegarde des recettes favorites</li>
                                    <li>Interface élégante avec photos haute résolution</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
                <section id="Competences" class="h-full w-screen items-center mt-20">
                    <h2 class="section-title">Compétences</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 2xl:p-30 mx-5">
                        <div class="">
                            <h3 class="competances-title">Web<div class="cercleFill"></div></h3>
                            <p class="competances-corps">
                                HTML5
                                <em> / </em>
                                CSS3
                                <em> / </em>
                                JavaScript
                                <em> / </em>
                                Tailwind CSS
                            </p>
                        </div>
                        <div class="">
                            <h3 class="competances-title">Mobile<div class="cercleFill"></div></h3>
                            <p class="competances-corps">
                                Swift
                                <em> / </em>
                                SwiftUI
                                <em> / </em>
                                Flutter
                            </p>
                        </div>
                        <div class="">
                            <h3 class="competances-title">Outils<div class="cercleFill"></div></h3>
                            <p class="competances-corps">
                                VSCode
                                <em> / </em>
                                XCode
                                <em> / </em>
                                Git
                                <em> / </em>
                                Github
                            </p>
                        </div>
                        <div class="">
                            <h3 class="competances-title">Languages<div class="cercleEmpty"></div></h3>
                            <p class="competances-corps">
                                Java
                                <em> / </em>
                                PHP
                                <em> / </em>
                                Python
                            </p>
                        </div>
                        <div class="">
                            <h3 class="competances-title">Frameworks<div class="cercleEmpty"></div></h3>
                            <p class="competances-corps">
                                Laravel
                                <em> / </em>
                                Symfony
                                <em> / </em>
                                Angular
                                <em> / </em>
                                Vue.js
                                <em> / </em>
                                Spring Boot
                            </p>
                        </div>
                        <div class="">
                            <h3 class="competances-title">Données<div class="cercleEmpty"></div></h3>
                            <p class="competances-corps">
                                SQL
                                <em> / </em>
                                MySQL
                                <em> / </em>
                                API REST
                            </p>
                        </div>
                    </div>
                    <div class="flex w-full justify-start items-center mx-10">
                        <p class="text-sm lg:text-base xl:text-base 2xl:text-lg font-normal tracking-normal leading-normal ">Maîtrisé</p>
                        <div class="cercleFill"></div>
                        <p class="text-sm lg:text-base xl:text-base 2xl:text-lg font-normal tracking-normal leading-normal ">En apprentissage</p>
                        <div class="cercleEmpty"></div>
                    </div>
                </section>
                <section id="parcours" class="h-full w-screen items-center mt-20">
                    <h2 class="section-title">Parcours Professionnel</h2>
                    <div class="relative max-w-6xl mx-auto py-5 p-3">
                        <ul class="timeline-list">
                            <li class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <p class="timeline-date">2024 - Présent</p>
                                    <h3 class="timeline-title timeline-animate">Développeur Web Full Stack</h3>
                                    <p class="timeline-subtitle timeline-animate">Campus Numérique in the Alps</p>
                                    <p class="timeline-description timeline-animate">Formation et développement de compétences en HTML5, CSS3, JavaScript et PHP.</p>
                                    <div class="mt-2 flex flex-wrap gap-2">
                                        <span class="parcours-badge">HTML5 </span>
                                        <span class="parcours-badge">CSS3 </span>
                                        <span class="parcours-badge">JavaScript </span>
                                        <span class="parcours-badge">Tailwind CSS </span>
                                    </div>
                                </div>
                            </li>

                            <li class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <p class="timeline-date">2023 - 2024</p>
                                    <h3 class="timeline-title timeline-animate">Développeur iOS</h3>
                                    <p class="timeline-subtitle timeline-animate">OpenClassrooms</p>
                                    <p class="timeline-description timeline-animate">
                                        Formation et développement d'applications mobiles natives pour iOS en utilisant Swift et SwiftUI. Réalisation de projets concrets comme MarmotMonitor et Reciplease.
                                    </p>
                                    <div class="mt-2 flex flex-wrap gap-2">
                                        <span class="parcours-badge">Swift</span>
                                        <span class="parcours-badge">SwiftUI</span>
                                        <span class="parcours-badge">iOS</span>
                                    </div>
                                </div>
                            </li>

                            <li className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p className="timeline-date">2005 - 2024</p>
                                    <h3 className="timeline-title timeline-animate">Marine Nationale</h3>
                                    <p className="timeline-subtitle timeline-animate">Opérateur embarqué</p>
                                    <p className="timeline-description timeline-animate">
                                        19 ans de service au sein de la Marine Nationale française. Acquisition de compétences en rigueur, méthode et travail d'équipe. Gestion de projets techniques dans des environnements
                                        exigeants.
                                    </p>
                                    <ul className="mt-2 flex flex-wrap gap-2">
                                        <li className="parcours-badge">Leadership</li>
                                        <li className="parcours-badge">Gestion de projet</li>
                                        <li className="parcours-badge">Rigueur</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer id="Contact" class="">
                <h2 class="section-title w-full text-center">Contact</h2>
                <div class="flex flex-wrap justify-center items-center md:gap-10 m-5">
                    <a href="https://www.linkedin.com/in/prk-v" target="_blank" class="contact-btn">
                        Linked
                        <span class="font-bold">In</span>
                    </a>
                    <a id="email" class="contact-btn" onclick="makeEmail()">Email</a>
                </div>
                <p class="text-center mb-5">Copyright @2025 | Designed by Pierrick VIRET</p>
            </footer>
            <script src="animation.js"></script>
        </div >
    )
}

export default App