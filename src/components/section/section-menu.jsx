import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

export function SectionMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><span className="sr-only">Ouvrir le menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 17 14" fill="none" aria-hidden="true">
                    <path stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" sideOffset={5}>
                <DropdownMenuLabel>Pierrick VIRET</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => scrollToSection('projects')}>
                    Projets
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('Competences')}>
                    Compétences
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('parcours')}>
                    Parcours
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('Contact')}>
                    Contact
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}