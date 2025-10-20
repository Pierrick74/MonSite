import React from 'react'

import { Link } from 'lucide-react'

import { Header } from './components/section/header';
import { Description } from './components/section/description';
import { SectionProjet } from './components/section/project';
import { SectionCompetence } from './components/section/section-competence';
import { Parcours } from './components/section/section-parcours';
import { Footer } from './components/section/Footer';


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
            <Footer />
        </div >
    )
}

export default App