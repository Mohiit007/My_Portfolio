function Projects() {
    const projects = [
        {
            title: "Habit Tracker",
            description: "A full-stack habit tracking application with AI-powered insights. Features habit management, streak tracking, calendar view, and personalized consistency analysis using machine learning.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "FastAPI", "AI/ML"],
            github: "https://github.com/Mohiit007/Habit-Tracker",
            date: "Dec 2024"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a mobile-responsive portfolio website to showcase academic and personal projects with minimalistic programmer aesthetic.",
            technologies: ["React", "Vite", "CSS"],
            github: "https://github.com/Mohiit007/My_Portfolio",
            demo: "https://mohiit007.github.io/My_Portfolio/",
            date: "Jan 2025"
        },
        {
            title: "Calculator App",
            description: "Built a dynamic calculator application supporting keyboard input and basic arithmetic operations with clean UI design.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007/calculator",
            demo: "https://mohiit007.github.io/calculator/",
            date: "Feb 2025"
        },
        {
            title: "To-Do List App",
            description: "Created a task management app with add/delete/update functionalities and local storage integration for persistent data.",
            technologies: ["React", "Vite", "JavaScript"],
            github: "https://github.com/Mohiit007/Todo-list",
            demo: "https://mohiit007.github.io/Todo-list/",
            date: "Feb 2025"
        },
        {
            title: "Tic Tac Toe Game",
            description: "Developed an interactive two-player browser game with basic AI logic and score tracking functionality.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007/tic-tac-toe",
            demo: "https://mohiit007.github.io/tic-tac-toe/",
            date: "Nov 2024"
        }
    ];

    return (
        <div id="projects" className="projects-section">
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p className="project-date">{project.date}</p>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                GitHub
                            </a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects