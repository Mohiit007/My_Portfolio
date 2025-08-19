import ThemeToggle from "./ThemeToggle"

function Navbar() {
    const navItems = ["About", "Skills", "Projects", "Achievements", "Education", "Contact"];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="nav-bar-container">
            <ul>
                {navItems.map(item => (
                    <li key={item} onClick={() => scrollToSection(item)}>
                        {item}
                    </li>
                ))}
            </ul>
            <ThemeToggle />
        </nav>
    )
}

export default Navbar
