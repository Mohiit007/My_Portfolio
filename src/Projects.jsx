function Projects(){
    const projects = [
        {
            title: "Portfolio Website",
            description: "Designed and developed a mobile-responsive portfolio website to showcase academic and personal projects.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007",
            demo: "#",
            image: "💼",
            date: "Jan 2025"
        },
        {
            title: "Calculator App",
            description: "Built a dynamic calculator application supporting keyboard input and basic arithmetic operations.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007",
            demo: "#",
            image: "🧮",
            date: "Feb 2025"
        },
        {
            title: "To-Do List App",
            description: "Created a task management app with add/delete/update functionalities and local storage integration.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007",
            demo: "#",
            image: "📝",
            date: "Feb 2025"
        },
        {
            title: "Tic Tac Toe Game",
            description: "Developed an interactive two-player browser game with basic AI logic and score tracking.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mohiit007",
            demo: "#",
            image: "🎮",
            date: "Nov 2024"
        }
    ];

    return(
        <div id="projects" className="projects-section">
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-icon">{project.image}</div>
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
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects