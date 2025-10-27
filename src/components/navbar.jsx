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

export function Navbar() {
    const menuItems = [
        { id: 'projects', label: 'Projets' },
        { id: 'Competences', label: 'Compétences' },
        { id: 'parcours', label: 'Parcours' },
        { id: 'Contact', label: 'Contact' },
    ];

    return (
        <nav className="" role="navigation" aria-label="Navigation principale">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Nom */}
                    <div className="flex-shrink-0">
                        <h2 className="heading-card text-gray-900 hidden md:flex ">
                            Pierrick VIRET
                        </h2>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors duration-200 px-3 py-2 heading-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:rounded-md"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Menu Mobile */}
                    <div className="md:hidden bg-white">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2">
                                <span className="sr-only">Ouvrir le menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 17 14"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-stone-50" align="end" sideOffset={5}>
                                <DropdownMenuLabel>Pierrick VIRET</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {menuItems.map((item) => (
                                    <DropdownMenuItem
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
