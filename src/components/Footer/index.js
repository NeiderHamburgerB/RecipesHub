import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Information</h3>
        <ul className="footer-list">
          <li>Site map</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>NFHB</li>
          <li>1999</li>
          <li>CO BAQ</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Work with us</h3>
        <ul className="footer-list">
          <li>Content partners</li>
          <li>Advertise</li>
          <li>Webmasters</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support and Help</h3>
        <ul className="footer-list">
          <li>Content removal</li>
          <li>Contact support</li>
          <li>Frequently Asked Questions</li>
          <li>Trust and Safety</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Discover</h3>
        <ul className="footer-list">
          <li>Content partners</li>
          <li>Advertise</li>
          <li>Webmasters</li>
        </ul>
      </div>
      <div className="language-section">
        <p>Language:</p>
        <select className="language-select">
          <option className="English">English</option>
        </select>
        <p>© Deliciashub.com, 2023</p>
        <p>BAQ</p>
      </div>
    </div>
  );
}

export { Footer };