import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

function BinaryBackground() {
    const canvasRef = useRef(null);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Binary rain effect
        const binary = '01';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            // Theme-aware background and text colors with reduced opacity for minimalism
            const bgColor = isDarkMode ? 'rgba(10, 10, 10, 0.03)' : 'rgba(255, 255, 255, 0.03)';
            const textColor = isDarkMode ? 'rgba(59, 130, 246, 0.05)' : 'rgba(37, 99, 235, 0.08)';

            // Semi-transparent background for trail effect
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text properties
            ctx.fillStyle = textColor;
            ctx.font = fontSize + 'px monospace';

            // Draw binary characters
            for (let i = 0; i < drops.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 100);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="binary-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
}

export default BinaryBackground;
