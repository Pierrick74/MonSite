
export function SectionProjet() {
    return (
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
    )
}