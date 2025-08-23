import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    const navItems = ["About", "Skills", "Projects", "Achievements", "Education", "Contact"];
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("About");

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false); // close on navigation (mobile)
    };

    // Close menu on window resize to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [menuOpen]);

    // Lock body scroll when menu is open on mobile
    useEffect(() => {
        const original = document.body.style.overflow;
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = original;
        }
        return () => { document.body.style.overflow = original; };
    }, [menuOpen]);

    // Scrollspy: highlight current section
    useEffect(() => {
        const ids = navItems.map((n) => n.toLowerCase());
        const handler = () => {
            let current = activeSection;
            const threshold = window.innerWidth <= 480 ? 80 : 120;
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    current = id.charAt(0).toUpperCase() + id.slice(1);
                    break;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <>
            <nav className="nav-bar-container">
                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className={activeSection === item ? 'active' : ''}
                            onClick={() => scrollToSection(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <ThemeToggle />
            </nav>
            
            <div 
                className={`nav-overlay ${menuOpen ? 'open' : ''}`} 
                onClick={() => setMenuOpen(false)} 
                role="presentation" 
            />
        </>
    );
}

export default Navbar
