function Education() {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "DSEU, Delhi",
            duration: "2023 - 2026",
            cgpa: "7.96 CGPA",
            status: "Expected Graduation: 2026"
        },
        {
            degree: "Senior Secondary (XII)",
            institution: "CBSE",
            duration: "2022",
            cgpa: "63%",
            status: "Completed"
        }
    ];

    return (
        <div id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <div className="education-header">
                            <h3>{edu.degree}</h3>
                            <span className="education-duration">{edu.duration}</span>
                        </div>
                        <p className="education-institution">{edu.institution}</p>
                        <div className="education-details">
                            <span className="education-grade">
                                {edu.degree.includes('BCA') ? `Current CGPA: ${edu.cgpa}` : `Percentage: ${edu.cgpa}`}
                            </span>
                            <span className="education-status">{edu.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
