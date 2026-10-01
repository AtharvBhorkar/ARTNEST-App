import React, { useState } from 'react';

const initialFeaturedMasters = [
  {
    id: 'fm1',
    name: "Elora Vance",
    specialty: "Sculptural Stoneware & Terracotta",
    location: "Provence, FR",
    followersCount: 14200,
    artworks: "28",
    rating: "4.9★",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    selectedWorks: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=300",
    ]
  },
  {
    id: 'fm2',
    name: "Mateo Rossi",
    specialty: "Abstract Expressionist Oils",
    location: "Florence, IT",
    followersCount: 22800,
    artworks: "34",
    rating: "5.0★",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    selectedWorks: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&q=80&w=300",
    ]
  },
  {
    id: 'fm3',
    name: "Sylvan Zhou",
    specialty: "Architectural Wood & Bronze",
    location: "Kyoto, JP",
    followersCount: 19500,
    artworks: "16",
    rating: "4.9★",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    selectedWorks: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=300",
    ]
  }
];

const initialGuildArtists = [
  {
    id: 'ga1',
    name: "Clara Miró",
    medium: "OIL PAINTING",
    location: "Barcelona, Spain",
    followersCount: 8400,
    pieces: "19",
    rating: "4.9★",
    coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga2',
    name: "Alejandro Cruz",
    medium: "CERAMICS",
    location: "Oaxaca, Mexico",
    followersCount: 11300,
    pieces: "24",
    rating: "4.9★",
    coverImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga3',
    name: "Hannah Berg",
    medium: "MARBLE & BRONZE",
    location: "Portland, USA",
    followersCount: 9700,
    pieces: "15",
    rating: "4.8★",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga4',
    name: "Linus Aaberg",
    medium: "FINE ART PRINTS",
    location: "Copenhagen, DK",
    followersCount: 7200,
    pieces: "32",
    rating: "5.0★",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga5',
    name: "Amina Diallo",
    medium: "TEXTILE & FIBER",
    location: "Dakar, Senegal",
    followersCount: 15100,
    pieces: "12",
    rating: "4.9★",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga6',
    name: "Julien Moreau",
    medium: "OIL PAINTING",
    location: "Normandy, France",
    followersCount: 6800,
    pieces: "21",
    rating: "4.8★",
    coverImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga7',
    name: "Mei-Ling Tan",
    medium: "CERAMICS",
    location: "Hsinchu, Taiwan",
    followersCount: 18400,
    pieces: "18",
    rating: "5.0★",
    coverImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=200",
    ]
  },
  {
    id: 'ga8',
    name: "Rowan Campbell",
    medium: "WOODCRAFT",
    location: "Edinburgh, UK",
    followersCount: 5300,
    pieces: "14",
    rating: "4.9★",
    coverImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    thumbnails: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=200",
    ]
  }
];

