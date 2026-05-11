import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>RTID</h3>
            <p>Zamonaviy axborot texnologiyalari bilan sizning biznesingizni ilgariga olib boring.</p>
          </div>

          <div className="footer-section">
            <h4>Xizmatlar</h4>
            <ul>
              <li><a href="#services">Web Dizayn</a></li>
              <li><a href="#services">Mobil Ilovalari</a></li>
              <li><a href="#services">Bulutli Xizmatlar</a></li>
              <li><a href="#services">Xavfsizlik</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kompaniya</h4>
            <ul>
              <li><a href="#home">Biz haqida</a></li>
              <li><a href="#addresses">Manzillar</a></li>
              <li><a href="#contacts">Bog'lanish</a></li>
              <li><a href="#home">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Qonuniy hujjatlar</h4>
            <ul>
              <li><a href="#privacy">Maxfiylik siyosati</a></li>
              <li><a href="#terms">Foydalanish shartlari</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RTID. Barcha huquqlar himoyalangan.</p>
          <div className="footer-badges">
            <span className="badge">🏆 ISO 9001:2015</span>
            <span className="badge">🔒 SSL Secure</span>
            <span className="badge">✅ GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
