import React from 'react'

import { Link } from 'lucide-react'

import { Header } from './components/section/header';
import { Description } from './components/section/description';
import { SectionProjet } from './components/section/project';

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
            <Header />
            <main>
                <h1 class="sr-only">Pierrick VIRET Développeur Web et mobile</h1>
                <Description />
                <SectionProjet />
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