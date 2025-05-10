import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Mail } from 'lucide-react';
import footerBg from '@/public/images/footer.webp';
import "../../../styles/footer.css";


export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerBg.src})` }}>
      {/* Contenedor Principal */}
      <div className="footer-container">
        {/* Sección Superior */}
        <div className="footer-top-section">
          <div className="footer-top-content">
            <h1 className="footer-title">
              Descubre la perla del Pacífico,
              <br /> donde cada rincón cuenta una historia
            </h1>
            <p className="footer-subtitle">
              Mazatlán, lugar donde se rompen las olas
            </p>
          </div>
        </div>

        {/* Sección Inferior con efecto glass */}
        <div className="footer-bottom-section">
          {/* Contenido Principal */}
          <div className="footer-main-content">
            {/* Columna 1 - Logo y explorar */}
            <div className="footer-logo-column">
              <h1 className="footer-logo">
                <span className="block">Maza</span>
                <span className="block">Tour</span>
              </h1>
              <div className="footer-divider"></div>
              <a href="#!" className="footer-explore-btn">
                Explorar <ArrowUpRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Divisor (solo en desktop) */}
            <div className="footer-vertical-divider"></div>

            {/* Columnas de información */}
            <div className="footer-info-columns">
              {/* Acerca de Nosotros */}
              <div className="footer-info-section">
                <p className="footer-section-title">Acerca de Nosotros</p>
                <ul className="footer-link-list">
                  <li><a href="#!" className="footer-link">¿Quiénes somos?</a></li>
                  <li><a href="#!" className="footer-link">Nuestra historia</a></li>
                  <li><a href="#!" className="footer-link">Misión y visión</a></li>
                  <li><a href="#!" className="footer-link">¿Por qué Mazatlán?</a></li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="footer-info-section">
                <p className="footer-section-title">Contacto</p>
                <ul className="footer-link-list">
                  <li><p className="footer-contact-info">#100 Av Miguel Aleman, Mazatlán, México</p></li>
                  <li><p className="footer-contact-info">(669) 000-0000</p></li>
                  <li><p className="footer-contact-info">TransMaz@gmail.com</p></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer inferior */}
          <div className="footer-legal-section">
            {/* Redes Sociales */}
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:example@example.com" className="footer-social-icon mail">
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              Copyright © 2025. All Rights Reserved. Visita, Conoce Mazatlán
            </div>

            {/* Términos */}
            <div className="footer-terms">
              Términos & Condiciones
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}