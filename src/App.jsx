import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import ArtistDetails from "./page/ArtistDetails";
import Artists from "./page/Artists";
import Sculptures from "./page/Sculptures";
import Collections from "./page/Collections";
import AboutUs from "./page/AboutUs";
import Profile from "./page/Profile";
import CustomArt from "./page/CustomArt";
import Wishlist from "./page/Wishlist";
import Cart from "./page/Cart";
import MyOrders from "./page/MyOrders";
import heroImg from "./assets/hero.png";
import "./artnest.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Discover", path: "/discover" },
  { label: "Artists", path: "/artists" },
  { label: "Sculptures", path: "/sculptures" },
  { label: "Curated Collections", path: "/curated-collections" },
  { label: "Custom Art", path: "/custom-art" },
  { label: "About", path: "/about" },
];

const categories = [
  ["Painting", "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80"],
  ["Sculpture", "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=300&q=80"],
  ["Sketches", "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80"],
  ["Digital Art", "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=300&q=80"],
  ["Photography", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80"],
  ["Ceramics", "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=300&q=80"],
  ["Wood Art", "https://images.unsplash.com/photo-1544413164-5f1b3f0f1c5a?auto=format&fit=crop&w=300&q=80"],
  ["Textile Art", "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&w=300&q=80"],
  ["Folk Art", "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=300&q=80"],
  ["Calligraphy", "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=300&q=80"],
  ["Decorative Art", "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=300&q=80"],
  ["Mixed Media", "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=300&q=80"],
];

const featuredArt = [
  ["Golden Hour", "Painting • Landscape", "₹12,000", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"],
  ["The Silent Guardian", "Sculpture • Stone", "₹18,500", "https://images.unsplash.com/photo-1544413164-5f1b3f0f1c5a?auto=format&fit=crop&w=700&q=85"],
  ["Ocean Whispers", "Painting • Landscape", "₹9,500", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85"],
  ["Mountain Retreat", "Painting • Landscape", "₹15,000", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85"],
];

const artists = [
  ["Aaradhya Sharma", "Sculptor", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"],
  ["Rohan Mehta", "Painter", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"],
  ["Isha Verma", "Digital Artist", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80"],
  ["Kabir Singh", "Photographer", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80"],
];

function Header() {
  const location = useLocation();

  return (
    <>
      <header className="an-navbar">
        <Link to="/" className="an-brand" aria-label="ArtNest home">
          <span className="an-brand-mark">✦</span>
          <span>ArtNest</span>
        </Link>

        <nav className="an-nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={location.pathname === link.path ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="an-actions">
          <button className="an-icon-button" aria-label="Search" type="button">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </button>
          <Link className="an-icon-button an-badge-wrap" to="/wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2a4.8 4.8 0 0 1 4.8 4.8Z" /></svg>
            <span className="an-badge">3</span>
          </Link>
          <Link className="an-icon-button an-badge-wrap" to="/cart" aria-label="Cart">
            <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
            <span className="an-badge">2</span>
          </Link>
          <span className="an-divider" />
          <Link className="an-profile" to="/profile" aria-label="Profile">AN</Link>
        </div>
      </header>

      <div className="an-announcement">
        <span className="an-verified">✦</span>
        <strong>SPRING VERNISSAGE 2026</strong>
        <span className="an-announcement-divider">|</span>
        <span className="an-announcement-copy">Over 120 newly curated original sculptures and gallery canvases added this week</span>
        <Link to="/curated-collections">Explore Catalogue <span>→</span></Link>
      </div>
    </>
  );
}

function Home() {
  return (
    <main className="an-home">
      <section className="an-hero">
        <img className="an-hero-image" src={heroImg} alt="Original art in an artist studio" />
        <div className="an-hero-overlay" />
        <div className="an-hero-content">
          <span className="an-hero-kicker">ARTNEST ORIGINALS</span>
          <h1>A marketplace for<br /><em>original art, sculptures &amp;<br />handmade creations.</em></h1>
          <p>Discover unique artworks, connect directly with independent artists and bring something meaningful home.</p>
          <div className="an-search">
            <input aria-label="Search artworks" placeholder="Search for artworks, artists, or collections..." />
            <button type="button" aria-label="Search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="an-section an-category-section">
        <div className="an-heading-row">
          <div>
            <span className="an-eyebrow">EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>
          <Link to="/discover" className="an-view-link">View all →</Link>
        </div>
        <div className="an-category-grid">
          {categories.map(([name, image]) => (
            <Link to="/discover" className="an-category" key={name}>
              <div className="an-category-image"><img src={image} alt="" loading="lazy" /></div>
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="an-section">
        <div className="an-heading-row">
          <div>
            <span className="an-eyebrow">CURATED FOR YOU</span>
            <h2>Featured Artworks</h2>
          </div>
          <Link to="/sculptures" className="an-view-link">View all →</Link>
        </div>
        <div className="an-art-grid">
          {featuredArt.map(([name, meta, price, image]) => (
            <Link to="/sculptures" className="an-artwork-card" key={name}>
              <div className="an-artwork-image"><img src={image} alt={name} loading="lazy" /></div>
              <div className="an-artwork-info">
                <h3>{name}</h3>
                <span>{meta}</span>
                <strong>{price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="an-section an-artists-section">
        <div className="an-heading-row">
          <div>
            <span className="an-eyebrow">MEET THE MAKERS</span>
            <h2>Featured Artists</h2>
          </div>
          <Link to="/artists" className="an-view-link">View all →</Link>
        </div>
        <div className="an-artists-grid">
          {artists.map(([name, role, image]) => (
            <Link to="/artist/1" className="an-artist-card" key={name}>
              <img src={image} alt={name} loading="lazy" />
              <strong>{name}</strong>
              <span>{role}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="an-custom-cta">
        <div>
          <span className="an-eyebrow">CREATE SOMETHING PERSONAL</span>
          <h2>Own a custom piece.</h2>
          <p>Share your idea and let an independent artist turn it into an original work made especially for you.</p>
          <Link to="/custom-art" className="an-cta-button">Request Custom Art <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}

function Discover() {
  return (
    <main className="an-simple-page">
      <span className="an-eyebrow">DISCOVER</span>
      <h1>Explore the ArtNest collection.</h1>
      <p>Browse artists, sculptures and curated collections.</p>
      <div className="an-home-grid">
        <Link to="/artists" className="an-feature-card"><span>01</span><h3>Artists</h3><p>Explore independent artists and their selected works.</p></Link>
        <Link to="/sculptures" className="an-feature-card"><span>02</span><h3>Sculptures</h3><p>Discover original sculptures.</p></Link>
        <Link to="/curated-collections" className="an-feature-card"><span>03</span><h3>Curated Collections</h3><p>Browse themed collections.</p></Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/curated-collections" element={<Collections />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artist/:id" element={<ArtistDetails />} />
        <Route path="/custom-art" element={<CustomArt />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
