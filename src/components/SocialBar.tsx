import React from 'react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/SocialBar.scss';

const SocialBar: React.FC = () => (
  <div className="social-bar">
    <a href="https://www.linkedin.com/in/daniel-moya-818974210/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://wa.me/573507680286" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <FaWhatsapp />
    </a>
  </div>
);

export default SocialBar;