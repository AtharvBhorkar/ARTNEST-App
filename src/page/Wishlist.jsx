import { useState } from "react";

const FALLBACK =
  "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=90";

const initialItems = [
  {
    id: 1,
    title: "Golden Silence",
    artist: "Elena Rostova",
    price: 18500,
    category: "Sculpture",
    tag: "One-of-a-kind",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    title: "Urban Dreams",
    artist: "Marcus Chen",
    price: 24000,
    category: "Painting",
    tag: "Original Artwork",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    title: "Ocean Memories",
    artist: "Sarah Wilson",
    price: 15800,
    category: "Fine Art",
    tag: "Handcrafted",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90",
  },
];

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const css = `
.wishlist-page {
  --cream: #f7f3ed;
  --paper: #fffdf9;
  --ink: #211d19;
  --muted: #796f67;
  --accent: #a65e3d;
  --accent-soft: #ead9c9;
  --line: #ded5ca;

  min-height: calc(100vh - 130px);
  background:
    radial-gradient(circle at 92% 8%, rgba(231,210,191,.42), transparent 22%),
    radial-gradient(circle at 4% 92%, rgba(226,205,186,.32), transparent 20%),
    var(--cream);

  color: var(--ink);
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}

.wishlist-page *,
.wishlist-page *::before,
.wishlist-page *::after {
  box-sizing: border-box;
}

.wishlist-wrap {
  width: min(1380px, calc(100% - 96px));
  margin: 0 auto;
  padding: 64px 0 80px;
}

/* ---------- HEADER ---------- */

.wishlist-heading {
  position: relative;
  min-height: 185px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 34px;
  overflow: hidden;
}

.wishlist-heading::after {
  content: "";
  position: absolute;
  right: -80px;
  top: -30px;
  width: 470px;
  height: 190px;
  opacity: .35;
  background:
    linear-gradient(
      135deg,
      transparent 15%,
      rgba(187,143,109,.18) 16%,
      rgba(187,143,109,.18) 35%,
      transparent 36%
    ),
    linear-gradient(
      155deg,
      transparent 32%,
      rgba(174,126,91,.13) 33%,
      rgba(174,126,91,.13) 53%,
      transparent 54%
    );
  transform: rotate(-4deg);
  pointer-events: none;
}

.wishlist-kicker {
  position: relative;
  z-index: 1;
  color: var(--accent);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.wishlist-heading h1 {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 5vw, 70px);
  font-weight: 400;
  letter-spacing: -2.5px;
  line-height: .98;
}

.wishlist-heading p {
  position: relative;
  z-index: 1;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 15px;
}

.wishlist-quote {
  position: relative;
  z-index: 2;
  width: 350px;
  padding: 20px 0 12px;
  margin-right: 20px;
}

.wishlist-quote-text {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20px;
  font-style: italic;
  line-height: 1.45;
  color: #4d423a;
}

.wishlist-quote-author {
  display: block;
  margin-top: 9px;
  color: #9a8474;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.wishlist-count {
  position: absolute;
  right: 0;
  bottom: 34px;
  border: 1px solid var(--line);
  background: rgba(255,253,249,.9);
  padding: 13px 19px;
  color: #5f5148;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
}

/* ---------- GRID ---------- */

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

/* ---------- CARD ---------- */

.wishlist-card {
  background: var(--paper);
  border: 1px solid var(--line);
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(45, 34, 25, .05);
  transition:
    transform .4s cubic-bezier(.2,.8,.2,1),
    box-shadow .4s ease;
}

.wishlist-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(45, 34, 25, .13);
}

/* ---------- IMAGE ---------- */

.wishlist-image {
  position: relative;
  height: 355px;
  overflow: hidden;
  background: #ddd2c7;
}

.wishlist-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0,0,0,.16),
      transparent 25%,
      transparent 65%,
      rgba(0,0,0,.28)
    );
  pointer-events: none;
}

.wishlist-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform .8s cubic-bezier(.2,.8,.2,1),
    filter .5s ease;
}

.wishlist-card:hover .wishlist-image img {
  transform: scale(1.06);
  filter: saturate(1.06);
}

.wishlist-number {
  position: absolute;
  z-index: 2;
  left: 17px;
  top: 17px;
  width: 35px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  background: rgba(31, 27, 24, .38);
  backdrop-filter: blur(5px);
}

.wishlist-tag {
  position: absolute;
  z-index: 2;
  left: 17px;
  bottom: 17px;
  padding: 8px 12px;
  color: white;
  background: rgba(30,25,22,.68);
  backdrop-filter: blur(6px);
  font-family: Georgia, serif;
  font-size: 13px;
}

.wishlist-heart {
  position: absolute;
  z-index: 3;
  top: 15px;
  right: 15px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  background: rgba(255,255,255,.94);
  color: #28211d;

  font-size: 19px;
  cursor: pointer;

  box-shadow: 0 6px 18px rgba(0,0,0,.13);

  transition:
    transform .25s ease,
    color .25s ease,
    background .25s ease;
}

.wishlist-heart:hover {
  transform: scale(1.1);
  color: #a4472f;
  background: white;
}

/* ---------- CONTENT ---------- */

.wishlist-content {
  padding: 21px 21px 18px;
}

.wishlist-category {
  color: #a56a4d;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

.wishlist-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  margin-top: 8px;
}

.wishlist-title {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.12;
}

.wishlist-price {
  white-space: nowrap;
  color: #17130f;
  font-size: 15px;
  font-weight: 700;
}

.wishlist-artist {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 11px;
  color: var(--muted);
  font-size: 13px;
}

.artist-dot {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background:
    linear-gradient(135deg, #ead9ca, #9b765f);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Georgia, serif;
  font-size: 11px;
}

.wishlist-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  margin-top: 19px;
  padding-top: 16px;

  border-top: 1px solid #eee7df;
}

.wishlist-add {
  border: 0;
  background: var(--ink);
  color: white;
  padding: 12px 20px;
  min-width: 120px;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background .25s ease,
    transform .25s ease;
}

.wishlist-add:hover {
  background: var(--accent);
  transform: translateY(-2px);
}

.wishlist-remove {
  border: 1px solid var(--line);
  background: transparent;
  color: #5e534b;
  padding: 11px 16px;

  font-size: 10px;
  cursor: pointer;

  transition: all .25s ease;
}

.wishlist-remove:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ---------- TRUST STRIP ---------- */

.wishlist-trust {
  margin-top: 38px;
  padding: 22px 34px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  background: rgba(255,253,249,.72);
  border: 1px solid #e7ded3;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.trust-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d8cabc;
  border-radius: 50%;

  font-size: 19px;
  color: var(--accent);
  background: #fffaf4;
}

.trust-title {
  display: block;
  font-family: Georgia, serif;
  font-size: 16px;
  margin-bottom: 3px;
}

.trust-copy {
  color: var(--muted);
  font-size: 11px;
}

/* ---------- EMPTY ---------- */

.wishlist-empty {
  padding: 100px 30px;
  text-align: center;
  background: var(--paper);
  border: 1px solid var(--line);
}

.wishlist-empty h2 {
  margin: 0 0 10px;
  font-family: Georgia, serif;
  font-size: 42px;
  font-weight: 400;
}

.wishlist-empty p {
  color: var(--muted);
}

.wishlist-empty button {
  margin-top: 20px;
  padding: 13px 22px;
  border: 0;
  background: var(--ink);
  color: white;
  cursor: pointer;
}

/* ---------- RESPONSIVE ---------- */

@media (max-width: 1100px) {
  .wishlist-wrap {
    width: min(100% - 50px, 900px);
  }

  .wishlist-heading {
    display: block;
    padding-bottom: 115px;
  }

  .wishlist-quote {
    display: none;
  }

  .wishlist-grid {
    grid-template-columns: 1fr 1fr;
  }

  .wishlist-count {
    left: 0;
    right: auto;
  }
}

@media (max-width: 700px) {
  .wishlist-wrap {
    width: calc(100% - 28px);
    padding-top: 42px;
  }

  .wishlist-heading h1 {
    font-size: 48px;
  }

  .wishlist-grid {
    grid-template-columns: 1fr;
  }

  .wishlist-image {
    height: 330px;
  }

  .wishlist-trust {
    grid-template-columns: 1fr;
  }
}
`;

