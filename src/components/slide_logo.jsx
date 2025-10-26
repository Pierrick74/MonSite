import { useEffect, useRef } from 'react';

export const SlideLogo = () => {
    const logos = [
        { src: "assets/photos/icone/icone_html.webp", alt: "Logo HTML5" },
        { src: "assets/photos/icone/icone_react_W.webp", alt: "Logo React" },
        { src: "assets/photos/icone/icone_tailwind_B.webp", alt: "Logo Tailwind CSS" },
        { src: "assets/photos/icone/icone_css.webp", alt: "Logo CSS3" },
        { src: "assets/photos/icone/icone_php.webp", alt: "Logo PHP" },
        { src: "assets/photos/icone/icone_laravel.webp", alt: "Logo Laravel" },
        { src: "assets/photos/icone/icone_python.webp", alt: "Logo Python" },
        { src: "assets/photos/icone/icone_java.webp", alt: "Logo Java" },
        { src: "assets/photos/icone/icone_boostrap.webp", alt: "Logo Boostrap" },
        { src: "assets/photos/icone/icone_flutter.webp", alt: "Logo Flutter" },
        { src: "assets/photos/icone/icone_swift.webp", alt: "Logo Swift" },
        { src: "assets/photos/icone/icone_swiftui.webp", alt: "Logo SwiftUI" },
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
