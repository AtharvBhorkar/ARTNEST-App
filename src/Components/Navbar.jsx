import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";

const links = [
  ["Home", "/"],
  ["Artists", "/artists"],
  ["Sculptures", "/sculptures"],
  ["Collections", "/collections"],
  ["About", "/about"],
];

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" className="site-brand" onClick={() => setMenuOpen(false)}>
          <span className="site-brand-mark" aria-hidden="true">✦</span>
          <span>ArtNest</span>
        </NavLink>

        <div id="primary-navigation" className={`site-nav-links${menuOpen ? " is-open" : ""}`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `site-nav-link${isActive ? " active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="site-nav-actions">
          <button type="button" onClick={() => go("/collections")} aria-label="Search artworks" className="nav-icon-button">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
          </button>
          <button type="button" onClick={() => go("/profile")} aria-label="Open wishlist" className="nav-icon-button nav-desktop-action">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2a4.8 4.8 0 0 1 4.8 4.8Z" /></svg>
          </button>
          <button type="button" onClick={() => go("/profile")} aria-label="Open shopping bag" className="nav-icon-button nav-desktop-action">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
          </button>
          <NavLink to="/profile" className="site-avatar" aria-label="Profile">AN</NavLink>
          <button type="button" className="nav-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className="announcement-bar">
        <MdOutlineVerified aria-hidden="true" />
        <strong>SPRING VERNISSAGE 2025</strong>
        <span className="announcement-divider" aria-hidden="true">|</span>
        <span className="announcement-copy">Over 120 newly curated original sculptures and gallery canvases added this week</span>
        <button type="button" onClick={() => go("/collections")} className="announcement-link">Explore Catalogue <span aria-hidden="true">→</span></button>
      </div>
    </header>
  );
}
