import React, { useState } from "react";
import { Heart, BadgeCheck, X } from "lucide-react";

function ArtWorkCard({ artwork, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(artwork);
    }
  };

  return (
    <>
      <article className="artwork-card group overflow-hidden rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]">

        {/* Image Section */}
        <div className="artwork-card-media">

          <img
            src={artwork.image}
            alt={artwork.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          {/* Heart */}
          <button
            type="button"
            aria-label={`${isFavorite ? 'Remove' : 'Add'} ${artwork.title} ${isFavorite ? 'from' : 'to'} wishlist`}
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((favorite) => !favorite)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#8b8177] shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#a95436]"
          >
            <Heart
              size={17}
              fill={isFavorite ? 'currentColor' : 'none'}
              strokeWidth={1.7}
            />
          </button>

        </div>

        {/* Content */}
        <div className="artwork-card-content">

          <span className="artwork-card-label">{artwork.badge}</span>

          {/* Title + Price */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <h3 className="font-serif text-[19px] leading-[1.15] text-[#171717]">
                {artwork.title}
              </h3>

              <p className="text-[12px] text-[#746b65]">
                {artwork.artist}
              </p>

            </div>

            <p className="shrink-0 pt-1 text-[15px] font-medium text-[#a34f32]">
              {artwork.price}
            </p>

          </div>

          {/* Medium */}
          <p className="text-[11px] text-[#837a73]">
            {artwork.medium}

            <span className="mx-1">
              •
            </span>

            {artwork.size}
          </p>

          {/* Bottom Details */}
          <div className="flex items-center justify-between gap-2 border-t border-[#eee8e2] pt-3">

            <div className="flex min-w-0 items-center gap-1.5 text-[10px] font-medium text-[#a34f32]">

              <BadgeCheck
                size={12}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="truncate">
                {artwork.detail}
              </span>

            </div>

            <span className="shrink-0 text-[10px] text-[#918984]">
              {artwork.location}
            </span>

          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex-1 rounded-lg border border-[#e9dacc] bg-[#f7efe9] px-3 py-2 text-[11px] font-semibold text-[#4b342d] transition hover:bg-[#f1e2d4]"
            >
              View Artwork
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 rounded-lg bg-[#a65335] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#8f4b2d]"
            >
              Add to Cart
            </button>
          </div>

        </div>

      </article>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1a17]/55 p-4 backdrop-blur-[2px]" onClick={() => setIsOpen(false)}>
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <img src={artwork.image} alt={artwork.title} className="h-72 w-full object-cover" />
              <button
                type="button"
                aria-label="Close artwork detail"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#3d2c26] shadow-sm"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="artwork-card-label">{artwork.badge}</span>
                  <h3 className="mt-3 font-serif text-3xl text-[#171717]">{artwork.title}</h3>
                  <p className="mt-1 text-sm text-[#746b65]">{artwork.artist}</p>
                </div>
                <p className="text-xl font-semibold text-[#a34f32]">{artwork.price}</p>
              </div>

              <p className="text-sm leading-6 text-[#564d48]">{artwork.medium} · {artwork.size}</p>
              <p className="text-sm text-[#564d48]">{artwork.detail} · {artwork.location}</p>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 rounded-lg bg-[#a65335] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#8f4b2d]"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-lg border border-[#e9dacc] bg-[#f7efe9] px-4 py-3 text-sm font-semibold text-[#4b342d] transition hover:bg-[#f1e2d4]"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArtWorkCard;