export default function Wishlist() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    alert(`${item.title} has been added to your cart.`);
  };

  return (
    <div className="wishlist-page">
      <style>{css}</style>

      <main className="wishlist-wrap">

        {/* HEADER */}
        <section className="wishlist-heading">
          <div>
            <div className="wishlist-kicker">
              YOUR COLLECTION
            </div>

            <h1>My Wishlist</h1>

            <p>
              Keep the artworks that caught your eye close at hand.
            </p>
          </div>

          <div className="wishlist-quote">
            <div className="wishlist-quote-text">
              “Art is not what you see, but what you want to keep.”
            </div>

            <span className="wishlist-quote-author">
              — ARTNEST
            </span>
          </div>

          <div className="wishlist-count">
            {items.length} {items.length === 1 ? "ARTWORK" : "ARTWORKS"}
          </div>
        </section>

        {/* ARTWORK GRID */}
        {items.length > 0 ? (
          <>
            <section className="wishlist-grid">

              {items.map((item, index) => (
                <article
                  className="wishlist-card"
                  key={item.id}
                >

                  <div className="wishlist-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="eager"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK;
                      }}
                    />

                    <span className="wishlist-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <button
                      className="wishlist-heart"
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      ♥
                    </button>

                    <span className="wishlist-tag">
                      {item.tag}
                    </span>

                  </div>

                  <div className="wishlist-content">

                    <div className="wishlist-category">
                      {item.category}
                    </div>

                    <div className="wishlist-title-row">

                      <h2 className="wishlist-title">
                        {item.title}
                      </h2>

                      <span className="wishlist-price">
                        {money(item.price)}
                      </span>

                    </div>

                    <div className="wishlist-artist">
                      <span className="artist-dot">
                        {item.artist.charAt(0)}
                      </span>

                      <span>
                        {item.artist}
                      </span>
                    </div>

                    <div className="wishlist-actions">

                      <button
                        className="wishlist-add"
                        type="button"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>

                      <button
                        className="wishlist-remove"
                        type="button"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </section>

            {/* TRUST STRIP */}
            <section className="wishlist-trust">

              <div className="trust-item">
                <div className="trust-icon">✓</div>

                <div>
                  <span className="trust-title">
                    Curated & Authentic
                  </span>

                  <span className="trust-copy">
                    Verified original artworks
                  </span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon">↗</div>

                <div>
                  <span className="trust-title">
                    Insured Worldwide Shipping
                  </span>

                  <span className="trust-copy">
                    Safe delivery to your doorstep
                  </span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon">♡</div>

                <div>
                  <span className="trust-title">
                    Support Independent Artists
                  </span>

                  <span className="trust-copy">
                    Direct from creators to collectors
                  </span>
                </div>
              </div>

            </section>
          </>
        ) : (

          /* EMPTY STATE */
          <section className="wishlist-empty">

            <h2>
              Your wishlist is waiting.
            </h2>

            <p>
              Save artwork you love and come back to it whenever you're ready.
            </p>

            <button
              type="button"
              onClick={() => window.history.back()}
            >
              Continue Exploring
            </button>

          </section>
        )}

      </main>
    </div>
  );
}