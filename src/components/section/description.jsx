import { ContactBtn } from '../ui/contact-button';

export function Description() {
    return <section id="Description" className="items-center">
        <div
            className="flex w-full h-[94dvh] md:h-[94vh] items-end justify-items-end bg-[url(/assets/photos/img_profile.webp)] bg-size-[70vh] bg-fixed bg-center bg-no-repeat md:bg-size-[85vh] md:bg-bottom-right lg:bg-size-[80vh]">
            <div className="bg-background p-3 rounded-t-lg xl:w-1/2 px-5 py-10">
                <p className="text-label uppercase text-secondary leading-normal xl:my-2">Pierrick VIRET</p>
                <h2 className="heading-hero xl:my-4">Développeur Web et mobile</h2>
                <p className="text-body text-left md:text-justify text-secondary font-normal max-w-3xl my-2 xl:my-5">
                    19 ans à naviguer dans les environnements les plus exigeants m'ont enseigné
                    la rigueur. Aujourd'hui, j'apporte cette même précision à vos projets web et mobile.
                </p>
                <ContactBtn />
            </div>
        </div>
    </section>
}