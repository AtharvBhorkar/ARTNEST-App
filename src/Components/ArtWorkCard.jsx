import React, { useState } from "react";
import { Heart, BadgeCheck } from "lucide-react";

function ArtWorkCard({ artwork }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
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

      </div>

    </article>
  );
}

export default ArtWorkCard;
