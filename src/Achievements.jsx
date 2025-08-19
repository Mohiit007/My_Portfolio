function Achievements(){
    const achievements = [
        {
            title: "Certificate of Excellence",
            organization: "IIT Delhi",
            date: "Sep 2024",
            description: "Educational technology and innovation program"
        },
        {
            title: "Class Representative",
            organization: "BCA Program, BP DSEU",
            date: "2023-2026",
            description: "Elected representative for BCA students"
        },
        {
            title: "Creative Head",
            organization: "Computer Science Society, DSEU",
            date: "2023-2025",
            description: "Leading technical events and creative initiatives"
        }
    ];

    return(
        <div id="achievements" className="achievements-container">
            <h2>Achievements & Certifications</h2>
            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                        <h3>{achievement.title}</h3>
                        <p className="achievement-org">{achievement.organization}</p>
                        <p className="achievement-date">{achievement.date}</p>
                        <p className="achievement-description">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements