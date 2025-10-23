
export function ContactBtn() {
    const makeEmail = () => {
        const coded = 'cGllcnJpY2t2aXJldEBnbWFpbC5jb20=' // base64
        const email = atob(coded)
        window.location.href = `mailto:${email}`
    }

    return (
        <span className="fancy">
            <span className="top-key"></span>
            <a href="#Contact" onClick={(e) => { e.preventDefault(); makeEmail(); }}><span class="text">me contacter</span></a>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </span>
    )
}