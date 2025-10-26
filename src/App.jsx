
import { Header } from './components/section/header';
import { Description } from './components/section/description';
import { SectionProjet } from './components/section/section-project';
import { SectionCompetence } from './components/section/section-competence';
import { Parcours } from './components/section/section-parcours';
import { Footer } from './components/section/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1 className="sr-only">Pierrick VIRET Développeur Web et mobile</h1>
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