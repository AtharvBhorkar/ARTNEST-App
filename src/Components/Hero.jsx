import React from "react";
import assets from "../assets/assests.js";
import { MdArrowOutward } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TfiMedall } from "react-icons/tfi";
import { MdHandshake } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <img className="hero-background-image" src="/artwork-placeholder.svg" alt="" />
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/artwork-placeholder.svg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://videos.pexels.com/video-files/6465616/6465616-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-background-overlay" />
      </div>

      <div className="hero-content w-full max-w-[1450px] min-h-[530px] mx-auto px-5 py-10 sm:px-8 sm:py-12 lg:px-[70px] lg:py-[68px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[70px]">
        {/* ================= LEFT CONTENT ================= */}

        <div className="w-full max-w-[700px] lg:w-[56%]">
          {/* Label */}
          <div className="inline-flex items-center gap-[9px] px-[13px] py-[7px] bg-white/15 border border-white/20 rounded-full text-white text-[10px] font-semibold tracking-[0.5px]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#f0b58e]"></span>
            CURATED GLOBAL MARKETPLACE
          </div>

          {/* Heading */}
          <h1 className="mt-6 mb-5 text-white font-serif text-[clamp(2.5rem,8vw,4.25rem)] font-normal leading-[0.99] tracking-[-0.04em]">
            A marketplace for{" "}
            <em className="text-[#f0b58e] italic font-normal">original</em>
            <br />
            <em className="text-[#f0b58e] italic font-normal">art</em>
            , sculptures &
            <br />
            handmade creations
          </h1>

          {/* Description */}
          <p className="max-w-[610px] m-0 text-white/85 text-[16px] leading-[1.65]">
            Connect directly with independent creators worldwide. Acquire
            museum-grade paintings, studio ceramics, and bespoke commissions
            with verified authenticity.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {/* Explore Button */}
            <button type="button" onClick={() => navigate("/collections")} className="h-[43px] px-[22px] rounded-[3px] border border-[#a65335] bg-[#a65335] text-white text-[15px] font-semibold flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#8f462c] hover:border-[#8f462c]">
              Explore Art
              <span className="text-[18px]"><MdArrowOutward /></span>
            </button>

            {/* Meet Artists */}
            <button type="button" onClick={() => navigate("/artists")} className="h-[43px] px-[22px] rounded-[3px] border-none bg-[#eee1d5] text-[#594a43] text-[15px] font-semibold flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#e5d5c7]">
              Meet the Artists
              <span className="text-[18px]"><IoColorPaletteOutline /></span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6">
            <div className="flex items-center gap-[7px] text-white/90 text-[13px] whitespace-nowrap">
              <span className="text-[#f0b58e] text-[17px]"><TfiMedall /></span>
              100% Original Work
            </div>

            <div className="flex items-center gap-[7px] text-white/90 text-[13px] whitespace-nowrap">
              <span className="text-[#f0b58e] text-[17px]"><MdHandshake /></span>
              Direct From Artists
            </div>

            <div className="flex items-center gap-[7px] text-white/90 text-[13px] whitespace-nowrap">
              <span className="text-[#f0b58e] text-[17px]"><FaShieldHeart /></span>
              Worldwide Insured Delivery
            </div>
          </div>
        </div>

        {/* ================= RIGHT ARTWORK ================= */}

        <div className="relative w-full max-w-[450px] h-[360px] shrink-0">
          {/* Main Artwork */}
          <div className="absolute left-0 top-0 w-[275px] h-[355px] rounded-[7px] overflow-hidden bg-[#d7c8b8] shadow-[0_15px_30px_rgba(65,43,31,0.13)]">
            <img
              src={assets.heroImage}
              alt="Original sculpture"
              className="w-full h-full object-cover block"
            />

            {/* Gradient */}
            <div className="absolute left-0 right-0 bottom-0 h-[45%] bg-gradient-to-t from-[rgba(25,17,12,0.75)] to-transparent"></div>

            {/* Artwork Text */}
            {/* <div className="absolute left-4 right-4 bottom-[15px] z-10 text-white">

              <span className="block text-[8px] tracking-[0.7px] mb-[5px]">
                EXHIBITION PIECE
              </span>

              <h3 className="m-0 font-serif text-[22px] font-normal">
                Earthen Solitude VII
              </h3>

              <p className="mt-[3px] text-[9px] opacity-90">
                Studio de Calcaire, Kyoto
              </p>

            </div> */}
          </div>

          {/* ================= SMALL ART ================= */}

          <div className="absolute right-[55px] top-0 w-[130px] h-[150px] bg-white rounded-[6px] overflow-hidden shadow-[0_8px_20px_rgba(60,42,31,0.12)]">
            <img
              src={assets.heroImage2}
              alt="Abstract artwork"
              className="w-full h-[105px] object-cover block"
            />

            <div className="px-[9px] py-[7px]">
              <h4 className="m-0 text-[#5b4940] text-[11px] font-semibold whitespace-nowrap overflow-hidden">
                Raw Umber & Du...
              </h4>

              <p className="mt-[3px] text-[#6b5c54] text-[10px]">₹1,620</p>
            </div>
          </div>

          {/* ================= CURATOR CARD ================= */}

          <div className="absolute right-0 bottom-[5px] w-[130px] min-h-[185px] p-[15px_13px] rounded-[6px] bg-[#f0dfd0] text-[#493a34]">
            <span className="text-[#a65335] text-[12px] font-bold tracking-[0.4px]">
              CURATOR PICK ★
            </span>

            <p className="my-[10px] mb-[14px] text-[13px] italic leading-[1.35]">
              <strong>
                "Art that gives
                <br />
                quiet dignity
                <br />
                to modern
                <br />
                living
                <br />
                spaces."
              </strong>
            </p>

            {/* Author */}
            <div className="flex items-center gap-[7px] text-[#6d5b52] text-[12px]">
              <div className="w-[21px] h-[21px] rounded-full bg-[#a65335] text-white flex items-center justify-center text-[7px] font-bold">
                AN
              </div>

              <span>Salon Gazette</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
