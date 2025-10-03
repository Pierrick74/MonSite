import { ContactBtn } from './components/ui/contact-button';

export function Description() {
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
}