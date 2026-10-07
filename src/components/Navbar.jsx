import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    const outside = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav ref={navRef} className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="wordmark" aria-label="Sanjeev Magar home" onClick={() => setIsOpen(false)}>SM<span>.</span></a>
        <button ref={buttonRef} className="menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div id="navigation-links" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {LINKS.map((link) => <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)}>{link.name}{link.id === 'contact' && <FiArrowUpRight aria-hidden="true" />}</a>)}
        </div>
      </nav>
    </header>
  );
}
