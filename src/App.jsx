import React from 'react'

import { Link } from 'lucide-react'

import { Header } from './components/section/header';
import { Description } from './components/section/description';
import { SectionProjet } from './components/section/project';
import { SectionCompetence } from './components/section/section-competence';
import { Parcours } from './components/section/section-parcours';


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
                <SectionCompetence />
                <Parcours />
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