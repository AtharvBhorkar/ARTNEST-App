import { useState } from "react";
import { Link } from "react-router-dom";

const portfolio = [
  {
    no: "01",
    title: "The Silent Guardian",
    type: "Stone Sculpture",
    price: "₹18,500",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    no: "02",
    title: "Eternal Flow",
    type: "Wood Art",
    price: "₹24,000",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=90",
  },
  {
    no: "03",
    title: "Natural Harmony",
    type: "Abstract",
    price: "₹16,000",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=90",
  },
  {
    no: "04",
    title: "The Thinking Man",
    type: "Figurative",
    price: "₹21,500",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=90",
  },
];

const specialties = [
  {
    no: "01",
    title: "Stone Sculpture",
    image: portfolio[0].image,
  },
  {
    no: "02",
    title: "Wood Art",
    image: portfolio[1].image,
  },
  {
    no: "03",
    title: "Abstract",
    image: portfolio[2].image,
  },
  {
    no: "04",
    title: "Figurative",
    image: portfolio[3].image,
  },
];

const portrait =
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=90";

function ArtImage({ src, alt, className = "" }) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() =>
        setCurrent(
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85"
        )
      }
    />
  );
}

export default function ArtistDetails() {
  const [following, setFollowing] = useState(false);
  const [saved, setSaved] = useState({});
  const [message, setMessage] = useState("");

  const notify = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 1800);
  };

  return (
    <main className="artist-detail-page">
      <style>{`
        .artist-detail-page{
          --paper:#f7f3ed;
          --ink:#211d19;
          --muted:#75675e;
          --line:#ded4ca;
          --accent:#a65d3d;
          background:var(--paper);
          color:var(--ink);
          min-height:100vh;
          font-family:Inter,"Segoe UI",Arial,sans-serif;
          overflow:hidden;
        }
        .artist-detail-page *{box-sizing:border-box}
        .artist-detail-page button{font:inherit}
        .artist-container{width:min(1480px,100%);margin:auto}

        .artist-crumb{
          padding:18px 5.8%;
          color:#806f64;
          font-size:13px;
          background:var(--paper);
        }
        .artist-crumb b{color:var(--ink)}

        /* HERO */
        .artist-hero{
          position:relative;
          height:500px;
          margin:0 3%;
          overflow:hidden;
          background:#29231f;
          box-shadow:0 20px 50px rgba(38,28,20,.08);
        }
        .artist-hero-image{
          width:100%;
          height:100%;
          display:block;
          object-fit:cover;
          object-position:center 48%;
          transform:scale(1.01);
          transition:transform 1s ease;
        }
        .artist-hero:hover .artist-hero-image{transform:scale(1.035)}
        .artist-hero:after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg,rgba(20,15,12,.82) 0%,rgba(20,15,12,.48) 48%,rgba(20,15,12,.08) 100%),
            linear-gradient(0deg,rgba(20,15,12,.58),transparent 55%);
          pointer-events:none;
        }
        .hero-content{
          position:absolute;
          z-index:2;
          left:7%;
          bottom:66px;
          color:white;
          max-width:800px;
        }
        .hero-kicker{
          display:flex;
          align-items:center;
          gap:14px;
          font-size:11px;
          letter-spacing:4px;
          font-weight:700;
          margin-bottom:18px;
        }
        .hero-kicker span:last-child:before{
          content:"";
          display:inline-block;
          width:4px;
          height:4px;
          border-radius:50%;
          background:#c98762;
          margin-right:14px;
          vertical-align:middle;
        }
        .hero-title{
          font-family:Georgia,"Times New Roman",serif;
          font-weight:400;
          font-size:clamp(54px,6vw,82px);
          line-height:.96;
          letter-spacing:-2px;
          margin:0 0 22px;
        }
        .hero-description{
          margin:0;
          font-size:16px;
          line-height:1.7;
          max-width:570px;
          color:#f6eee8;
        }
        .hero-badge{
          position:absolute;
          z-index:3;
          top:34px;
          right:34px;
          background:#fff;
          color:var(--ink);
          padding:18px 24px;
          min-width:220px;
          box-shadow:0 18px 45px rgba(0,0,0,.18);
        }
        .hero-badge strong{display:block;font-size:15px;margin-bottom:5px}
        .hero-badge span{font-size:12px;color:#88786d}

        /* PROFILE */
        .artist-profile{
          background:#fff;
          min-height:190px;
          padding:0 7%;
          display:flex;
          align-items:center;
          gap:28px;
        }
        .artist-avatar-wrap{
          flex:0 0 148px;
          margin-top:-78px;
          position:relative;
          z-index:4;
        }
        .artist-avatar{
          width:148px;
          height:148px;
          display:block;
          border-radius:50%;
          object-fit:cover;
          object-position:center top;
          border:8px solid #fff;
          box-shadow:0 14px 35px rgba(38,28,20,.2);
        }
        .verified{
          position:absolute;
          right:3px;
          bottom:8px;
          width:30px;
          height:30px;
          border-radius:50%;
          background:#25211e;
          color:#fff;
          border:3px solid #fff;
          display:grid;
          place-items:center;
          font-size:12px;
        }
        .profile-copy{flex:1;min-width:0}
        .profile-meta{color:var(--accent);font-size:15px;margin-bottom:8px}
        .profile-name{
          font-family:Georgia,"Times New Roman",serif;
          font-size:36px;
          font-weight:400;
          margin:0 0 17px;
        }
        .profile-stats{display:flex}
        .profile-stat{
          min-width:110px;
          padding:0 25px;
          border-left:1px solid var(--line);
        }
        .profile-stat:first-child{padding-left:0;border-left:0}
        .profile-stat strong{
          display:block;
          font-family:Georgia,serif;
          font-weight:400;
          font-size:25px;
        }
        .profile-stat small{
          color:#8d7c71;
          font-size:9px;
          letter-spacing:2px;
        }
        .profile-actions{display:flex;gap:10px}
        .follow-btn,.share-btn{
          height:48px;
          cursor:pointer;
          border:1px solid var(--ink);
        }
        .follow-btn{
          background:var(--ink);
          color:#fff;
          padding:0 30px;
        }
        .follow-btn:hover{background:#3a312b}
        .share-btn{
          width:48px;
          background:#fff;
          color:var(--ink);
        }

        /* TABS */
        .artist-tabs{
          height:68px;
          padding:0 7%;
          background:#fff;
          border-top:1px solid #e8dfd7;
          border-bottom:1px solid #e2d8cf;
          display:flex;
          align-items:stretch;
          gap:42px;
        }
        .artist-tabs button{
          position:relative;
          border:0;
          background:none;
          color:#776960;
          cursor:pointer;
          font-size:14px;
        }
        .artist-tabs button.active{color:var(--ink);font-weight:700}
        .artist-tabs button.active:after{
          content:"";
          position:absolute;
          left:0;
          right:0;
          bottom:0;
          height:2px;
          background:var(--ink);
        }

        /* SHARED SECTIONS */
        .artist-section{padding:96px 7%}
        .section-layout{
          display:grid;
          grid-template-columns:74px minmax(0,1fr);
          column-gap:28px;
          align-items:start;
        }
        .section-number{
          padding-top:7px;
          color:var(--accent);
          font-size:11px;
          letter-spacing:2px;
          font-weight:600;
        }
        .section-content{min-width:0}
        .section-eyebrow{
          color:var(--accent);
          font-size:11px;
          font-weight:700;
          letter-spacing:4px;
        }
        .section-title{
          font-family:Georgia,"Times New Roman",serif;
          font-weight:400;
          font-size:clamp(46px,5vw,68px);
          line-height:1;
          letter-spacing:-1.5px;
          margin:12px 0 42px;
        }

        /* STORY */
        .story-layout{
          display:grid;
          grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);
          gap:90px;
          align-items:start;
        }
        .story-lead{
          font-family:Georgia,serif;
          font-size:25px;
          line-height:1.72;
          color:#62564e;
          max-width:790px;
          margin:0;
        }
        .story-copy{
          color:#7b6c62;
          font-size:15px;
          line-height:1.9;
          max-width:760px;
          margin:28px 0 0;
        }
        .artist-details{
          border-top:1px solid var(--line);
        }
        .details-heading{
          padding:22px 0 17px;
          color:var(--accent);
          font-size:10px;
          font-weight:700;
          letter-spacing:4px;
        }
        .detail-row{
          min-height:63px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:25px;
          border-top:1px solid var(--line);
          font-size:14px;
        }
        .detail-row span{color:#8a7a70}
        .detail-row strong{font-size:14px}

        /* SPECIALTIES */
        .practice-section{padding-top:20px}
        .specialty-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:18px;
        }
        .specialty{
          height:300px;
          position:relative;
          overflow:hidden;
          background:#d7cec5;
          border:1px solid #ddd2c8;
          box-shadow:0 12px 35px rgba(50,35,25,.06);
          transform-style:preserve-3d;
          transition:transform .35s ease,box-shadow .35s ease;
        }
        .specialty:hover{
          transform:translateY(-8px) rotateX(2deg) rotateY(-2deg);
          box-shadow:0 22px 45px rgba(50,35,25,.16);
        }
        .specialty img{
          width:100%;
          height:100%;
          display:block;
          object-fit:cover;
          transition:transform .6s ease;
        }
        .specialty:hover img{transform:scale(1.06)}
        .specialty:after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(180deg,transparent 35%,rgba(12,9,7,.8));
        }
        .specialty-no{
          position:absolute;
          z-index:2;
          top:18px;
          left:20px;
          color:#fff;
          font-size:11px;
          letter-spacing:2px;
        }
        .specialty-title{
          position:absolute;
          z-index:2;
          left:20px;
          bottom:22px;
          color:#fff;
          font-family:Georgia,serif;
          font-size:27px;
        }

        /* PORTFOLIO */
        .portfolio-section{padding-top:70px}
        .portfolio-heading{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:30px;
        }
        .view-all{
          color:var(--ink);
          text-decoration:none;
          border-bottom:1px solid var(--ink);
          padding-bottom:8px;
          margin-bottom:45px;
          font-size:14px;
        }
        .portfolio-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:18px;
        }
        .portfolio-card{
          background:#fff;
          border:1px solid #dfd5cc;
          overflow:hidden;
          box-shadow:0 8px 25px rgba(50,35,25,.04);
          transition:transform .35s ease,box-shadow .35s ease;
        }
        .portfolio-card:hover{
          transform:translateY(-7px);
          box-shadow:0 20px 45px rgba(50,35,25,.12);
        }
        .portfolio-image{
          height:370px;
          position:relative;
          overflow:hidden;
          background:#ddd;
        }
        .portfolio-image img{
          width:100%;
          height:100%;
          display:block;
          object-fit:cover;
          transition:transform .6s ease;
        }
        .portfolio-card:hover .portfolio-image img{transform:scale(1.05)}
        .portfolio-number{
          position:absolute;
          z-index:2;
          top:17px;
          left:18px;
          color:#fff;
          font-size:11px;
          letter-spacing:2px;
          text-shadow:0 1px 5px #000;
        }
        .heart-btn{
          position:absolute;
          z-index:3;
          top:14px;
          right:14px;
          width:44px;
          height:44px;
          border:0;
          border-radius:50%;
          background:rgba(255,255,255,.96);
          cursor:pointer;
          font-size:20px;
          transition:transform .2s;
        }
        .heart-btn:hover{transform:scale(1.08)}
        .portfolio-info{padding:20px}
        .portfolio-type{
          color:var(--accent);
          font-size:10px;
          letter-spacing:3px;
          font-weight:600;
        }
        .portfolio-title-row{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:12px;
          margin-top:9px;
        }
        .portfolio-title{
          font-family:Georgia,serif;
          font-size:21px;
          line-height:1.15;
        }
        .portfolio-price{font-weight:700;font-size:14px;white-space:nowrap}
        .portfolio-bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
          margin-top:25px;
        }
        .portfolio-bottom span{font-size:11px;color:#9a8a80}
        .cart-button{
          border:1px solid #d6cbc1;
          background:#fff;
          color:var(--ink);
          padding:10px 14px;
          cursor:pointer;
          transition:background .2s,color .2s;
        }
        .cart-button:hover{background:var(--ink);color:#fff}

        /* CTA */
        .artist-cta{
          margin-top:25px;
          background:#27231f;
          color:#fff;
          padding:75px 7%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:35px;
        }
        .artist-cta .section-eyebrow{color:#cb8a67}
        .cta-title{
          font-family:Georgia,serif;
          font-weight:400;
          font-size:clamp(38px,4vw,56px);
          line-height:1.05;
          margin:12px 0;
        }
        .cta-copy{color:#c7b7ac;margin:0}
        .cta-link{
          flex:0 0 auto;
          padding:19px 25px;
          background:#fff;
          color:var(--ink);
          text-decoration:none;
          transition:transform .2s;
        }
        .cta-link:hover{transform:translateY(-3px)}

        .toast{
          position:fixed;
          z-index:100;
          right:24px;
          bottom:24px;
          background:#211d19;
          color:#fff;
          padding:14px 20px;
          box-shadow:0 15px 40px rgba(0,0,0,.25);
          animation:toastIn .25s ease;
        }
        @keyframes toastIn{
          from{opacity:0;transform:translateY(10px)}
          to{opacity:1;transform:none}
        }

        @media(max-width:1000px){
          .artist-profile{padding:25px 5%;flex-wrap:wrap}
          .artist-avatar-wrap{margin-top:-75px}
          .story-layout{grid-template-columns:1fr;gap:45px}
          .specialty-grid,.portfolio-grid{grid-template-columns:repeat(2,1fr)}
          .artist-section{padding:75px 5%}
          .artist-tabs{padding:0 5%}
        }
        @media(max-width:650px){
          .artist-hero{height:440px;margin:0}
          .hero-content{left:7%;right:7%;bottom:48px}
          .hero-title{font-size:48px;letter-spacing:-1px}
          .hero-badge{display:none}
          .artist-profile{gap:15px}
          .artist-avatar-wrap{flex-basis:112px}
          .artist-avatar{width:112px;height:112px}
          .profile-copy{min-width:calc(100% - 130px)}
          .profile-name{font-size:28px}
          .profile-stats{flex-wrap:wrap;gap:15px}
          .profile-stat{min-width:auto;padding:0 14px}
          .profile-actions{width:100%}
          .follow-btn{flex:1}
          .artist-tabs{gap:24px;overflow:auto}
          .section-layout{grid-template-columns:1fr}
          .section-number{padding:0;margin-bottom:8px}
          .section-title{font-size:45px;margin-bottom:30px}
          .specialty-grid,.portfolio-grid{grid-template-columns:1fr}
          .portfolio-image{height:350px}
          .portfolio-heading{display:block}
          .view-all{display:inline-block;margin-bottom:30px}
          .artist-cta{display:block;padding:60px 7%}
          .cta-link{display:inline-block;margin-top:25px}
        }
      `}</style>

      <div className="artist-container">
        <div className="artist-crumb">
          Home &nbsp;/&nbsp; Artists &nbsp;/&nbsp; <b>Aaradhya Sharma</b>
        </div>

        <section className="artist-hero">
          <ArtImage
            src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1800&q=90"
            alt="Sculptural artwork"
            className="artist-hero-image"
          />

          <div className="hero-content">
            <div className="hero-kicker">
              <span>ORIGINAL ART</span>
              <span>INDEPENDENT ARTIST</span>
            </div>
            <h1 className="hero-title">Aaradhya Sharma</h1>
            <p className="hero-description">
              Original works created with craftsmanship, emotion and intention.
            </p>
          </div>

          <div className="hero-badge">
            <strong>✦ &nbsp; Original Art</strong>
            <span>One-of-a-kind pieces</span>
          </div>
        </section>

        <section className="artist-profile">
          <div className="artist-avatar-wrap">
            <ArtImage src={portrait} alt="Aaradhya Sharma portrait" className="artist-avatar" />
            <span className="verified">✓</span>
          </div>

          <div className="profile-copy">
            <div className="profile-meta">Sculptor &nbsp;•&nbsp; New Delhi, India</div>
            <h2 className="profile-name">Aaradhya Sharma</h2>

            <div className="profile-stats">
              <div className="profile-stat"><strong>124</strong><small>FOLLOWERS</small></div>
              <div className="profile-stat"><strong>12</strong><small>FOLLOWING</small></div>
              <div className="profile-stat"><strong>4.8</strong><small>RATING</small></div>
              <div className="profile-stat"><strong>4</strong><small>ARTWORKS</small></div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="follow-btn" onClick={() => setFollowing(!following)}>
              {following ? "✓ Following" : "+ Follow"}
            </button>
            <button
              className="share-btn"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                notify("Profile link copied");
              }}
              aria-label="Share profile"
            >
              ↗
            </button>
          </div>
        </section>

        <nav className="artist-tabs" aria-label="Artist sections">
          <button className="active">About</button>
          <button onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
            Portfolio 4
          </button>
          <button onClick={() => document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" })}>
            Collections
          </button>
          <button>Reviews</button>
        </nav>

        <section className="artist-section">
          <div className="section-layout">
            <div className="section-number">01</div>

            <div className="section-content">
              <div className="section-eyebrow">THE STORY</div>

              <div className="story-layout">
                <div>
                  <h2 className="section-title">About the Artist</h2>
                  <p className="story-lead">
                    I am a sculptor based in New Delhi, inspired by nature, human
                    emotions and the beauty of imperfect forms. My work explores the
                    relationship between people, memories and the spaces around us.
                  </p>
                  <p className="story-copy">
                    Every piece is developed with a focus on material, proportion and
                    emotion. The goal is not simply to create something beautiful, but
                    something that becomes meaningful to the person who owns it.
                  </p>
                </div>

                <div className="artist-details">
                  <div className="details-heading">ARTIST DETAILS</div>
                  <div className="detail-row"><span>Specialization</span><strong>Sculptor</strong></div>
                  <div className="detail-row"><span>Based in</span><strong>New Delhi, India</strong></div>
                  <div className="detail-row"><span>Available works</span><strong>4 artworks</strong></div>
                  <div className="detail-row"><span>Member since</span><strong>2024</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specialties" className="artist-section practice-section">
          <div className="section-layout">
            <div className="section-number">02</div>

            <div className="section-content">
              <div className="section-eyebrow">CREATIVE PRACTICE</div>
              <h2 className="section-title">Specialties</h2>

              <div className="specialty-grid">
                {specialties.map((item) => (
                  <article className="specialty" key={item.no}>
                    <ArtImage src={item.image} alt={item.title} />
                    <span className="specialty-no">{item.no}</span>
                    <span className="specialty-title">{item.title}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="artist-section portfolio-section">
          <div className="section-layout">
            <div className="section-number">03</div>

            <div className="section-content">
              <div className="portfolio-heading">
                <div>
                  <div className="section-eyebrow">SELECTED WORKS</div>
                  <h2 className="section-title">Portfolio</h2>
                </div>
                <a className="view-all" href="#portfolio">View all artwork&nbsp; →</a>
              </div>

              <div className="portfolio-grid">
                {portfolio.map((art) => (
                  <article className="portfolio-card" key={art.no}>
                    <div className="portfolio-image">
                      <ArtImage src={art.image} alt={art.title} />
                      <span className="portfolio-number">{art.no}</span>

                      <button
                        className="heart-btn"
                        onClick={() => {
                          setSaved((old) => ({ ...old, [art.no]: !old[art.no] }));
                          notify(saved[art.no] ? "Removed from wishlist" : "Saved to wishlist");
                        }}
                        aria-label={`Save ${art.title}`}
                      >
                        {saved[art.no] ? "♥" : "♡"}
                      </button>
                    </div>

                    <div className="portfolio-info">
                      <div className="portfolio-type">{art.type}</div>

                      <div className="portfolio-title-row">
                        <div className="portfolio-title">{art.title}</div>
                        <div className="portfolio-price">{art.price}</div>
                      </div>

                      <div className="portfolio-bottom">
                        <span>Original artwork</span>
                        <button className="cart-button" onClick={() => notify(`${art.title} added to cart`)}>
                          Add to Cart&nbsp; +
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="artist-cta">
          <div>
            <div className="section-eyebrow">WORK WITH THE ARTIST</div>
            <h2 className="cta-title">Have an idea for a custom piece?</h2>
            <p className="cta-copy">
              Bring your vision to life with a personalized artwork created by Aaradhya Sharma.
            </p>
          </div>
          <Link className="cta-link" to="/custom-art">
            Request Custom Artwork ↗
          </Link>
        </section>
      </div>

      {message && <div className="toast">{message}</div>}
    </main>
  );
}
