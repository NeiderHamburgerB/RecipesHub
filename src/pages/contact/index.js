import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            <p className="contact-label">Email:</p>
            <a href="mailto:neiderhamburger99@gmail.com" className="contact-email">
              neiderhamburger99@gmail.com
            </a>
            <p className="contact-label">GitHub:</p>
            <a
              href="https://github.com/NeiderHamburgerB"
              className="contact-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/NeiderHamburgerB
            </a>
          </div>
        </div>
      );
}

export { Contact }
