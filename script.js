// ═══════════════════════════════════════════════════════════════
// KYAMI ANIMES INDIA — ULTRA-PERFORMANCE CORE SCRIPT (60FPS)
// Full Feature Preservation + AniReal Benchmark Engine
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ═══ GLOBAL UTILITIES & SAFE STORAGE HELPERS ═══
  const STORAGE_KEYS = {
    FAV: "kyami_anime_favorites",
    HISTORY: "toonflix_history",
    USER: "kyami_anime_user",
    THEME: "kyami_anime_theme",
    LANG: "kyami_anime_lang",
    RATINGS: "kyami_anime_ratings",
    TG_POPUP: "kyami_tg_popup_timestamp"
  };

  // Resilient User/Fav/Theme Subsystems (Never throw ReferenceError)
  window.ToonFav = window.ToonFav || {
    get: function() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAV) || "[]"); }
      catch (e) { return []; }
    },
    isFav: function(id) {
      return this.get().some(function(item) { return item.id === String(id); });
    },
    toggle: function(anime) {
      if (!anime || !anime.id) return false;
      var list = this.get();
      var idStr = String(anime.id);
      var idx = list.findIndex(function(x) { return x.id === idStr; });
      var added = false;
      if (idx > -1) {
        list.splice(idx, 1);
        added = false;
      } else {
        list.unshift({
          id: idStr,
          title: anime.title || "Untitled",
          poster: anime.poster || "",
          rating: anime.rating || "8.0",
          year: anime.year || ""
        });
        added = true;
      }
      localStorage.setItem(STORAGE_KEYS.FAV, JSON.stringify(list));
      return added;
    }
  };

  window.ToonRating = window.ToonRating || {
    get: function(id) {
      try {
        var r = JSON.parse(localStorage.getItem(STORAGE_KEYS.RATINGS) || "{}");
        return r[id] || 0;
      } catch (e) { return 0; }
    },
    set: function(id, val) {
      try {
        var r = JSON.parse(localStorage.getItem(STORAGE_KEYS.RATINGS) || "{}");
        r[id] = val;
        localStorage.setItem(STORAGE_KEYS.RATINGS, JSON.stringify(r));
      } catch (e) {}
    }
  };

  window.ToonUser = window.ToonUser || {
    get: function() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER) || "null"); }
      catch (e) { return null; }
    },
    set: function(name, email) {
      var u = { name: name || "Anime Fan", email: email || "" };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
      return u;
    }
  };

  window.ToonTheme = window.ToonTheme || {
    get: function() {
      return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
    },
    toggle: function() {
      var cur = this.get();
      var next = cur === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      document.body.classList.toggle("light-theme", next === "light");
      return next;
    }
  };

  window.ToonLang = window.ToonLang || {
    get: function() {
      return localStorage.getItem(STORAGE_KEYS.LANG) || "hi";
    },
    toggle: function() {
      var cur = this.get();
      var next = cur === "hi" ? "en" : "hi";
      localStorage.setItem(STORAGE_KEYS.LANG, next);
      if (window.showToast) window.showToast(next === "hi" ? "🌐 भाषा: हिंदी" : "🌐 Language: English");
      return next;
    }
  };

  // ═══ HIGH-FIDELITY CURATED DEFAULT DATA (ZERO BROKEN PAGES) ═══
  var CURATED_FALLBACK_ANIME = [
    {
      id: "solo-leveling",
      title: "Solo Leveling (Season 2)",
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
      rating: "9.2",
      year: "2024",
      genres: "Action, Fantasy, Adventure",
      language: "Hindi Dubbed",
      status: "ongoing",
      totalEp: "Ep: 12",
      top10: 1,
      description: "In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo, notoriously known as the weakest hunter of all mankind, is fatally injured in a high-rank double dungeon.",
      trailer: "https://www.youtube.com/embed/916wT5h6rZc?autoplay=1",
      seasons: {
        "Season_1": {
          "ep_1": { number: 1, title: "I'm Used to It", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" },
          "ep_2": { number: 2, title: "If I Had One More Chance", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" },
          "ep_3": { number: 3, title: "It's Like a Game", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" }
        },
        "Season_2": {
          "ep_1": { number: 1, title: "Arise from the Shadows", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" }
        }
      }
    },
    {
      id: "demon-slayer-hashira",
      title: "Demon Slayer: Hashira Training",
      poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
      rating: "9.0",
      year: "2024",
      genres: "Action, Supernatural, Historical",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 08",
      top10: 2,
      description: "Tanjiro visits the Stone Hashira, Himejima, who intends to prepare him for the battles to come in the ultimate Infinity Castle showdown.",
      trailer: "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1"
    },
    {
      id: "classroom-of-elite-3",
      title: "Classroom of the Elite Season 3",
      poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80",
      rating: "8.7",
      year: "2024",
      genres: "Drama, Psychological, Mystery",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 13",
      top10: 3,
      description: "Kiyotaka Ayanokoji continues his calculated maneuverings in the Tokyo Metropolitan Advanced Nurturing High School during the mixed training camp exam.",
      trailer: "https://www.youtube.com/embed/a6R_p6vP_Y8?autoplay=1"
    },
    {
      id: "jujutsu-kaisen-s2",
      title: "Jujutsu Kaisen: Shibuya Incident",
      poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=1200&auto=format&fit=crop&q=80",
      rating: "9.4",
      year: "2023",
      genres: "Action, Dark Fantasy, Supernatural",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 23",
      top10: 4,
      description: "On October 31st, a veil descends upon Shibuya. Satoru Gojo is lured into a trap orchestrated by Suguru Geto and cursed spirits.",
      trailer: "https://www.youtube.com/embed/pkZXflZlqK4?autoplay=1"
    },
    {
      id: "mushoku-tensei-s2",
      title: "Mushoku Tensei: Jobless Reincarnation S2",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
      rating: "8.8",
      year: "2024",
      genres: "Adventure, Fantasy, Isekai",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 24",
      top10: 5,
      description: "Rudeus Greyrat enters Ranoa Magic Academy looking for clues regarding the Teleportation Incident and his lost mother Zenith.",
      trailer: "https://www.youtube.com/embed/5aGZc6YJ4xY?autoplay=1"
    },
    {
      id: "one-piece-egghead",
      title: "One Piece: Egghead Island Arc",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
      rating: "9.5",
      year: "2024",
      genres: "Action, Adventure, Shounen",
      language: "Hindi Subbed",
      status: "ongoing",
      totalEp: "Ep: Ongoing",
      top10: 6,
      description: "The Straw Hat Pirates arrive at Egghead, the Island of the Future, where Dr. Vegapunk's laboratory holds secrets about the Void Century.",
      trailer: "https://www.youtube.com/embed/MCb13lbKpsk?autoplay=1"
    },
    {
      id: "the-ribbon-hero",
      title: "The Ribbon Hero: Dawn of Swords",
      poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80",
      rating: "8.4",
      year: "2024",
      genres: "Action, Fantasy, Comedy",
      language: "Hindi Dubbed",
      status: "ongoing",
      totalEp: "Ep: 10",
      top10: 7,
      description: "Armed with an ancient enchanted ribbon, a novice rogue embarks on a quest across the fractured continent.",
      trailer: "https://www.youtube.com/embed/916wT5h6rZc?autoplay=1"
    },
    {
      id: "the-ramparts-of-ice",
      title: "The Ramparts of Ice Season 2",
      poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
      rating: "8.2",
      year: "2024",
      genres: "Comedy, Romance, School",
      language: "Hindi Dubbed",
      status: "ongoing",
      totalEp: "Ep: 06",
      top10: 8,
      description: "High school friendships grow warmer in the harsh winter as misunderstood loner Koyuki discovers true empathy.",
      trailer: "https://www.youtube.com/embed/a6R_p6vP_Y8?autoplay=1"
    },
    {
      id: "mononoke-phantom-rain",
      title: "Mononoke The Movie: Phantom in the Rain",
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=1200&auto=format&fit=crop&q=80",
      rating: "8.9",
      year: "2024",
      genres: "Fantasy, Mystery, Supernatural",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "MOVIE",
      top10: 9,
      description: "The Medicine Seller arrives at the Ōoku, the secluded women's quarters of Edo Castle, to exorcise malevolent Mononoke.",
      trailer: "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1"
    },
    {
      id: "black-clover-movie",
      title: "Black Clover: Sword of the Wizard King",
      poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
      rating: "8.6",
      year: "2023",
      genres: "Action, Magic, Shounen",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "MOVIE",
      top10: 10,
      description: "Asta and the Magic Knights face former Wizard Kings resurrected by Conrad Leto using the Imperial Sword.",
      trailer: "https://www.youtube.com/embed/pkZXflZlqK4?autoplay=1"
    },
    {
      id: "your-name",
      title: "Your Name. (Kimi no Na wa)",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
      rating: "9.3",
      year: "2016",
      genres: "Romance, Drama, Supernatural",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "MOVIE",
      description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies across time and space.",
      trailer: "https://www.youtube.com/embed/xU47nhruN-Q?autoplay=1"
    },
    {
      id: "spirited-away",
      title: "Spirited Away",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
      rating: "9.1",
      year: "2001",
      genres: "Adventure, Supernatural, Classic",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "MOVIE",
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
      trailer: "https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1"
    }
  ];

  // ═══ STATE ENGINE ═══
  var state = {
    animeList: [...CURATED_FALLBACK_ANIME],
    activeGenre: "All",
    activeLanguage: "All",
    filterYear: "All",
    filterRating: "All",
    filterFormat: "All",
    currentPage: 1,
    pageSize: 12,
    heroIndex: 0,
    heroAutoTimer: null,
    searchDebounce: null,
    activeAnimeModal: null,
    activeSeasonKey: null
  };

  // ═══ TOAST NOTIFICATION ═══
  window.showToast = function(msg) {
    var toast = document.getElementById("benchmarkToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "benchmarkToast";
      toast.className = "benchmark-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove("show");
    }, 2400);
  };

  // ═══ FIREBASE REALTIME DB INTEGRATION ═══
  function initFirebaseSync() {
    try {
      if (typeof firebase === "undefined" || !firebase.database) return;
      var firebaseConfig = {
        databaseURL: "https://animehindi-zone-default-rtdb.firebaseio.com/"
      };
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      var db = firebase.database();
      var animeRef = db.ref("anime");

      animeRef.on("value", function(snapshot) {
        var val = snapshot.val();
        if (val && Object.keys(val).length > 0) {
          var liveList = Object.entries(val).map(function(pair) {
            return Object.assign({ id: pair[0] }, pair[1]);
          });
          // Merge with fallback to ensure highest quality metadata
          var mergedMap = new Map();
          CURATED_FALLBACK_ANIME.forEach(function(item) { mergedMap.set(item.id, item); });
          liveList.forEach(function(item) { mergedMap.set(item.id, Object.assign({}, mergedMap.get(item.id) || {}, item)); });
          state.animeList = Array.from(mergedMap.values());
          renderAllSections();
        }
      });
    } catch (err) {
      console.warn("Firebase sync running with offline high-performance fallback:", err);
    }
  }

  // ═══ ANIREAL BENCHMARK CARD BUILDER (ZERO-JANK) ═══
  function buildAnimeCardHTML(anime, rank) {
    var isOngoing = anime.status === "ongoing" || (anime.totalEp && anime.totalEp.toLowerCase().includes("ongoing"));
    var statusClass = isOngoing ? "ongoing" : "finished";
    var statusLabel = isOngoing ? "ONGOING" : "FINISHED";
    var ratingVal = anime.rating || "8.2";
    var epLabel = anime.totalEp || (anime.episodes ? "Ep: " + Object.keys(anime.episodes).length : "Ep: 12");
    var genrePrimary = (anime.genres || "Anime").split(",")[0].trim();
    var isFav = window.ToonFav.isFav(anime.id);
    var posterUrl = anime.poster || "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80";

    return (
      '<div class="anime-card-box gpu-layer" data-anime-id="' + anime.id + '">' +
        (rank ? '<span class="top10-rank-pill">' + rank + '</span>' : '') +
        '<span class="card-badge-status ' + statusClass + '">' + statusLabel + '</span>' +
        '<span class="card-badge-rating ' + (parseFloat(ratingVal) >= 8.5 ? 'gold' : '') + '">' +
          '⭐ ' + ratingVal +
        '</span>' +
        '<button class="card-fav-action ' + (isFav ? 'active' : '') + '" data-fav-id="' + anime.id + '" title="Add to My List">' +
          (isFav ? '❤️' : '🤍') +
        '</button>' +
        '<div class="card-poster-wrap skeleton">' +
          '<img class="card-poster-img" src="' + posterUrl + '" loading="lazy" alt="' + (anime.title || "Anime") + '" onload="this.parentElement.classList.remove(\'skeleton\')" onerror="this.src=\'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80\'">' +
          '<div class="card-poster-overlay">' +
            '<span class="card-tag-hd">HD</span>' +
            '<span class="card-tag-ep">' + epLabel + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="card-caption-info">' +
          '<h3 class="card-anime-title">' + (anime.title || "Untitled") + '</h3>' +
          '<p class="card-anime-sub">' + (anime.year || "2024") + ' • ' + genrePrimary + '</p>' +
        '</div>' +
      '</div>'
    );
  }

  // ═══ HERO CAROUSEL CONTROLLER (AniReal Benchmark) ═══
  function updateHeroSlide(index) {
    if (!state.animeList.length) return;
    var heroList = state.animeList.slice(0, 5);
    var item = heroList[index % heroList.length];
    if (!item) return;

    var bgImg = document.getElementById("heroBackdropImg");
    var spotlightCard = document.getElementById("heroSpotlightCard");
    var spotlightImg = document.getElementById("heroSpotlightImg");
    var spotlightEp = document.getElementById("heroSpotlightEp");
    var titleEl = document.getElementById("heroAnimeTitle");
    var genresEl = document.getElementById("heroAnimeGenres");
    var playBtn = document.getElementById("heroPlayAction");
    var dotsContainer = document.getElementById("heroIndicatorDots");

    if (bgImg) bgImg.src = item.banner || item.poster;
    if (spotlightImg) spotlightImg.src = item.poster;
    if (spotlightEp) spotlightEp.textContent = item.totalEp || "Total Ep: 12";
    if (spotlightCard) spotlightCard.dataset.animeId = item.id;
    if (titleEl) titleEl.textContent = item.title;
    if (playBtn) playBtn.dataset.animeId = item.id;

    if (genresEl) {
      genresEl.innerHTML = (item.genres || "Action, Fantasy")
        .split(",")
        .map(function(g) { return '<span>' + g.trim() + '</span>'; })
        .join(' <span style="opacity:0.4;">•</span> ');
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = heroList.map(function(_, i) {
        return '<span class="hero-dot ' + (i === index ? 'active' : '') + '" data-hero-dot="' + i + '"></span>';
      }).join("");
    }
  }

  function startHeroAutoRotation() {
    clearInterval(state.heroAutoTimer);
    state.heroAutoTimer = setInterval(function() {
      state.heroIndex = (state.heroIndex + 1) % Math.min(state.animeList.length, 5);
      updateHeroSlide(state.heroIndex);
    }, 5500);
  }

  // ═══ SHELF RENDERERS ═══
  function renderAllSections() {
    renderHeroSection();
    renderContinueWatching();
    renderNewReleases();
    renderTopHits();
    renderPopular();
    renderTopMovies();
    renderGenreChips();
    renderLanguageChips();
    renderPaginatedGrid();
  }

  function renderHeroSection() {
    updateHeroSlide(state.heroIndex);
    startHeroAutoRotation();
  }

  function renderContinueWatching() {
    var shelf = document.getElementById("continueWatchingShelf");
    var grid = document.getElementById("continueWatchingGrid");
    if (!shelf || !grid) return;
    try {
      var history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || "[]");
      if (!history.length) {
        shelf.style.display = "none";
        return;
      }
      shelf.style.display = "block";
      grid.innerHTML = history.slice(0, 10).map(function(item) {
        return buildAnimeCardHTML(item, null);
      }).join("");
    } catch (e) {
      shelf.style.display = "none";
    }
  }

  function renderNewReleases() {
    var el = document.getElementById("newReleasesGrid");
    if (!el) return;
    var list = [...state.animeList]
      .sort(function(a, b) { return (b.year || 0) - (a.year || 0); })
      .slice(0, 10);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null); }).join("");
  }

  function renderTopHits() {
    var el = document.getElementById("topHitsGrid");
    if (!el) return;
    var list = [...state.animeList]
      .sort(function(a, b) { return parseFloat(b.rating || 0) - parseFloat(a.rating || 0); })
      .slice(0, 10);
    el.innerHTML = list.map(function(item, idx) { return buildAnimeCardHTML(item, idx + 1); }).join("");
  }

  function renderPopular() {
    var el = document.getElementById("popularGrid");
    if (!el) return;
    var list = state.animeList.slice(2, 12);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null); }).join("");
  }

  function renderTopMovies() {
    var el = document.getElementById("topMoviesGrid");
    if (!el) return;
    var list = state.animeList.filter(function(x) {
      return (x.totalEp && x.totalEp.toUpperCase().includes("MOVIE")) || (x.format && x.format.toUpperCase() === "MOVIE");
    });
    if (!list.length) list = state.animeList.slice(0, 6);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null); }).join("");
  }

  function renderGenreChips() {
    var el = document.getElementById("genreChipsScroll");
    if (!el) return;
    var genres = new Set(["All"]);
    state.animeList.forEach(function(a) {
      (a.genres || "").split(",").forEach(function(g) {
        var trimmed = g.trim();
        if (trimmed) genres.add(trimmed);
      });
    });
    el.innerHTML = Array.from(genres).map(function(g) {
      var isActive = g.toLowerCase() === state.activeGenre.toLowerCase();
      return '<button class="filter-chip ' + (isActive ? 'active' : '') + '" data-genre-chip="' + g + '">' + g + '</button>';
    }).join("");
  }

  function renderLanguageChips() {
    var el = document.getElementById("languageChipsScroll");
    if (!el) return;
    var langs = ["All", "Hindi", "English", "Japanese", "Tamil", "Telugu", "Bangla", "Chinese"];
    el.innerHTML = langs.map(function(l) {
      var isActive = l.toLowerCase() === state.activeLanguage.toLowerCase();
      return '<button class="filter-chip ' + (isActive ? 'active' : '') + '" data-lang-chip="' + l + '">' + l + '</button>';
    }).join("");
  }

  // ═══ FILTERED & PAGINATED ALL ANIME GRID ═══
  function getFilteredAnime() {
    return state.animeList.filter(function(a) {
      // Genre filter
      if (state.activeGenre !== "All") {
        if (!(a.genres || "").toLowerCase().includes(state.activeGenre.toLowerCase())) return false;
      }
      // Language filter
      if (state.activeLanguage !== "All") {
        if (!(a.language || "Hindi").toLowerCase().includes(state.activeLanguage.toLowerCase())) return false;
      }
      // Year filter
      if (state.filterYear !== "All") {
        if (String(a.year || "") !== state.filterYear) return false;
      }
      // Rating filter
      if (state.filterRating !== "All") {
        if (parseFloat(a.rating || 0) < parseFloat(state.filterRating)) return false;
      }
      return true;
    });
  }

  function renderPaginatedGrid() {
    var grid = document.getElementById("allAnimeMainGrid");
    var pagination = document.getElementById("animePagination");
    if (!grid) return;

    var filtered = getFilteredAnime();
    var totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = 1;

    var start = (state.currentPage - 1) * state.pageSize;
    var pageItems = filtered.slice(start, start + state.pageSize);

    if (!pageItems.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:var(--text-muted);">' +
        '<p style="font-size:1.1rem;font-weight:700;">Koi anime nahi mila</p>' +
        '<p style="font-size:0.85rem;margin-top:6px;">Try clearing filters or search for another title.</p>' +
      '</div>';
    } else {
      grid.innerHTML = pageItems.map(function(item) {
        return buildAnimeCardHTML(item, null);
      }).join("");
    }

    if (pagination) {
      var paginationHTML = '';
      if (totalPages > 1) {
        paginationHTML += '<button class="page-btn" data-page-nav="prev">‹</button>';
        for (var p = 1; p <= totalPages; p++) {
          if (p === 1 || p === totalPages || Math.abs(p - state.currentPage) <= 1) {
            paginationHTML += '<button class="page-btn ' + (p === state.currentPage ? 'active' : '') + '" data-page-num="' + p + '">' + p + '</button>';
          } else if (p === 2 && state.currentPage > 3) {
            paginationHTML += '<span class="page-dots">...</span>';
          } else if (p === totalPages - 1 && state.currentPage < totalPages - 2) {
            paginationHTML += '<span class="page-dots">...</span>';
          }
        }
        paginationHTML += '<button class="page-btn" data-page-nav="next">›</button>';
      }
      pagination.innerHTML = paginationHTML;
    }
  }

  // ═══ SEARCH ENGINE (DEBOUNCED & INSTANT) ═══
  function executeSearch(query) {
    var overlay = document.getElementById("searchResultsOverlay");
    var grid = document.getElementById("searchCardsGrid");
    var title = document.getElementById("searchResultsHeading");
    if (!overlay || !grid) return;

    var q = (query || "").trim().toLowerCase();
    if (!q) {
      overlay.style.display = "none";
      return;
    }

    var matches = state.animeList.filter(function(a) {
      var t = (a.title || "").toLowerCase();
      var g = (a.genres || "").toLowerCase();
      var y = String(a.year || "");
      var l = (a.language || "").toLowerCase();
      return t.includes(q) || g.includes(q) || y.includes(q) || l.includes(q);
    });

    overlay.style.display = "block";
    if (title) title.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' for "' + query + '"';

    if (!matches.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:24px;color:var(--text-muted);font-size:0.85rem;">Koi matching anime nahi mila.</p>';
      return;
    }

    grid.innerHTML = matches.slice(0, 12).map(function(a) {
      return (
        '<div class="search-mini-card" data-anime-id="' + a.id + '">' +
          '<img src="' + (a.poster || '') + '" alt="' + (a.title || '') + '">' +
          '<div class="search-mini-info">' +
            '<h4>' + (a.title || 'Untitled') + '</h4>' +
            '<p>⭐ ' + (a.rating || '8.0') + ' • ' + (a.year || '') + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  // ═══ INTERACTIVE ANIME WATCH MODAL ═══
  function openAnimeModal(animeId) {
    var anime = state.animeList.find(function(x) { return x.id === animeId; });
    if (!anime) return;
    state.activeAnimeModal = anime;

    var modal = document.getElementById("animeModalBackdrop");
    var iframe = document.getElementById("modalPlayerIframe");
    var title = document.getElementById("modalAnimeTitle");
    var poster = document.getElementById("modalAnimePoster");
    var desc = document.getElementById("modalAnimeDesc");
    var tags = document.getElementById("modalTagsContainer");
    var seasonStrip = document.getElementById("modalSeasonStrip");
    var epGrid = document.getElementById("modalEpisodesGrid");
    var tgBtn = document.getElementById("modalTgBtn");

    if (title) title.textContent = anime.title || "Anime Player";
    if (poster) poster.src = anime.poster || "";
    if (desc) desc.textContent = anime.description || "Enjoy streaming in high-definition Hindi Dubbed audio on Kyami Animes India.";
    if (iframe) iframe.src = anime.trailer || "https://www.youtube.com/embed/916wT5h6rZc?autoplay=1";

    if (tags) {
      tags.innerHTML = [
        anime.year ? '<span class="modal-tag">📅 ' + anime.year + '</span>' : '',
        anime.rating ? '<span class="modal-tag">⭐ ' + anime.rating + '</span>' : '',
        '<span class="modal-tag">📢 ' + (anime.language || 'Hindi Dubbed') + '</span>',
        '<span class="modal-tag">HD 1080p</span>'
      ].join("");
    }

    // Handle Seasons & Episodes
    var seasons = anime.seasons || {
      "Season_1": {
        "ep_1": { number: 1, title: "Episode 1" },
        "ep_2": { number: 2, title: "Episode 2" },
        "ep_3": { number: 3, title: "Episode 3" }
      }
    };
    var seasonKeys = Object.keys(seasons);
    state.activeSeasonKey = seasonKeys[0];

    if (seasonStrip) {
      seasonStrip.innerHTML = seasonKeys.map(function(sk, i) {
        return '<button class="modal-season-tab ' + (i === 0 ? 'active' : '') + '" data-season-key="' + sk + '">' +
          '📺 ' + sk.replace(/_/g, ' ') +
        '</button>';
      }).join("");
    }

    renderModalEpisodes(seasons[state.activeSeasonKey]);

    // Save to Continue Watching History
    try {
      var hist = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || "[]");
      hist = hist.filter(function(h) { return h.id !== anime.id; });
      hist.unshift({
        id: anime.id,
        title: anime.title,
        poster: anime.poster,
        rating: anime.rating,
        year: anime.year,
        totalEp: anime.totalEp || "EP 1"
      });
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(hist.slice(0, 15)));
      renderContinueWatching();
    } catch (e) {}

    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function renderModalEpisodes(episodesObj) {
    var epGrid = document.getElementById("modalEpisodesGrid");
    if (!epGrid) return;
    var eps = Object.entries(episodesObj || {}).map(function(pair) { return pair[1]; });
    if (!eps.length) {
      epGrid.innerHTML = '<p style="color:var(--text-muted);font-size:0.82rem;padding:12px;">Is season me koi episode nahi hai.</p>';
      return;
    }
    epGrid.innerHTML = eps.map(function(ep, idx) {
      return (
        '<button class="modal-ep-btn ' + (idx === 0 ? 'active' : '') + '" data-ep-num="' + ep.number + '">' +
          '<span class="modal-ep-num">' + ep.number + '</span>' +
          '<span>' + (ep.title || ('Episode ' + ep.number)) + '</span>' +
        '</button>'
      );
    }).join("");
  }

  function closeAnimeModal() {
    var modal = document.getElementById("animeModalBackdrop");
    var iframe = document.getElementById("modalPlayerIframe");
    if (iframe) iframe.src = "";
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // ═══ SOCIAL SHARE ENGINE ═══
  window.sharePlatform = function(platform) {
    var title = encodeURIComponent("Watch anime in Hindi Dubbed on Kyami Animes India! 🔥");
    var url = encodeURIComponent(window.location.href);

    switch(platform) {
      case "whatsapp":
        window.open("https://api.whatsapp.com/send?text=" + title + "%20" + url, "_blank");
        break;
      case "telegram":
        window.open("https://t.me/share/url?url=" + url + "&text=" + title, "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "_blank");
        break;
      case "twitter":
        window.open("https://twitter.com/intent/tweet?text=" + title + "&url=" + url, "_blank");
        break;
      case "copy":
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(function() {
            window.showToast("📋 Link copied to clipboard!");
          });
        } else {
          window.showToast("📋 Link ready: " + window.location.href);
        }
        break;
    }
  };

  // ═══ TELEGRAM JOIN POPUP (With Cooldown) ═══
  function initTelegramPopup() {
    var lastShown = localStorage.getItem(STORAGE_KEYS.TG_POPUP);
    var cooldown = 24 * 60 * 60 * 1000;
    if (lastShown && (Date.now() - parseInt(lastShown, 10)) < cooldown) return;

    setTimeout(function() {
      var overlay = document.getElementById("tgPopupOverlay");
      if (overlay) {
        overlay.classList.add("show");
        localStorage.setItem(STORAGE_KEYS.TG_POPUP, Date.now().toString());
      }
    }, 4500);
  }

  window.closeTgPopup = function() {
    var overlay = document.getElementById("tgPopupOverlay");
    if (overlay) overlay.classList.remove("show");
  };

  // ═══ UNIFIED HIGH-PERFORMANCE EVENT DELEGATION ═══
  function attachEventDelegation() {
    document.addEventListener("click", function(e) {
      // 1. Favorite Heart Button
      var favBtn = e.target.closest(".card-fav-action");
      if (favBtn) {
        e.stopPropagation();
        var favId = favBtn.dataset.favId;
        var anime = state.animeList.find(function(x) { return x.id === favId; });
        if (anime) {
          var added = window.ToonFav.toggle(anime);
          favBtn.classList.toggle("active", added);
          favBtn.textContent = added ? "❤️" : "🤍";
          window.showToast(added ? "❤️ Added to My List" : "Removed from My List");
        }
        return;
      }

      // 2. Anime Card Click -> Open Player Modal
      var card = e.target.closest(".anime-card-box");
      if (card) {
        var animeId = card.dataset.animeId;
        if (animeId) openAnimeModal(animeId);
        return;
      }

      // 3. Search Result Mini-Card
      var searchCard = e.target.closest(".search-mini-card");
      if (searchCard) {
        var sid = searchCard.dataset.animeId;
        var overlay = document.getElementById("searchResultsOverlay");
        if (overlay) overlay.style.display = "none";
        if (sid) openAnimeModal(sid);
        return;
      }

      // 4. Hero Spotlight or Play Button
      var heroTarget = e.target.closest(".hero-floating-card, .btn-play-hero");
      if (heroTarget) {
        var hid = heroTarget.dataset.animeId || state.animeList[state.heroIndex].id;
        if (hid) openAnimeModal(hid);
        return;
      }

      // 5. Hero Add to My List
      if (e.target.closest(".btn-mylist-hero")) {
        var currentHero = state.animeList[state.heroIndex];
        if (currentHero) {
          var addedHero = window.ToonFav.toggle(currentHero);
          window.showToast(addedHero ? "❤️ Added to My List" : "Removed from My List");
        }
        return;
      }

      // 6. Hero Dot Click
      var dot = e.target.closest(".hero-dot");
      if (dot) {
        var dotIdx = parseInt(dot.dataset.heroDot, 10);
        state.heroIndex = dotIdx;
        updateHeroSlide(dotIdx);
        startHeroAutoRotation();
        return;
      }

      // 7. Genre Chips
      var genreChip = e.target.closest("[data-genre-chip]");
      if (genreChip) {
        state.activeGenre = genreChip.dataset.genreChip;
        state.currentPage = 1;
        document.querySelectorAll("[data-genre-chip]").forEach(function(c) { c.classList.remove("active"); });
        genreChip.classList.add("active");
        renderPaginatedGrid();
        return;
      }

      // 8. Language Chips
      var langChip = e.target.closest("[data-lang-chip]");
      if (langChip) {
        state.activeLanguage = langChip.dataset.langChip;
        state.currentPage = 1;
        document.querySelectorAll("[data-lang-chip]").forEach(function(c) { c.classList.remove("active"); });
        langChip.classList.add("active");
        renderPaginatedGrid();
        return;
      }

      // 9. Pagination Clicks
      var pageNumBtn = e.target.closest("[data-page-num]");
      if (pageNumBtn) {
        state.currentPage = parseInt(pageNumBtn.dataset.pageNum, 10);
        renderPaginatedGrid();
        var allSec = document.getElementById("allAnimeShelf");
        if (allSec) allSec.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      var pageNavBtn = e.target.closest("[data-page-nav]");
      if (pageNavBtn) {
        var filtered = getFilteredAnime();
        var totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
        if (pageNavBtn.dataset.pageNav === "prev" && state.currentPage > 1) {
          state.currentPage--;
        } else if (pageNavBtn.dataset.pageNav === "next" && state.currentPage < totalPages) {
          state.currentPage++;
        }
        renderPaginatedGrid();
        var allSec2 = document.getElementById("allAnimeShelf");
        if (allSec2) allSec2.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      // 10. Modal Close
      if (e.target.closest("#modalCloseBtn") || e.target.id === "animeModalBackdrop") {
        closeAnimeModal();
        return;
      }

      // 11. Modal Season Switch
      var seasonTab = e.target.closest(".modal-season-tab");
      if (seasonTab) {
        var sKey = seasonTab.dataset.seasonKey;
        state.activeSeasonKey = sKey;
        document.querySelectorAll(".modal-season-tab").forEach(function(t) { t.classList.remove("active"); });
        seasonTab.classList.add("active");
        if (state.activeAnimeModal && state.activeAnimeModal.seasons) {
          renderModalEpisodes(state.activeAnimeModal.seasons[sKey]);
        }
        return;
      }

      // 12. Modal Episode Select
      var epBtn = e.target.closest(".modal-ep-btn");
      if (epBtn) {
        document.querySelectorAll(".modal-ep-btn").forEach(function(b) { b.classList.remove("active"); });
        epBtn.classList.add("active");
        window.showToast("▶ Loading Episode " + epBtn.dataset.epNum + "...");
        return;
      }

      // 13. Server Selector Tab
      var srvBtn = e.target.closest(".server-tab-btn");
      if (srvBtn) {
        document.querySelectorAll(".server-tab-btn").forEach(function(b) { b.classList.remove("active"); });
        srvBtn.classList.add("active");
        window.showToast("Switching to " + srvBtn.textContent.trim());
        return;
      }

      // 14. Telegram Popup Outside Click
      if (e.target.id === "tgPopupOverlay") {
        window.closeTgPopup();
        return;
      }
    });

    // Top Search Input Listener
    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function(e) {
        clearTimeout(state.searchDebounce);
        state.searchDebounce = setTimeout(function() {
          executeSearch(e.target.value);
        }, 220);
      });
      searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
          var overlay = document.getElementById("searchResultsOverlay");
          if (overlay) overlay.style.display = "none";
        }
      });
    }

    var searchGoBtn = document.getElementById("searchGoBtn");
    if (searchGoBtn && searchInput) {
      searchGoBtn.addEventListener("click", function() {
        executeSearch(searchInput.value);
      });
    }

    // Advanced Filter Toggle
    var filterTrigger = document.getElementById("filterAccordionTrigger");
    var filterBody = document.getElementById("filterAccordionBody");
    if (filterTrigger && filterBody) {
      filterTrigger.addEventListener("click", function() {
        filterBody.classList.toggle("open");
      });
    }

    var applyFilterBtn = document.getElementById("applyFilterBtn");
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", function() {
        state.filterYear = document.getElementById("filterYearSelect").value;
        state.filterRating = document.getElementById("filterRatingSelect").value;
        state.currentPage = 1;
        renderPaginatedGrid();
        window.showToast("✅ Filters Applied");
        if (filterBody) filterBody.classList.remove("open");
      });
    }

    var resetFilterBtn = document.getElementById("resetFilterBtn");
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", function() {
        document.getElementById("filterYearSelect").value = "All";
        document.getElementById("filterRatingSelect").value = "All";
        state.filterYear = "All";
        state.filterRating = "All";
        state.activeGenre = "All";
        state.activeLanguage = "All";
        state.currentPage = 1;
        renderGenreChips();
        renderLanguageChips();
        renderPaginatedGrid();
        window.showToast("🔄 Filters Reset");
        if (filterBody) filterBody.classList.remove("open");
      });
    }

    // Scroll Header Tint Effect
    window.addEventListener("scroll", function() {
      var header = document.querySelector(".top-header");
      if (header) {
        if (window.scrollY > 20) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // ═══ INITIALIZE ═══
  document.addEventListener("DOMContentLoaded", function() {
    console.log("⚡ Kyami Animes India 60FPS Engine Activated");
    attachEventDelegation();
    renderAllSections();
    initFirebaseSync();
    initTelegramPopup();
  });

})();
