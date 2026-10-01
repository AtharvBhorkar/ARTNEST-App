import React, { useState } from "react";
import CuratedEnsembles from "../Components/CuratedEnsembles";
import SpatialHarmonySection from "../Components/SpatialHarmonySection";
import {
  ArrowRight,
  BookOpen,
  Search,
  Sparkles,
  UserRound,
  Camera,
  ShieldCheck,
  Palette,
  Box,
  Download,
  Calendar
} from "lucide-react";

const initialCategories = [
  "All Ensembles (24)",
  "Architectural Serenity",
  "Raw Earth & Minerals",
  "Monochrome & Light",
  "Modern Expression",
];

const CollectionsHero = () => {
  // ---------------------------------------------------------------------------
  // STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // ---------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------
  const handleLookbookRequest = (e) => {
    e.preventDefault();
    alert("Physical Lookbook request form will open shortly.");
  };

  const handleConsultationBook = (e) => {
    e.preventDefault();
    alert("Opening Curatorial Consultation booking calendar...");
  };

  const handleCategorySelect = (index, categoryName) => {
    setActiveCategory(index);
    console.log(`Filtering by category: ${categoryName}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleExploreCollection = () => {
    alert("Navigating to full collection of 140 works...");
  };

  const handleViewRoomDialogue = () => {
    alert("Opening 3D Room Dialogue preview mode...");
  };

  const handleDownloadPDF = () => {
    alert("Starting download for Interior Lookbook PDF (28MB)...");
  };

  return (
    <div className="w-full font-sans overflow-x-hidden">
      {/* =====================================================
          SECTION 1 — COLLECTIONS HERO
      ====================================================== */}
      <section className="w-full bg-[#fffaf6] text-[#241914]">
        {/* TOP ANNOUNCEMENT BAR */}
        <div className="border-b border-[#eadbce] bg-[#f4e5d7]">
          <div className="mx-auto flex min-h-[36px] max-w-[1500px] items-center justify-between gap-4 px-5 text-[10px] sm:px-8 md:px-10 lg:px-[4.7%]">
            {/* Left */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span className="flex shrink-0 items-center gap-1.5 font-semibold uppercase tracking-[0.8px] text-[#864329]">
                <span className="text-[10px]">•</span>
                <span>Volume IV Now Unveiled</span>
              </span>
              <span className="hidden text-[#a87860] sm:inline">•</span>
              <span className="hidden truncate text-[#755b50] sm:inline">
                6 New Curatorial Stories &amp; Direct-from-Atelier Acquisitions
              </span>
            </div>

            {/* Right */}
            <div className="hidden shrink-0 items-center gap-3 text-[#604b41] md:flex">
              <button
                type="button"
                onClick={handleLookbookRequest}
                className="flex items-center gap-1.5 text-[#604b41] transition-colors duration-200 hover:text-[#984c30] focus:outline-none"
              >
                <BookOpen size={12} strokeWidth={1.6} />
                Request Physical Lookbook
              </button>

              <span className="text-[#b89784]">/</span>

              <span>Curatorial Desk: Geneva • Kyoto • New York</span>
            </div>
          </div>
        </div>

        {/* MAIN HERO */}
        <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 md:px-10 lg:px-[4.7%] lg:pb-14 lg:pt-12">
          {/* TOP META */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Editorial Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f7eadf] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] text-[#984c30]">
                <Sparkles size={12} strokeWidth={1.7} />
                Editorial Ensembles • Seasonal Volume IV
              </span>
            </div>

            {/* Catalogue Info */}
            <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.5px] text-[#846b60] sm:text-[10px]">
              <span>Catalogue Ref. ART-2025-V4</span>
              <span>•</span>
              <span>Indexed Ensembles: 24 Total</span>
            </div>
          </div>

          {/* TITLE + CONSULTATION CARD */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-12">
            {/* LEFT */}
            <div>
              <h1 className="font-serif text-[42px] font-normal leading-[1.02] tracking-[-1.2px] text-[#17110e] sm:text-[54px] md:text-[60px] lg:text-[64px]">
                Curated Collections
              </h1>

              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.7] text-[#644f45] sm:text-[15px] md:text-[16px]">
                Thoughtfully assembled ensembles of original works, handcrafted sculptures, and tactile vessels. Harmonized by architectural interior, mineral palette, and emotional resonance.
              </p>
            </div>

            {/* CONSULTATION CARD WITH ADVISORY BACKGROUND ART */}
            <div className="group relative overflow-hidden rounded-[12px] bg-[#f7eadc] p-5 shadow-[0_2px_8px_rgba(70,45,30,0.04)] transition-all duration-300 hover:bg-[#f3ded0] hover:shadow-[0_6px_18px_rgba(70,45,30,0.08)]">
              {/* Subtle background image overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                  alt="Architectural Space"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 flex gap-3.5">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#efddcc] text-[#984c30] transition-colors duration-300 group-hover:bg-[#984c30] group-hover:text-white">
                  <UserRound size={18} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[13px] font-semibold text-[#30221c]">
                    Seeking Bespoke Harmony?
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#735e53]">
                    Our art advisory team pairs original masterworks directly to your architectural blueprints.
                  </p>

                  <button
                    type="button"
                    onClick={handleConsultationBook}
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#984c30] transition-colors duration-200 hover:text-[#71351f] focus:outline-none"
                  >
                    Book Curatorial Consultation
                    <ArrowRight size={12} strokeWidth={1.7} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FILTER + SEARCH */}
          <div className="mt-10">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              {/* Categories */}
              <div className="flex min-w-0 gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {initialCategories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategorySelect(index, category)}
                    className={`shrink-0 rounded-[8px] px-4 py-2.5 text-[11px] font-medium transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-[#97482b] text-white shadow-sm hover:bg-[#803d25]"
                        : "bg-[#f8eadc] text-[#654f45] hover:bg-[#e2c1a8] hover:text-[#17110e]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full xl:w-[280px] xl:shrink-0">
                <Search
                  size={15}
                  strokeWidth={1.7}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a8175]"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search within collections..."
                  className="h-[38px] w-full rounded-[8px] border border-[#eee1d7] bg-white pl-9 pr-3.5 text-[11px] text-[#4c3931] outline-none placeholder:text-[#a8958b] transition-all duration-200 focus:border-[#c8997e] focus:ring-2 focus:ring-[#d8b29d]/20 hover:border-[#c8997e]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — FEATURED COLLECTION
      ====================================================== */}
      <section className="w-full bg-[#fff2e3] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-[4%] lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          {/* MAIN COLLECTION CARD */}
          <div className="overflow-hidden rounded-[12px] bg-white px-5 py-8 shadow-[0_4px_20px_rgba(70,45,30,0.05)] sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-12">
            {/* TOP META */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#f4e6d9] pb-4">
              {/* Editorial Label */}
              <div className="flex items-center gap-2">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#984c30] text-[9px] text-white">
                  ✦
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.6px] text-[#984c30]">
                  Headlining Editorial Ensemble
                </span>
              </div>

              {/* Curation ID */}
              <p className="text-[9px] uppercase tracking-[0.5px] text-[#8a7064]">
                Curation ID: ENC-ARC-0140
              </p>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:items-center">
              {/* LEFT CONTENT */}
              <div className="flex flex-col">
                {/* Title */}
                <h2 className="max-w-[500px] font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.6px] text-[#17110e] sm:text-[38px] md:text-[42px]">
                  Art for Minimal Homes <br /> &amp; Architectural Spaces
                </h2>

                {/* CURATOR */}
                <div className="mt-5 flex max-w-[400px] items-center gap-3.5 rounded-[8px] bg-[#f8eadc] px-3.5 py-3 transition-all duration-300 hover:bg-[#eed3bd] hover:shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Clara Moreau"
                    className="h-10 w-10 rounded-[6px] object-cover"
                  />
                  <div>
                    <p className="text-[12px] font-medium text-[#30221c]">
                      Curated by Clara Moreau
                    </p>
                    <p className="mt-0.5 text-[9px] text-[#80695d]">
                      Head of Curatorial Studies, ArtNest Paris
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[450px] text-[12px] leading-[1.7] text-[#705c52]">
                  “Focused on quiet geometry, natural linen textures, and calming colorfields that breathe calmness into modern living. We selected these 140 pieces to complement exposed concrete, raw timber, and expansive ceiling voids.”
                </p>

                {/* MINERAL PALETTE */}
                <div className="mt-5">
                  <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.5px] text-[#80675b]">
                    Harmonized Mineral Palette
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                      <span className="h-3.5 w-3.5 rounded-full bg-[#eee0c9] shadow-inner" />
                      <span className="text-[10px] text-[#725d52]">Calcified Bone</span>
                    </div>

                    <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                      <span className="h-3.5 w-3.5 rounded-full bg-[#d7c7ae] shadow-inner" />
                      <span className="text-[10px] text-[#725d52]">Weathered Taupe</span>
                    </div>

                    <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                      <span className="h-3.5 w-3.5 rounded-full bg-[#93452c] shadow-inner" />
                      <span className="text-[10px] text-[#725d52]">Terracotta Slip</span>
                    </div>
                  </div>
                </div>

                {/* STATISTICS */}
                <div className="mt-6 grid max-w-[450px] grid-cols-3 overflow-hidden rounded-[8px] border border-[#ebd6c4] bg-[#fff0df]">
                  <div className="px-3.5 py-3 transition-colors duration-200 hover:bg-[#fce5ce]">
                    <p className="font-serif text-[18px] font-semibold leading-none text-[#8f442b]">140</p>
                    <p className="mt-1 text-[8px] uppercase tracking-wider text-[#796258]">Original Works</p>
                  </div>

                  <div className="border-l border-[#ebd6c4] px-3.5 py-3 transition-colors duration-200 hover:bg-[#fce5ce]">
                    <p className="font-serif text-[18px] font-semibold leading-none text-[#8f442b]">32</p>
                    <p className="mt-1 text-[8px] uppercase tracking-wider text-[#796258]">Master Artisans</p>
                  </div>

                  <div className="border-l border-[#ebd6c4] px-3.5 py-3 transition-colors duration-200 hover:bg-[#fce5ce]">
                    <p className="font-serif text-[18px] font-semibold leading-none text-[#8f442b]">100%</p>
                    <p className="mt-1 text-[8px] uppercase tracking-wider text-[#796258]">Archival Certified</p>
                  </div>
                </div>

                {/* BUTTONS WITH HOVER EFFECTS */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleExploreCollection}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#97482b] px-5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#72321b] hover:shadow-md focus:outline-none"
                  >
                    Explore Collection (140 Works)
                    <ArrowRight size={13} strokeWidth={1.7} />
                  </button>

                  <button
                    type="button"
                    onClick={handleViewRoomDialogue}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#f7eadf] px-5 text-[10px] font-semibold uppercase tracking-wider text-[#6e5144] transition-all duration-300 hover:bg-[#e8cbba] hover:text-[#241914] focus:outline-none"
                  >
                    <Camera size={13} strokeWidth={1.7} />
                    View Room Dialogue
                  </button>
                </div>
              </div>

              {/* RIGHT ARTWORK GALLERY GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* LARGE FEATURED ARTWORK */}
                <div className="group relative overflow-hidden rounded-[8px] bg-[#f2ebd9] shadow-[0_6px_16px_rgba(60,40,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(60,40,25,0.15)] sm:col-span-1">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85"
                      alt="Bas-Relief No. 8"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-[#f1e5d9]">
                    <p className="text-[11px] font-semibold text-[#44342c]">Bas-Relief No. 8</p>
                    <p className="mt-0.5 text-[9px] text-[#8a7469]">Lars Eklund • ₹ 2,400</p>
                    <p className="mt-2 text-[8px] uppercase tracking-wider text-[#78635a] border-t border-[#f6eeea] pt-1.5">
                      Focal Wall Work • Plaster &amp; Raw Flax
                    </p>
                  </div>
                </div>

                {/* STACKED COLUMN ARTWORKS */}
                <div className="flex flex-col gap-4 sm:gap-5 sm:col-span-1">
                  {/* SECOND ARTWORK */}
                  <div className="group relative overflow-hidden rounded-[8px] bg-[#f2ebd9] shadow-[0_6px_16px_rgba(60,40,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(60,40,25,0.15)]">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=85"
                        alt="Vessel in Ochre Slip"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2.5 bg-white border-t border-[#f1e5d9]">
                      <p className="text-[10px] font-semibold text-[#44342c]">Vessel in Ochre Slip</p>
                      <p className="mt-0.5 text-[8px] text-[#8a7469]">Mireille Ortiz • ₹ 850</p>
                    </div>
                  </div>

                  {/* THIRD ARTWORK */}
                  <div className="group relative overflow-hidden rounded-[8px] bg-[#f2ebd9] shadow-[0_6px_16px_rgba(60,40,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(60,40,25,0.15)]">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=700&q=85"
                        alt="Silent Geometry II"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2.5 bg-white border-t border-[#f1e5d9]">
                      <p className="text-[10px] font-semibold text-[#44342c]">Silent Geometry II</p>
                      <p className="mt-0.5 text-[8px] text-[#8a7469]">Elena Rousseau • ₹ 1,850</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CuratedEnsembles />

      <SpatialHarmonySection />

      {/* =====================================================
          SECTION 3 — TAILORED ENSEMBLE ADVISORY
      ====================================================== */}
      <section className="w-full bg-[#FAF4ED] px-4 py-16 font-sans sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#F2E3D5] p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Text & CTAs */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Top Pill Badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700 backdrop-blur-sm shadow-xs">
                <ShieldCheck className="h-4 w-4 text-neutral-600" />
                <span>Complimentary Advisory for Private &amp; Hospitality Spaces</span>
              </div>

              {/* Main Title */}
              <h2 className="mb-5 font-serif text-3xl font-normal leading-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
                Need a Tailored Ensemble for Your Residence or Project?
              </h2>

              {/* Subtitle / Description */}
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                Our team of independent curators and interior art consultants creates bespoke collections matched to your floor plans, lighting conditions, and aesthetic palette. We manage shipping, bespoke framing, and white-glove installation worldwide.
              </p>

              {/* Feature Badges */}
              <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-neutral-700">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-neutral-700" />
                  <span>Custom Palette Matching</span>
                </div>

                <div className="flex items-center gap-2">
                  <Box className="h-4 w-4 text-neutral-700" />
                  <span>3D Architectural Previews</span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-neutral-700" />
                  <span>Signed Provenance Papers</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleConsultationBook}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#7C3F28] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#582a1a] hover:shadow-md focus:outline-none"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Curatorial Consultation
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none"
                >
                  <Download className="h-4 w-4 text-neutral-600" />
                  Download Lookbook PDF (28MB)
                </button>
              </div>
            </div>

            {/* Right Column: Floating Curatorial Support Card */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="w-full max-w-sm rounded-xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Card Header */}
                <div className="mb-4 flex items-center gap-3.5">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                    alt="Senior Art Curator"
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xs font-semibold leading-snug text-neutral-900">
                      Curatorial Support
                    </h3>
                    <p className="text-[11px] text-neutral-500">
                      Response within 24 business hours
                    </p>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="mb-6 font-serif text-xs italic leading-relaxed text-neutral-600">
                  "We collaborate with architects and interior designers across 40 countries to assemble harmonious art programs for private villas, boutique hotels, and urban lofts."
                </p>

                {/* Card Footer Details */}
                <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-[11px]">
                  <span className="font-medium text-neutral-500">
                    Average Consultation: <span className="text-neutral-800">30 Mins</span>
                  </span>
                  <span className="font-medium text-neutral-800">
                    Complimentary
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsHero;