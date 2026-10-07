import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants';
import { FiArrowUpRight } from 'react-icons/fi';
export default function Contact() {
  return (
    <footer id="contact" className="section-shell contact-section">
      <div className="contact-top"><div><p className="eyebrow">03 / Get in touch</p><h2>Say hello<span className="accent">.</span></h2><p>For collaborations, questions, or a good conversation.</p></div><div className="contact-links"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}<FiArrowUpRight aria-hidden="true" /></a><a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}>{CONTACT.phone}</a></div></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Sanjeev Magar</p><div className="social-links">{SOCIAL_MEDIA_LINKS.map((link) => <a key={link.href} target="_blank" href={link.href} rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`}>{link.icon}</a>)}</div><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
