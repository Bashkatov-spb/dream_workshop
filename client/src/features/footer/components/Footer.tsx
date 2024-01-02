import React from 'react';
import '../styles/footer.scss';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="footer__contact">
        <p>
          Email: <a href="mailto:example@email.com">example@email.com</a>
        </p>
        <p>
          Phone: <a href="tel:+0987654321">+0987654321</a>
        </p>
      </div>
      <div className="footer__social-links">
        <a href="https://instagram.com/yourusername" className="social-link">
          <img src="path_to_instagram_logo" alt="Instagram" />
          Instagram
        </a>
        <a href="https://wa.me/1234567890" className="social-link">
          <img src="path_to_whatsapp_logo" alt="WhatsApp" />
          WhatsApp
        </a>
        <a href="https://t.me/yourtelegram" className="social-link">
          <img src="path_to_telegram_logo" alt="Telegram" />
          Telegram
        </a>
      </div>
      <div style={{ height: '300px' }}></div>
    </footer>
  );
};

export default Footer;
