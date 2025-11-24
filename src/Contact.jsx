function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h2>Contact</h2>
            <p className="contact-intro">
                Let's connect! Feel free to reach out for opportunities or collaborations.
            </p>

            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
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
                    <h3>Connect</h3>
                    <div className="social-grid">
                        <a href="https://github.com/Mohiit007" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mohit-rawat-7aab89390/" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <a href="mailto:mrrawat9971@gmail.com" className="social-link">
                            Gmail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
