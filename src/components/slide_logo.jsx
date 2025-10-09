export const SlideLogo = () => {
    const logos = [
        { src: "/assets/photos/icone/icone_html.webp", alt: "HTML5" },
        { src: "/assets/photos/icone/icone_react_W.webp", alt: "React" },
        { src: "/assets/photos/icone/icone_tailwind_B.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_css.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_php.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_laravel.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_python.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_java.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_html.webp", alt: "HTML5" },
        { src: "/assets/photos/icone/icone_react_W.webp", alt: "React" },
        { src: "/assets/photos/icone/icone_tailwind_B.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_css.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_php.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_laravel.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_python.webp", alt: "Tailwind CSS" },
        { src: "/assets/photos/icone/icone_java.webp", alt: "Tailwind CSS" },

    ];

    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-10">
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="flex animate-scroll">
                {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-8">
                        <img src={logo.src} alt={logo.alt} className="w-36 h-20 object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}