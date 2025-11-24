import { useTheme } from './ThemeContext';

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <span className="toggle-icon">
                {isDarkMode ? 'Light' : 'Dark'}
            </span>
        </button>
    );
}

export default ThemeToggle;
