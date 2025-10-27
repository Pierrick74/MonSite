import { Linkedin, Github, Mail } from 'lucide-react'

export function Footer() {
    // Secure email
    const makeEmail = () => {
        const coded = 'cGllcnJpY2t2aXJldEBnbWFpbC5jb20=' // base64
        const email = atob(coded)
        window.location.href = `mailto:${email}`
    }

    return (
        <footer id="Contact" className="">
            <h2 className="heading-hero w-full text-center">Contact</h2>
            <div className="flex flex-col items-center justify-center text-center">
                <p className="mx-3 text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight pt-20">Vous avez un projet ou une question ?</p>
                <p className="mx-3 text-lg md:text-xl text-secondary leading-relaxed mt-4">Je serais ravi de discuter avec vous !</p>
            </div>

            <div className="flex flex-wrap justify-center items-center md:gap-10 m-5">
                <a
                    href="https://www.linkedin.com/in/prk-v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn flex items-center gap-2"
                    aria-label="Voir mon profil LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                    Linked<span className="font-bold">In</span>
                </a>
                <a
                    href="https://github.com/Pierrick74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn flex items-center gap-2"
                    aria-label="Voir mon profil GitHub"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>
                <a
                    href="#"
                    className="contact-btn flex items-center gap-2"
                    onClick={(e) => { e.preventDefault(); makeEmail(); }}
                    aria-label="M'envoyer un email"
                >
                    <Mail className="w-5 h-5" />
                    Email
                </a>
            </div>
            <p className="text-body text-center mb-5">Copyright @2025 | Designed by Pierrick VIRET</p>
        </footer>
    )
}