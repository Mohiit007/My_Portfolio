function Skills() {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["JavaScript", "C", "C++", "Java", "Python"]
        },
        {
            category: "Frontend Technologies",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
        },
        {
            category: "Backend Technologies",
            skills: ["Node.js", "Express.js", "RESTful APIs"]
        },
        {
            category: "Database & Concepts",
            skills: ["DBMS", "OOP", "JSON"]
        },
        {
            category: "Tools & Platforms",
            skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
        },
        {
            category: "Soft Skills",
            skills: ["Communication", "Team Collaboration", "Leadership"]
        }
    ];

    return (
        <div id="skills" className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.category}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
