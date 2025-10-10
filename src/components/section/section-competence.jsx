import { SlideLogo } from '../slide_logo';


export function SectionCompetence() {
    return (
        <section id="Competences" class="h-full w-screen items-center mt-20">
            <h2 class="section-title">Compétences</h2>

            <SlideLogo />
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
    )
}