export default function MeetTheArtistsHeader() {
  const [selectedFilter, setSelectedFilter] = useState('All Disciplines');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Most Followed');
  const [followedIds, setFollowedIds] = useState(new Set());
  const [visibleGuildArtistsCount, setVisibleGuildArtistsCount] = useState(8);

  const filters = [
    'All Disciplines',
    'Oil & Canvas',
    'Ceramics & Clay',
    'Bronze & Stone Sculptures',
    'Mixed Media',
    'Minimalist Woodcraft',
  ];

  // Utility helper to format followers nicely (e.g., 14200 -> "14.2k")
  const formatFollowers = (count) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  };

  // Toggle follow status
  const handleToggleFollow = (id) => {
    setFollowedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Profile View action
  const handleViewProfile = (artistName) => {
    alert(`Navigating to ${artistName}'s atelier profile.`);
  };

  // Search Action
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    console.log('Performing search:', { searchQuery, selectedFilter, sortBy });
  };

  // Submit Atelier Dossier Action
  const handleSubmitDossier = () => {
    alert('Thank you for your interest! Opening the Atelier Dossier submission form.');
  };

  // Load More Artists Action
  const handleLoadMore = () => {
    setVisibleGuildArtistsCount((prev) => Math.min(prev + 4, initialGuildArtists.length));
  };

  // Filter & Sort Logic for Featured Masters
  const filteredFeaturedMasters = initialFeaturedMasters.filter((master) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      master.name.toLowerCase().includes(query) ||
      master.specialty.toLowerCase().includes(query) ||
      master.location.toLowerCase().includes(query);

    let matchesFilter = true;
    if (selectedFilter === 'Oil & Canvas') matchesFilter = master.specialty.toLowerCase().includes('oil');
    else if (selectedFilter === 'Ceramics & Clay') matchesFilter = master.specialty.toLowerCase().includes('stoneware') || master.specialty.toLowerCase().includes('terracotta');
    else if (selectedFilter === 'Bronze & Stone Sculptures') matchesFilter = master.specialty.toLowerCase().includes('bronze');
    else if (selectedFilter === 'Minimalist Woodcraft') matchesFilter = master.specialty.toLowerCase().includes('wood');

    return matchesSearch && matchesFilter;
  });

  // Filter & Sort Logic for Guild Artists
  const filteredGuildArtists = initialGuildArtists
    .filter((artist) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        artist.name.toLowerCase().includes(query) ||
        artist.medium.toLowerCase().includes(query) ||
        artist.location.toLowerCase().includes(query);

      let matchesFilter = true;
      if (selectedFilter === 'Oil & Canvas') matchesFilter = artist.medium === 'OIL PAINTING';
      else if (selectedFilter === 'Ceramics & Clay') matchesFilter = artist.medium === 'CERAMICS';
      else if (selectedFilter === 'Bronze & Stone Sculptures') matchesFilter = artist.medium === 'MARBLE & BRONZE';
      else if (selectedFilter === 'Minimalist Woodcraft') matchesFilter = artist.medium === 'WOODCRAFT';

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'Most Followed') return b.followersCount - a.followersCount;
      if (sortBy === 'Highest Rated') return parseFloat(b.rating) - parseFloat(a.rating);
      if (sortBy === 'Catalogue Depth') return parseInt(b.pieces) - parseInt(a.pieces);
      return 0;
    });

  return (
    <>
      <section className="bg-[#FAF4ED] min-h-[500px] py-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-center font-sans text-neutral-800">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Top Header Section */}
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#7C3F28] rounded-full inline-block"></span>
              <span className="text-[11px] font-semibold tracking-widest text-[#7C3F28] uppercase">
                Curated Atelier Guild
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif leading-tight text-neutral-900 mb-4 font-normal">
              Meet the Artists
            </h1>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Discover master painters, sculptors, and ceramists from ateliers across the globe. Each creator is hand-selected and accredited through physical gallery provenance.
            </p>
          </div>

          {/* Floating Search & Filter Bar */}
          <form onSubmit={handleSearchSubmit} className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-neutral-100 flex flex-col gap-4">
            
            {/* Top Controls: Search Input + Dropdown + Search Button */}
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              
              {/* Search Input */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artists by name, style, or medium..."
                  className="w-full bg-[#FAF0E6] text-neutral-800 placeholder-neutral-400 text-xs sm:text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#7C3F28] transition-all"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-[#FAF0E6] text-neutral-700 text-xs sm:text-sm font-medium rounded-lg pl-8 pr-8 py-3 w-full md:w-auto focus:outline-none focus:ring-1 focus:ring-[#7C3F28] cursor-pointer"
                >
                  <option value="Most Followed">Most Followed</option>
                  <option value="Highest Rated">Highest Rated</option>
                  <option value="Newest Ateliers">Newest Ateliers</option>
                  <option value="Catalogue Depth">Catalogue Depth</option>
                </select>
                
                {/* Sort Icon Left */}
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-neutral-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>

                {/* Chevron Icon Right */}
                <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-neutral-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Primary Search Button */}
              <button
                type="submit"
                className="bg-[#7C3F28] hover:bg-[#66321F] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>

            </div>

            {/* Bottom Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-neutral-400 tracking-wider uppercase mr-1">
                FILTER:
              </span>

              {filters.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    className={`text-xs px-3.5 py-1.5 rounded-full transition-colors font-medium cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white'
                        : 'bg-[#FAF0E6] text-neutral-700 hover:bg-[#F2E3D5]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

          </form>

        </div>
      </section>

      <section className="bg-[#FAF4ED] min-h-screen py-16 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-2">
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-neutral-500 uppercase">
                Curatorial Selection
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mt-1">
                Featured Masters
              </h2>
            </div>
            <span className="text-xs text-neutral-500 font-medium">
              Recognized by the International Fine Arts Jury
            </span>
          </div>

          {/* Featured Masters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredFeaturedMasters.map((master) => {
              const isFollowing = followedIds.has(master.id);
              const currentFollowersCount = isFollowing ? master.followersCount + 1 : master.followersCount;

              return (
                <div 
                  key={master.id} 
                  className="bg-white rounded-2xl p-4 shadow-xs border border-neutral-100/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Main Profile Cover Image */}
                      <div className="artwork-card-media !aspect-[4/3] rounded-xl mb-3">
                      <img
                        src={master.profileImage}
                        alt={master.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name & Location Bar */}
                    <span className="artwork-card-label mb-2">Featured Master</span>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-serif font-semibold text-neutral-900 leading-snug">
                        {master.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-[#FAF0E6] text-[#7C3F28] px-2 py-0.5 rounded-full text-[10px] font-medium">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{master.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 mb-4 font-medium">
                      {master.specialty}
                    </p>

                    {/* Stats Bar */}
                    <div className="bg-[#FAF0E6]/70 rounded-xl p-3 flex justify-around items-center text-center mb-5 border border-[#F3E7DB]">
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{formatFollowers(currentFollowersCount)}</div>
                        <div className="text-[9px] text-neutral-400 font-semibold tracking-wider uppercase">Followers</div>
                      </div>
                      <div className="h-6 w-[1px] bg-neutral-200/60"></div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{master.artworks}</div>
                        <div className="text-[9px] text-neutral-400 font-semibold tracking-wider uppercase">Artworks</div>
                      </div>
                      <div className="h-6 w-[1px] bg-neutral-200/60"></div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{master.rating}</div>
                        <div className="text-[9px] text-neutral-400 font-semibold tracking-wider uppercase">Rating</div>
                      </div>
                    </div>

                    {/* Selected Works Label */}
                    <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block mb-2">
                      Selected Works
                    </span>

                    {/* Selected Works Thumbnails */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {master.selectedWorks.map((workImg, imgIdx) => (
                        <div key={imgIdx} className="h-20 rounded-lg overflow-hidden bg-neutral-100">
                          <img
                            src={workImg}
                            alt={`Selected artwork ${imgIdx + 1} by ${master.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleFollow(master.id)}
                      className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                        isFollowing
                          ? 'bg-neutral-800 text-white hover:bg-neutral-900'
                          : 'bg-[#FAF0E6] hover:bg-[#F2E3D5] text-neutral-800'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleViewProfile(master.name)}
                      className="flex-1 bg-[#7C3F28] hover:bg-[#66321F] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors text-center shadow-xs cursor-pointer"
                    >
                      View Profile
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Integrity Guarantee Banner */}
          <div className="bg-[#F2E3D5] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shrink-0 border border-white/40">
                <svg className="w-5 h-5 text-[#7C3F28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 leading-snug">
                  Atelier Guild Integrity Guarantee
                </h4>
                <p className="text-xs text-neutral-600">
                  Every creator is studio-inspected. Physical certificates sealed with wax accompany each dispatched piece.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 self-end md:self-auto shrink-0 border-t md:border-t-0 border-neutral-300/40 pt-3 md:pt-0 w-full md:w-auto justify-end">
              <div className="text-right">
                <div className="text-xl font-serif font-medium text-neutral-900 leading-none">148</div>
                <div className="text-[9px] font-bold text-neutral-500 tracking-wider uppercase mt-1">Verified Masters</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-serif font-medium text-neutral-900 leading-none">32</div>
                <div className="text-[9px] font-bold text-neutral-500 tracking-wider uppercase mt-1">Global Guilds</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#FAF4ED] min-h-screen py-12 px-4 sm:px-6 lg:px-12 font-sans text-neutral-800">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-2">
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
                REGISTRY INDEX
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 font-medium">
                All Guild Artists
              </h2>
            </div>
            <span className="text-xs text-neutral-400">
              Showing <strong className="text-neutral-700 font-semibold">{Math.min(visibleGuildArtistsCount, filteredGuildArtists.length)} of {initialGuildArtists.length}</strong> accredited practitioners
            </span>
          </div>

          {/* 4-Column Artists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {filteredGuildArtists.slice(0, visibleGuildArtistsCount).map((artist) => {
              const isFollowing = followedIds.has(artist.id);
              const currentFollowersCount = isFollowing ? artist.followersCount + 1 : artist.followersCount;

              return (
                <div 
                  key={artist.id} 
                  className="bg-white rounded-xl p-3.5 shadow-xs border border-neutral-100/70 flex flex-col justify-between"
                >
                  <div>
                    {/* Artist Cover Image */}
                    <div className="h-44 w-full rounded-lg overflow-hidden mb-3 bg-neutral-100">
                      <img
                        src={artist.coverImage}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name & Medium Badge */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm font-serif font-semibold text-neutral-900 truncate">
                        {artist.name}
                      </h3>
                      <span className="bg-[#FAF0E6] text-[#A86146] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                        {artist.medium}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 mb-3">
                      <svg className="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{artist.location}</span>
                    </div>

                    {/* Stats Bar */}
                    <div className="bg-[#FAF0E6]/60 rounded-md p-2 flex justify-between items-center text-center mb-3 text-[10px]">
                      <div>
                        <div className="font-semibold text-neutral-800 leading-tight">{formatFollowers(currentFollowersCount)}</div>
                        <div className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">FOLLOWERS</div>
                      </div>
                      <div className="h-4 w-[1px] bg-neutral-200"></div>
                      <div>
                        <div className="font-semibold text-neutral-800 leading-tight">{artist.pieces}</div>
                        <div className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">PIECES</div>
                      </div>
                      <div className="h-4 w-[1px] bg-neutral-200"></div>
                      <div>
                        <div className="font-semibold text-neutral-800 leading-tight">{artist.rating}</div>
                        <div className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">RATING</div>
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      {artist.thumbnails.map((thumb, tIdx) => (
                        <div key={tIdx} className="h-12 rounded overflow-hidden bg-neutral-100">
                          <img
                            src={thumb}
                            alt={`Artwork detail ${tIdx + 1} by ${artist.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => handleToggleFollow(artist.id)}
                      className={`p-2 rounded-md transition-colors flex items-center justify-center shrink-0 cursor-pointer ${
                        isFollowing
                          ? 'bg-neutral-800 text-white hover:bg-neutral-900'
                          : 'bg-[#FAF0E6] hover:bg-[#F2E3D5] text-neutral-700'
                      }`}
                      title={isFollowing ? 'Unfollow' : 'Follow'}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleViewProfile(artist.name)}
                      className="flex-1 bg-[#FAF0E6] hover:bg-[#F2E3D5] text-neutral-800 text-[11px] font-medium py-1.5 rounded-md transition-colors text-center cursor-pointer"
                    >
                      View Profile
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleGuildArtistsCount < filteredGuildArtists.length && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="bg-[#FAF0E6] hover:bg-[#F2E3D5] text-neutral-700 text-xs font-medium px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                Load More Artists <span className="text-neutral-400">(showing {visibleGuildArtistsCount} of {filteredGuildArtists.length})</span>
              </button>
            </div>
          )}

        </div>
      </section>

      <section className="bg-[#FAF5EE] min-h-[300px] py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Centered Subtitle */}
          <p className="text-center text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
            CURATED WEEKLY ADDITIONS FROM INDEPENDENT WORKSHOPS
          </p>

          {/* Call to Action Container */}
          <div className="bg-[#FFF4E8] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xs">
            
            {/* Left Text Content */}
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-wider text-[#A6613F] uppercase block mb-2">
                FOR MASTER ARTISANS
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-neutral-900 leading-snug mb-3">
                Are you an independent artist or sculptor?
              </h2>
              
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Join the ArtNest Guild. We offer museum-level curatorial support, worldwide collector distribution, and wax-sealed physical provenance documentation.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={handleSubmitDossier}
                className="w-full md:w-auto bg-[#823A21] hover:bg-[#6D301B] text-white text-sm font-medium py-3.5 px-7 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                Submit Atelier Dossier
              </button>
            </div>

          </div>
          
        </div>
      </section>
    </>
  );
}
