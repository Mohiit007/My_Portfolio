import { useTheme } from './ThemeContext';

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <span className="toggle-icon">
                {isDarkMode ? '☀️' : '🌙'}
            </span>
        </button>
    );
}

export default ThemeToggle;
