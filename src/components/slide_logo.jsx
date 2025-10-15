import { useEffect, useRef } from 'react';

export const SlideLogo = () => {
    const logos = [
        { src: "assets/photos/icone/icone_html.webp", alt: "HTML5" },
        { src: "assets/photos/icone/icone_react_W.webp", alt: "React" },
        { src: "assets/photos/icone/icone_tailwind_B.webp", alt: "Tailwind CSS" },
        { src: "assets/photos/icone/icone_css.webp", alt: "CSS3" },
        { src: "assets/photos/icone/icone_php.webp", alt: "PHP" },
        { src: "assets/photos/icone/icone_laravel.webp", alt: "Laravel" },
        { src: "assets/photos/icone/icone_python.webp", alt: "Python" },
        { src: "assets/photos/icone/icone_java.webp", alt: "Java" },
        { src: "assets/photos/icone/icone_boostrap.webp", alt: "Boostrap" },
        { src: "assets/photos/icone/icone_flutter.webp", alt: "Flutter" },
        { src: "assets/photos/icone/icone_swift.webp", alt: "Swift" },
        { src: "assets/photos/icone/icone_swiftui.webp", alt: "SwiftUI" },
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5; // pixels par frame
        let animationFrameId;
        let isPaused = false;

        const scroll = () => {
            if (!isPaused) {
                scrollPosition += scrollSpeed;
                const maxScroll = scrollContainer.scrollWidth / 2;

                if (scrollPosition >= maxScroll) {
                    scrollPosition = 0;
                }

                scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        const handleMouseEnter = () => { isPaused = true; };
        const handleMouseLeave = () => { isPaused = false; };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden py-10">
            <div ref={scrollRef} className="flex w-fit">
                {/* Première copie */}
                {logos.map((logo, index) => (
                    <div key={`logo-1-${index}`} className="flex-shrink-0 mx-8">
                        <img src={logo.src} alt={logo.alt} className="w-24 h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    </div>
                ))}
                {/* Deuxième copie pour l'animation infinie */}
                {logos.map((logo, index) => (
                    <div key={`logo-2-${index}`} className="flex-shrink-0 mx-8">
                        <img src={logo.src} alt={logo.alt} className="w-24 h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    </div>
                ))}
            </div>
        </div>
    )
}
