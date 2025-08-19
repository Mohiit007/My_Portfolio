function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h2>Contact</h2>
            <p className="contact-intro">
                Let's connect! Feel free to reach out for opportunities or collaborations.
            </p>
            
            <div className="contact-grid">
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <a href="mailto:mrrawat9971@gmail.com">mrrawat9971@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">Location:</span>
                        <span>New Delhi, India</span>
                    </div>
                </div>
                
                <div className="social-links">
                    <div className="social-grid">
                        <a href="https://github.com/Mohiit007" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="social-icon">🐙</span>
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/mohit-rawat-302b2a279" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="social-icon">💼</span>
                            LinkedIn
                        </a>
                        <a href="mailto:mrrawat9971@gmail.com" className="social-link">
                            <span className="social-icon">📧</span>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
