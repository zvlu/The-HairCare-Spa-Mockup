import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>
            The HairCare<span>Spa</span>
          </h3>
          <p>Elevate your beauty experience</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Hair Styling</a>
              </li>
              <li>
                <a href="#services">Color & Highlights</a>
              </li>
              <li>
                <a href="#services">Hair Treatments</a>
              </li>
              <li>
                <a href="#services">Spa Packages</a>
              </li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                Facebook
              </a>
              <a href="#" className="social-icon">
                Instagram
              </a>
              <a href="#" className="social-icon">
                Twitter
              </a>
              <a href="#" className="social-icon">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 The HairCare Spa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
