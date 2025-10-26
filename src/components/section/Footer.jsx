
export function Footer() {
    // Secure email
    const makeEmail = () => {
        const coded = 'cGllcnJpY2t2aXJldEBnbWFpbC5jb20=' // base64
        const email = atob(coded)
        window.location.href = `mailto:${email}`
    }

    return (
        <footer id="Contact" className="">
            <h2 className="section-title w-full text-center">Contact</h2>
            <div className="flex flex-wrap justify-center items-center md:gap-10 m-5">
                <a
                    href="https://www.linkedin.com/in/prk-v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                    aria-label="Voir mon profil LinkedIn"
                >
                    Linked
                    <span className="font-bold">In</span>
                </a>
                <a
                    href="https://github.com/Pierrick74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn"
                    aria-label="Voir mon profil GitHub"
                >
                    GitHub
                </a>
                <a
                    href="#"
                    className="contact-btn"
                    onClick={(e) => { e.preventDefault(); makeEmail(); }}
                    aria-label="M'envoyer un email"
                >
                    Email
                </a>
            </div>
            <p className="text-body text-center mb-5">Copyright @2025 | Designed by Pierrick VIRET</p>
        </footer>
    )
}