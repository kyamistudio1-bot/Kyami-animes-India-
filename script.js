// ═══════════════════════════════════════════════════════════════════════════════
// KYAMI ANIMES INDIA — MASTER SCRIPT ENGINE (60FPS)
// High-Speed Animations, Dual-Layer Crossfade Carousel, AniList Public API (Zero Key),
// Admin Spotlight Manager & Full Interactive Player Engine
// ═══════════════════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🎨 MASTER ANIME DATABASE & IMAGE CONFIGURATION
  // -----------------------------------------------------------------------------
  // TO CHANGE OR ADD POSTERS & BACKDROP BANNERS:
  // 👉 'poster': Vertical 2:3 cover image for cards and spotlight (e.g. 600x900)
  // 👉 'banner': High-res 16:9 landscape backdrop image for hero blurred background
  // All URLs below are verified official high-resolution anime artwork assets.
  // ═══════════════════════════════════════════════════════════════════════════════
  var CURATED_FALLBACK_ANIME = [
    {
      id: "demon-slayer-hashira",
      title: "Demon Slayer: Hashira Training Arc",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166240-YdxoEhrfwNk0.jpg",
      rating: "9.1",
      year: "2024",
      genres: "Action, Supernatural, Historical",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 08",
      top10: 1,
      description: "Tanjiro visits the Stone Hashira, Himejima, who intends to prepare him for the battles to come in the ultimate Infinity Castle showdown.",
      trailer: "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1",
      seasons: {
        "Season_1": {
          "ep_1": { number: 1, title: "To Defeat Muzan Kibutsuji", streaming: "https://www.youtube.com/embed/to2lh1oYqU4", telegram: "https://t.me/Anime_hindizone" },
          "ep_2": { number: 2, title: "Water Hashira Giyu Tomioka's Pain", streaming: "https://www.youtube.com/embed/to2lh1oYqU4", telegram: "https://t.me/Anime_hindizone" }
        }
      }
    },
    {
      id: "solo-leveling",
      title: "Solo Leveling (Season 2: Arise)",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-37yfQA3ym8PA.jpg",
      rating: "9.3",
      year: "2024",
      genres: "Action, Fantasy, Adventure",
      language: "Hindi Dubbed",
      status: "ongoing",
      totalEp: "Ep: 12",
      top10: 2,
      description: "In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo awakens as the Shadow Monarch.",
      trailer: "https://www.youtube.com/embed/916wT5h6rZc?autoplay=1",
      seasons: {
        "Season_1": {
          "ep_1": { number: 1, title: "I'm Used to It", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" },
          "ep_2": { number: 2, title: "If I Had One More Chance", streaming: "https://www.youtube.com/embed/916wT5h6rZc", telegram: "https://t.me/Anime_hindizone" }
        }
      }
    },
    {
      id: "classroom-of-elite-3",
      title: "Classroom of the Elite Season 3",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146066-zzKl6P6OeEjy.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146066-gxjPUB1ofAO4.jpg",
      rating: "8.8",
      year: "2024",
      genres: "Drama, Psychological, Mystery",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 13",
      top10: 3,
      description: "Kiyotaka Ayanokoji continues his calculated maneuverings in the Tokyo Metropolitan Advanced Nurturing High School.",
      trailer: "https://www.youtube.com/embed/a6R_p6vP_Y8?autoplay=1"
    },
    {
      id: "jujutsu-kaisen-s2",
      title: "Jujutsu Kaisen: Shibuya Incident",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-hSNRJM03pvv1.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-esDtAY2He7sk.jpg",
      rating: "9.4",
      year: "2023",
      genres: "Action, Dark Fantasy, Supernatural",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 23",
      top10: 4,
      description: "On October 31st, a veil descends upon Shibuya. Satoru Gojo is lured into a trap orchestrated by curse users.",
      trailer: "https://www.youtube.com/embed/pkZXflZlqK4?autoplay=1"
    },
    {
      id: "mushoku-tensei-s2",
      title: "Mushoku Tensei: Jobless Reincarnation S2",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg",
      rating: "8.9",
      year: "2024",
      genres: "Adventure, Fantasy, Isekai",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 24",
      top10: 5,
      description: "Rudeus Greyrat enters Ranoa Magic Academy looking for clues regarding the Teleportation Incident and his mother.",
      trailer: "https://www.youtube.com/embed/5aGZc6YJ4xY?autoplay=1"
    },
    {
      id: "one-piece-egghead",
      title: "One Piece: Egghead Island Arc",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
      rating: "9.5",
      year: "2024",
      genres: "Action, Adventure, Shounen",
      language: "Hindi Subbed",
      status: "ongoing",
      totalEp: "Ep: Ongoing",
      top10: 6,
      description: "The Straw Hat Pirates arrive at Egghead, the Island of the Future, uncovering secrets of the Void Century.",
      trailer: "https://www.youtube.com/embed/MCb13lbKpsk?autoplay=1"
    },
    {
      id: "bleach-tybw",
      title: "BLEACH: Thousand-Year Blood War",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116674-l2YlIyJzvGSV.jpg",
      rating: "9.2",
      year: "2024",
      genres: "Action, Supernatural, Shounen",
      language: "Hindi Dubbed",
      status: "ongoing",
      totalEp: "Ep: 13",
      top10: 7,
      description: "The Quincy empire, the Wandenreich, declares war against the Soul Society as Yhwach seeks to reshape the realms.",
      trailer: "https://www.youtube.com/embed/916wT5h6rZc?autoplay=1"
    },
    {
      id: "the-ramparts-of-ice",
      title: "The Ramparts of Ice Season 2",
      poster: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx166742-io6yR2XeJiEh.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/166742-KqQyYzV8QQbk.jpg",
      rating: "8.4",
      year: "2024",
      genres: "Drama, Romance, School",
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
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151117-AOcwR3mXCDx7.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151117-6rtgumwWfoju.jpg",
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
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131680-gjs8mMQPmkOQ.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131680-6jyC01S1Gila.jpg",
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
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-SUo3ZQuCbYhJ.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21519-1ayMXgNlmByb.jpg",
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
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx199-sWefXJvXkDOb.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/199-Sm2RU5PSqw7T.jpg",
      rating: "9.1",
      year: "2001",
      genres: "Adventure, Supernatural, Classic",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "MOVIE",
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
      trailer: "https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1"
    },
    {
      id: "attack-on-titan-final",
      title: "Attack on Titan: The Final Season",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-sKUNXAsWMNFw.jpg",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110277-iuGn6F5bK1U1.jpg",
      rating: "9.4",
      year: "2023",
      genres: "Action, Dark Fantasy, Drama",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 28",
      description: "The battle for humanity's future reaches its tragic conclusion as Eren Yeager initiates the Rumbling.",
      trailer: "https://www.youtube.com/embed/M_OauHnAFc8?autoplay=1"
    },
    {
      id: "naruto-shippuden",
      title: "Naruto: Shippuden",
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-kGfVm0YqCPcu.png",
      banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1735.jpg",
      rating: "8.7",
      year: "2017",
      genres: "Action, Adventure, Martial Arts",
      language: "Hindi Dubbed",
      status: "finished",
      totalEp: "Ep: 500",
      description: "Naruto Uzumaki returns to the Hidden Leaf Village older and stronger, preparing to face the Akatsuki.",
      trailer: "https://www.youtube.com/embed/1dyn2Dvxw0U?autoplay=1"
    }
  ];

  // ═══ GLOBAL UTILITIES & SAFE STORAGE HELPERS ═══
  var STORAGE_KEYS = {
    FAV: "kyami_anime_favorites",
    HISTORY: "toonflix_history",
    USER: "kyami_anime_user",
    THEME: "kyami_anime_theme",
    LANG: "kyami_anime_lang",
    RATINGS: "kyami_anime_ratings",
    TG_POPUP: "kyami_tg_popup_timestamp",
    SPOTLIGHT_CUSTOM: "kyami_spotlight_custom_list"
  };

  window.ToonFav = window.ToonFav || {
    get: function() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAV) || "[]"); }
      catch (e) { return []; }
    },
    isFav: function(id) {
      return this.get().some(function(item) {
        return item.id === String(id) || (typeof item === "string" && item === String(id));
      });
    },
    toggle: function(anime) {
      if (!anime) return false;
      var idStr = typeof anime === "string" ? anime : String(anime.id);
      var list = this.get();
      var idx = list.findIndex(function(x) {
        return (typeof x === "object" ? x.id : x) === idStr;
      });
      var added = false;
      if (idx > -1) {
        list.splice(idx, 1);
        added = false;
      } else {
        list.unshift(typeof anime === "object" ? {
          id: idStr,
          title: anime.title || "Untitled",
          poster: anime.poster || "",
          rating: anime.rating || "8.0",
          year: anime.year || ""
        } : { id: idStr });
        added = true;
      }
      localStorage.setItem(STORAGE_KEYS.FAV, JSON.stringify(list));
      return added;
    },
    toggleFav: function(id) {
      var anime = state.animeList.find(function(x) { return x.id === id; }) || { id: id };
      return this.toggle(anime);
    }
  };

  window.ToonTheme = window.ToonTheme || {
    get: function() { return localStorage.getItem(STORAGE_KEYS.THEME) || "dark"; },
    toggle: function() {
      var cur = this.get();
      var next = cur === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      document.body.classList.toggle("light-theme", next === "light");
      return next;
    }
  };

  window.ToonLang = window.ToonLang || {
    get: function() { return localStorage.getItem(STORAGE_KEYS.LANG) || "hi"; },
    toggle: function() {
      var cur = this.get();
      var next = cur === "hi" ? "en" : "hi";
      localStorage.setItem(STORAGE_KEYS.LANG, next);
      if (window.showToast) window.showToast(next === "hi" ? "🌐 भाषा: हिंदी" : "🌐 Language: English");
      return next;
    }
  };

  // ═══ STATE ENGINE ═══
  var state = {
    animeList: loadSavedSpotlights(),
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
    activeSeasonKey: null,
    adminAniListResults: [],
    selectedAdminAnime: null
  };

  function loadSavedSpotlights() {
    try {
      var custom = JSON.parse(localStorage.getItem(STORAGE_KEYS.SPOTLIGHT_CUSTOM) || "null");
      if (Array.isArray(custom) && custom.length > 0) {
        var baseMap = new Map();
        CURATED_FALLBACK_ANIME.forEach(function(item) { baseMap.set(item.id, item); });
        custom.forEach(function(cItem) {
          if (cItem && cItem.id) baseMap.set(cItem.id, Object.assign({}, baseMap.get(cItem.id) || {}, cItem));
        });
        return Array.from(baseMap.values());
      }
    } catch (e) {}
    return [...CURATED_FALLBACK_ANIME];
  }

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

  // ═══════════════════════════════════════════════════════════════════════════════
  // 🚀 1. ANILIST PUBLIC GRAPHQL API CLIENT (ZERO API KEYS REQUIRED)
  // -----------------------------------------------------------------------------
  // Completely public and open CORS endpoint: https://graphql.anilist.co
  // Automatically fetches high-resolution 16:9 banners, 2:3 posters, metadata
  // ═══════════════════════════════════════════════════════════════════════════════
  var ANILIST_GRAPHQL_ENDPOINT = "https://graphql.anilist.co";
  var ANILIST_SEARCH_QUERY = `
    query ($search: String) {
      Page(page: 1, perPage: 8) {
        media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            english
            romaji
            native
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          description(asHtml: false)
          episodes
          seasonYear
          genres
          averageScore
          status
          format
        }
      }
    }
  `;

  function searchAniListAPI(query, callback) {
    if (!query || query.trim().length < 2) {
      if (callback) callback([]);
      return;
    }
    fetch(ANILIST_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query: ANILIST_SEARCH_QUERY,
        variables: { search: query.trim() }
      })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data && data.data && data.data.Page && data.data.Page.media) {
        var results = data.data.Page.media.map(function(m) {
          var cleanTitle = m.title.english || m.title.romaji || m.title.native || "Untitled";
          var cleanDesc = m.description ? m.description.replace(/<[^>]*>?/gm, '').trim() : "";
          var cleanScore = m.averageScore ? (m.averageScore / 10).toFixed(1) : "8.5";
          var epCount = m.episodes ? ("Ep: " + (m.episodes < 10 ? "0" + m.episodes : m.episodes)) : (m.format === "MOVIE" ? "MOVIE" : "Ep: 12");
          return {
            id: "anilist-" + m.id,
            title: cleanTitle,
            poster: (m.coverImage && (m.coverImage.extraLarge || m.coverImage.large || m.coverImage.medium)) || "",
            banner: m.bannerImage || (m.coverImage && m.coverImage.extraLarge) || "",
            rating: cleanScore,
            year: m.seasonYear ? String(m.seasonYear) : "2024",
            genres: (m.genres && m.genres.length) ? m.genres.slice(0, 3).join(", ") : "Action, Adventure",
            status: m.status ? m.status.toLowerCase() : "finished",
            totalEp: epCount,
            description: cleanDesc || "Watch high-definition anime streaming with dual audio on Kyami Animes India.",
            rawCoverImages: m.coverImage,
            rawBannerImage: m.bannerImage
          };
        });
        if (callback) callback(results);
      } else {
        if (callback) callback([]);
      }
    })
    .catch(function(err) {
      console.warn("AniList API search failed:", err);
      if (callback) callback([]);
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // ⚙️ 2. ADMIN SPOTLIGHT MANAGER CONTROLLER & LIVE PREVIEW BOX
  // ═══════════════════════════════════════════════════════════════════════════════
  window.openSpotlightManager = function() {
    var modal = document.getElementById("adminSpotlightModal");
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Set initial live preview to current active hero spotlight anime
    var currentHero = state.animeList[state.heroIndex] || state.animeList[0];
    if (currentHero) {
      selectAnimeForPreview(currentHero);
    }
    renderActiveQueueList();
  };

  window.closeSpotlightManager = function() {
    var modal = document.getElementById("adminSpotlightModal");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  function selectAnimeForPreview(anime) {
    if (!anime) return;
    state.selectedAdminAnime = Object.assign({}, anime);

    var previewBackdrop = document.getElementById("previewBackdrop");
    var previewPosterImg = document.getElementById("previewPosterImg");
    var previewTitle = document.getElementById("previewTitle");
    var previewGenres = document.getElementById("previewGenres");
    var previewEpTag = document.getElementById("previewEpTag");

    var bannerInput = document.getElementById("spotlightBannerInput");
    var posterInput = document.getElementById("spotlightPosterInput");
    var titleInput = document.getElementById("spotlightTitleInput");
    var metaInput = document.getElementById("spotlightMetaInput");

    var safeBanner = anime.banner || anime.poster;
    var safePoster = anime.poster || safeBanner;

    if (previewBackdrop) previewBackdrop.style.backgroundImage = 'url("' + safeBanner + '")';
    if (previewPosterImg) previewPosterImg.src = safePoster;
    if (previewTitle) previewTitle.textContent = anime.title;
    if (previewGenres) previewGenres.textContent = anime.genres + " • " + (anime.year || "2024");
    if (previewEpTag) previewEpTag.textContent = anime.totalEp || "Total Ep: 12";

    if (bannerInput) bannerInput.value = safeBanner;
    if (posterInput) posterInput.value = safePoster;
    if (titleInput) titleInput.value = anime.title;
    if (metaInput) metaInput.value = anime.genres + " • " + (anime.totalEp || "Ep: 12");

    // Populate Asset Gallery Chips (Banners & Posters)
    renderAssetGallery(anime);
  }

  function renderAssetGallery(anime) {
    var galleryWrap = document.getElementById("spotlightAssetGallery");
    var chipsRow = document.getElementById("assetChipsRow");
    if (!galleryWrap || !chipsRow) return;

    var assets = [];
    if (anime.banner) assets.push({ label: "High-Res Banner (16:9)", url: anime.banner, type: "banner" });
    if (anime.rawBannerImage && anime.rawBannerImage !== anime.banner) {
      assets.push({ label: "Original AniList Banner", url: anime.rawBannerImage, type: "banner" });
    }
    if (anime.poster) assets.push({ label: "Official Poster (2:3)", url: anime.poster, type: "poster" });
    if (anime.rawCoverImages) {
      if (anime.rawCoverImages.extraLarge && anime.rawCoverImages.extraLarge !== anime.poster) {
        assets.push({ label: "Extra Large Cover", url: anime.rawCoverImages.extraLarge, type: "poster" });
      }
      if (anime.rawCoverImages.large && anime.rawCoverImages.large !== anime.poster) {
        assets.push({ label: "Alternate Large Cover", url: anime.rawCoverImages.large, type: "poster" });
      }
    }

    if (!assets.length) {
      galleryWrap.style.display = "none";
      return;
    }

    galleryWrap.style.display = "block";
    chipsRow.innerHTML = assets.map(function(asset) {
      return (
        '<button class="asset-chip-btn" data-asset-url="' + asset.url + '" data-asset-type="' + asset.type + '">' +
          '<img class="asset-chip-thumb" src="' + asset.url + '" alt="' + asset.label + '">' +
          '<span>' + asset.label + '</span>' +
        '</button>'
      );
    }).join("");
  }

  function renderActiveQueueList() {
    var listEl = document.getElementById("queueCardsList");
    if (!listEl) return;
    var queue = state.animeList.slice(0, 5);
    listEl.innerHTML = queue.map(function(item, idx) {
      return (
        '<div class="queue-mini-card">' +
          '<img src="' + item.poster + '" alt="' + item.title + '">' +
          '<span>#' + (idx + 1) + ' ' + item.title.slice(0, 18) + (item.title.length > 18 ? '...' : '') + '</span>' +
          (idx > 0 ? '<button class="queue-remove-btn" data-remove-queue-id="' + item.id + '" title="Remove from spotlight">✕</button>' : '') +
        '</div>'
      );
    }).join("");
  }

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
          
          var mergedMap = new Map();
          CURATED_FALLBACK_ANIME.forEach(function(item) { 
            mergedMap.set(item.id, Object.assign({}, item)); 
          });

          liveList.forEach(function(liveItem) {
            if (!liveItem || !liveItem.id) return;
            var fallback = mergedMap.get(liveItem.id);
            if (fallback) {
              var safePoster = (liveItem.poster && typeof liveItem.poster === "string" && liveItem.poster.trim().length > 10 && !liveItem.poster.includes("unsplash.com")) 
                ? liveItem.poster.trim() 
                : fallback.poster;
              
              var safeBanner = (liveItem.banner && typeof liveItem.banner === "string" && liveItem.banner.trim().length > 10 && !liveItem.banner.includes("unsplash.com")) 
                ? liveItem.banner.trim() 
                : (fallback.banner || fallback.poster);

              var merged = Object.assign({}, fallback, liveItem, {
                poster: safePoster,
                banner: safeBanner,
                title: liveItem.title || fallback.title,
                rating: liveItem.rating || fallback.rating,
                genres: liveItem.genres || fallback.genres,
                language: liveItem.language || fallback.language,
                status: liveItem.status || fallback.status,
                totalEp: liveItem.totalEp || fallback.totalEp,
                description: liveItem.description || fallback.description
              });
              mergedMap.set(liveItem.id, merged);
            } else {
              if (!liveItem.poster || liveItem.poster.includes("unsplash.com") || liveItem.poster.trim().length < 10) {
                liveItem.poster = CURATED_FALLBACK_ANIME[0].poster;
              }
              if (!liveItem.banner || liveItem.banner.includes("unsplash.com") || liveItem.banner.trim().length < 10) {
                liveItem.banner = CURATED_FALLBACK_ANIME[0].banner;
              }
              mergedMap.set(liveItem.id, liveItem);
            }
          });

          state.animeList = Array.from(mergedMap.values());
          renderAllSections();
        }
      });
    } catch (err) {
      console.warn("Firebase sync running with offline fallback:", err);
    }
  }

  // ═══ 3. FLEXIBLE ANIME CARD BUILDER (16:10 WIDESCREEN & 2:3 PORTRAIT) ═══
  function buildAnimeCardHTML(anime, rank, isLandscape) {
    var isOngoing = anime.status === "ongoing" || (anime.totalEp && anime.totalEp.toLowerCase().includes("ongoing"));
    var statusClass = isOngoing ? "ongoing" : "finished";
    var statusLabel = isOngoing ? "ONGOING" : "FINISHED";
    var ratingVal = anime.rating || "8.5";
    var epLabel = anime.totalEp || (anime.episodes ? "Ep: " + Object.keys(anime.episodes).length : "Ep: 12");
    var genrePrimary = (anime.genres || "Anime").split(",")[0].trim();
    var isFav = window.ToonFav.isFav(anime.id);

    // If landscape mode (New Releases shelf), use 16:10 banner
    var imgUrl = isLandscape 
      ? ((anime.banner && !anime.banner.includes("unsplash.com")) ? anime.banner : anime.poster)
      : ((anime.poster && !anime.poster.includes("unsplash.com")) ? anime.poster : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png");

    var cardBoxClass = "anime-card-box gpu-layer" + (isLandscape ? " anime-card-landscape" : "");

    return (
      '<div class="' + cardBoxClass + '" data-anime-id="' + anime.id + '">' +
        (rank ? '<span class="top10-rank-pill">' + rank + '</span>' : '') +
        '<span class="card-badge-status ' + statusClass + '">' + statusLabel + '</span>' +
        '<span class="card-badge-rating ' + (parseFloat(ratingVal) >= 8.5 ? 'gold' : '') + '">' +
          '⭐ ' + ratingVal +
        '</span>' +
        '<button class="card-fav-action ' + (isFav ? 'active' : '') + '" data-fav-id="' + anime.id + '" title="Add to My List">' +
          (isFav ? '❤️' : '🤍') +
        '</button>' +
        '<div class="card-poster-wrap skeleton">' +
          '<img class="card-poster-img" src="' + imgUrl + '" loading="lazy" alt="' + (anime.title || "Anime") + '" onload="this.parentElement.classList.remove(\'skeleton\')" onerror="this.src=\'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png\'">' +
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

  // ═══ 4. DUAL-LAYER CROSSFADE HERO CAROUSEL CONTROLLER (60FPS) ═══
  function updateHeroSlide(index) {
    if (!state.animeList.length) return;
    var heroList = state.animeList.slice(0, 5);
    var item = heroList[index % heroList.length];
    if (!item) return;

    var layerA = document.getElementById("heroBackdropA");
    var layerB = document.getElementById("heroBackdropB");
    var contentWrap = document.getElementById("heroContentWrap");
    var titleAreaEl = document.getElementById("heroTitleArea");
    var spotlightCard = document.getElementById("heroSpotlightCard");
    var spotlightImg = document.getElementById("heroSpotlightImg");
    var spotlightEp = document.getElementById("heroSpotlightEp");
    var titleEl = document.getElementById("heroAnimeTitle");
    var genresEl = document.getElementById("heroAnimeGenres");
    var playBtn = document.getElementById("heroPlayAction");
    var dotsContainer = document.getElementById("heroIndicatorDots");

    var nextBanner = (item.banner && !item.banner.includes("unsplash.com")) 
      ? item.banner 
      : item.poster;

    // Dual-Layer Crossfade Dissolve
    if (layerA && layerB) {
      var isACurrent = layerA.classList.contains("active");
      var incomingLayer = isACurrent ? layerB : layerA;
      var outgoingLayer = isACurrent ? layerA : layerB;

      var preloader = new Image();
      preloader.onload = function() {
        incomingLayer.style.backgroundImage = 'url("' + nextBanner + '")';
        incomingLayer.classList.add("active");
        outgoingLayer.classList.remove("active");
      };
      preloader.onerror = function() {
        incomingLayer.style.backgroundImage = 'url("' + item.poster + '")';
        incomingLayer.classList.add("active");
        outgoingLayer.classList.remove("active");
      };
      preloader.src = nextBanner;
    }

    // Synchronized Kinematic Slide Animations (Video Editor Keyframe Physics)
    if (contentWrap) {
      contentWrap.classList.remove("slide-animate");
      void contentWrap.offsetWidth; // Force reflow
      contentWrap.classList.add("slide-animate");
    }
    if (titleAreaEl) {
      titleAreaEl.classList.remove("animating");
      void titleAreaEl.offsetWidth;
      titleAreaEl.classList.add("animating");
    }
    if (spotlightCard) {
      spotlightCard.classList.remove("animating");
      void spotlightCard.offsetWidth;
      spotlightCard.classList.add("animating");
    }

    if (spotlightImg) {
      spotlightImg.src = item.poster;
    }
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
    renderBrowseGridIfPresent();
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
        return buildAnimeCardHTML(item, null, false);
      }).join("");
    } catch (e) {
      shelf.style.display = "none";
    }
  }

  // ── New Releases uses distinct 16:10 widescreen landscape cards ──
  function renderNewReleases() {
    var el = document.getElementById("newReleasesGrid");
    if (!el) return;
    var list = [...state.animeList]
      .sort(function(a, b) { return (b.year || 0) - (a.year || 0); })
      .slice(0, 10);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null, true); }).join("");
  }

  // ── Top Hits uses 2:3 portrait cards with rank pill ──
  function renderTopHits() {
    var el = document.getElementById("topHitsGrid");
    if (!el) return;
    var list = [...state.animeList]
      .sort(function(a, b) { return parseFloat(b.rating || 0) - parseFloat(a.rating || 0); })
      .slice(0, 10);
    el.innerHTML = list.map(function(item, idx) { return buildAnimeCardHTML(item, idx + 1, false); }).join("");
  }

  // ── Popular uses standard 2:3 portrait cards ──
  function renderPopular() {
    var el = document.getElementById("popularGrid");
    if (!el) return;
    var list = state.animeList.slice(2, 12);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null, false); }).join("");
  }

  // ── Top Movies uses standard 2:3 portrait cards ──
  function renderTopMovies() {
    var el = document.getElementById("topMoviesGrid");
    if (!el) return;
    var list = state.animeList.filter(function(x) {
      return (x.totalEp && x.totalEp.toUpperCase().includes("MOVIE")) || (x.format && x.format.toUpperCase() === "MOVIE");
    });
    if (!list.length) list = state.animeList.slice(0, 6);
    el.innerHTML = list.map(function(item) { return buildAnimeCardHTML(item, null, false); }).join("");
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

  // ═══ FILTER & PAGINATE BROWSE PAGE (ANIME.HTML) ═══
  function getFilteredAnime() {
    return state.animeList.filter(function(a) {
      if (state.activeGenre !== "All") {
        if (!(a.genres || "").toLowerCase().includes(state.activeGenre.toLowerCase())) return false;
      }
      if (state.activeLanguage !== "All") {
        if (!(a.language || "Hindi").toLowerCase().includes(state.activeLanguage.toLowerCase())) return false;
      }
      if (state.filterYear !== "All") {
        if (String(a.year || "") !== state.filterYear) return false;
      }
      if (state.filterRating !== "All") {
        if (parseFloat(a.rating || 0) < parseFloat(state.filterRating)) return false;
      }
      return true;
    });
  }

  function renderBrowseGridIfPresent() {
    var grid = document.getElementById("allAnimeMainGrid") || document.getElementById("browseAnimeGrid") || document.getElementById("allCardsGrid");
    var pagination = document.getElementById("animePagination") || document.getElementById("paginationControls");
    var countPill = document.getElementById("browseTotalCount") || document.getElementById("browseCountPill");
    if (!grid) return;

    var filtered = getFilteredAnime();
    if (countPill) countPill.textContent = filtered.length + " Animes Available";

    var totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
    if (state.currentPage > totalPages) state.currentPage = 1;

    var start = (state.currentPage - 1) * state.pageSize;
    var pageItems = filtered.slice(start, start + state.pageSize);

    if (!pageItems.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:var(--text-muted);">' +
        '<p style="font-size:1.15rem;font-weight:700;color:#fff;">Koi anime nahi mila</p>' +
        '<p style="font-size:0.85rem;margin-top:6px;">Filters change karein ya search bar me naya naam daalein.</p>' +
      '</div>';
    } else {
      grid.innerHTML = pageItems.map(function(item) {
        return buildAnimeCardHTML(item, null, false);
      }).join("");
    }

    if (pagination) {
      var html = '<button class="page-btn" ' + (state.currentPage === 1 ? 'disabled' : '') + ' data-page="' + (state.currentPage - 1) + '">‹ Prev</button>';
      for (var p = 1; p <= totalPages; p++) {
        html += '<button class="page-btn ' + (p === state.currentPage ? 'active' : '') + '" data-page="' + p + '">' + p + '</button>';
      }
      html += '<button class="page-btn ' + (state.currentPage === totalPages ? 'disabled' : '') + ' data-page="' + (state.currentPage + 1) + '">Next ›</button>';
      pagination.innerHTML = html;
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
      var posterUrl = (a.poster && !a.poster.includes("unsplash.com")) 
        ? a.poster 
        : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png";
      return (
        '<div class="search-mini-card" data-anime-id="' + a.id + '">' +
          '<img src="' + posterUrl + '" alt="' + (a.title || '') + '">' +
          '<div class="search-mini-info">' +
            '<h4>' + (a.title || 'Untitled') + '</h4>' +
            '<p>⭐ ' + (a.rating || '8.0') + ' • ' + (a.year || '') + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  // ═══ INTERACTIVE ANIME WATCH MODAL ═══
  function openAnimeModal(animeId, requestedEp) {
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
    var teleBtn = document.getElementById("modalTgBtn");

    if (title) title.textContent = anime.title || "Anime Player";
    if (poster) poster.src = anime.poster || "";
    if (desc) desc.textContent = anime.description || "Enjoy high-definition Hindi Dubbed audio on Kyami Animes India.";
    if (iframe) iframe.src = anime.trailer || "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1";
    if (teleBtn) teleBtn.href = anime.telegram || "https://t.me/Anime_hindizone";

    if (tags) {
      tags.innerHTML = [
        anime.year ? '<span class="modal-tag">📅 ' + anime.year + '</span>' : '',
        anime.rating ? '<span class="modal-tag">⭐ ' + anime.rating + '</span>' : '',
        '<span class="modal-tag">📢 ' + (anime.language || 'Hindi Dubbed') + '</span>',
        '<span class="modal-tag">HD 1080p</span>'
      ].join("");
    }

    var seasons = anime.seasons || {
      "Season_1": {
        "ep_1": { number: 1, title: "Episode 1", streaming: anime.trailer || "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1" },
        "ep_2": { number: 2, title: "Episode 2", streaming: anime.trailer || "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1" },
        "ep_3": { number: 3, title: "Episode 3", streaming: anime.trailer || "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1" }
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

    renderModalEpisodes(seasons[state.activeSeasonKey], requestedEp || 1);

    try {
      var hist = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || "[]");
      hist = hist.filter(function(h) { return h.id !== anime.id; });
      hist.unshift({
        id: anime.id,
        title: anime.title,
        poster: anime.poster,
        rating: anime.rating,
        year: anime.year,
        totalEp: anime.totalEp || "EP 1",
        genres: anime.genres
      });
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(hist.slice(0, 15)));
      renderContinueWatching();
    } catch (e) {}

    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function renderModalEpisodes(episodesObj, activeEpNum) {
    var epGrid = document.getElementById("modalEpisodesGrid");
    var iframe = document.getElementById("modalPlayerIframe");
    if (!epGrid || !episodesObj) return;

    var eps = Object.values(episodesObj);
    if (!eps.length) {
      epGrid.innerHTML = '<p style="color:var(--text-muted);font-size:0.82rem;padding:12px;">Is season me koi episode nahi hai.</p>';
      return;
    }

    epGrid.innerHTML = eps.map(function(ep) {
      var num = ep.number || 1;
      var isCurrent = num === (activeEpNum || 1);
      return (
        '<button class="modal-ep-btn ' + (isCurrent ? 'active' : '') + '" data-ep-num="' + num + '" data-stream-url="' + (ep.streaming || "") + '">' +
          '<span>Ep ' + num + '</span>' +
          '<span>' + (ep.title || ('Episode ' + num)) + '</span>' +
        '</button>'
      );
    }).join("");

    var currentEp = eps.find(function(e) { return e.number === (activeEpNum || 1); }) || eps[0];
    if (iframe && currentEp && currentEp.streaming) {
      iframe.src = currentEp.streaming;
    }
  }

  function closeAnimeModal() {
    var modal = document.getElementById("animeModalBackdrop");
    var iframe = document.getElementById("modalPlayerIframe");
    if (iframe) iframe.src = "";
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
    state.activeAnimeModal = null;
  }

  window.openWatchModal = openAnimeModal;
  window.closeWatchModal = closeAnimeModal;

  // ═══ SOCIAL SHARE ENGINE ═══
  window.sharePlatform = function(platform) {
    var title = encodeURIComponent("Watch anime in Hindi Dubbed on Kyami Animes India! 🔥");
    var url = encodeURIComponent(window.location.origin + window.location.pathname);

    switch(platform) {
      case "whatsapp":
        window.open("https://api.whatsapp.com/send?text=" + title + "%20" + url, "_blank");
        break;
      case "telegram":
        window.open("https://t.me/share/url?url=" + url + "&text=" + title, "_blank");
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

  // ═══ TELEGRAM JOIN POPUP ═══
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
    }, 3800);
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
        if (animeId) openAnimeModal(animeId, 1);
        return;
      }

      // 3. Search Result Mini-Card
      var searchCard = e.target.closest(".search-mini-card");
      if (searchCard) {
        var sid = searchCard.dataset.animeId;
        var overlay = document.getElementById("searchResultsOverlay");
        if (overlay) overlay.style.display = "none";
        if (sid) openAnimeModal(sid, 1);
        return;
      }

      // 4. Hero Spotlight Card Click
      var heroCard = e.target.closest("#heroSpotlightCard");
      if (heroCard) {
        var hcId = heroCard.dataset.animeId || state.animeList[state.heroIndex].id;
        if (hcId) openAnimeModal(hcId, 1);
        return;
      }

      // 5. Hero Action: Play Now
      var heroPlay = e.target.closest("#heroPlayAction");
      if (heroPlay) {
        var aId = heroPlay.dataset.animeId || state.animeList[state.heroIndex].id;
        if (aId) openAnimeModal(aId, 1);
        return;
      }

      // 6. Hero Add to My List
      if (e.target.closest("#heroMyListAction")) {
        var currentHero = state.animeList[state.heroIndex];
        if (currentHero) {
          var addedHero = window.ToonFav.toggle(currentHero);
          window.showToast(addedHero ? "❤️ Added to My List" : "Removed from My List");
        }
        return;
      }

      // 7. Hero Dot Click
      var dot = e.target.closest(".hero-dot");
      if (dot) {
        var dotIdx = parseInt(dot.dataset.heroDot, 10);
        state.heroIndex = dotIdx;
        updateHeroSlide(dotIdx);
        startHeroAutoRotation();
        return;
      }

      // 8. Genre Chips
      var genreChip = e.target.closest("[data-genre-chip]");
      if (genreChip) {
        state.activeGenre = genreChip.dataset.genreChip;
        state.currentPage = 1;
        document.querySelectorAll("[data-genre-chip]").forEach(function(c) { c.classList.remove("active"); });
        genreChip.classList.add("active");
        renderBrowseGridIfPresent();
        return;
      }

      // 9. Pagination Clicks
      var pageBtn = e.target.closest(".page-btn");
      if (pageBtn && !pageBtn.disabled) {
        var targetPage = parseInt(pageBtn.dataset.page, 10);
        if (targetPage && targetPage !== state.currentPage) {
          state.currentPage = targetPage;
          renderBrowseGridIfPresent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
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
          renderModalEpisodes(state.activeAnimeModal.seasons[sKey], 1);
        }
        return;
      }

      // 12. Modal Episode Select
      var epBtn = e.target.closest(".modal-ep-btn");
      if (epBtn) {
        document.querySelectorAll(".modal-ep-btn").forEach(function(b) { b.classList.remove("active"); });
        epBtn.classList.add("active");
        var epNum = epBtn.dataset.epNum;
        var streamUrl = epBtn.dataset.streamUrl;
        var iframe = document.getElementById("modalPlayerIframe");
        if (iframe && streamUrl) iframe.src = streamUrl;
        window.showToast("▶ Loading Episode " + epNum + "...");
        return;
      }

      // 13. Telegram Popup Outside Click
      if (e.target.id === "tgPopupOverlay") {
        window.closeTgPopup();
        return;
      }

      // 14. Admin AniList Card Result Click
      var anilistCard = e.target.closest(".anilist-card-result");
      if (anilistCard) {
        var animeIdx = parseInt(anilistCard.dataset.resultIndex, 10);
        var chosen = state.adminAniListResults[animeIdx];
        if (chosen) {
          selectAnimeForPreview(chosen);
          window.showToast("🖼️ Loaded artwork for " + chosen.title);
        }
        return;
      }

      // 15. Admin Asset Chip Click
      var assetChip = e.target.closest(".asset-chip-btn");
      if (assetChip) {
        var aUrl = assetChip.dataset.assetUrl;
        var aType = assetChip.dataset.assetType;
        document.querySelectorAll(".asset-chip-btn").forEach(function(c) { c.classList.remove("active"); });
        assetChip.classList.add("active");

        if (aType === "banner") {
          var pb = document.getElementById("previewBackdrop");
          var bi = document.getElementById("spotlightBannerInput");
          if (pb) pb.style.backgroundImage = 'url("' + aUrl + '")';
          if (bi) bi.value = aUrl;
        } else {
          var pp = document.getElementById("previewPosterImg");
          var pi = document.getElementById("spotlightPosterInput");
          if (pp) pp.src = aUrl;
          if (pi) pi.value = aUrl;
        }
        window.showToast("✅ Applied asset to preview");
        return;
      }

      // 16. Admin Remove Queue Item
      var remBtn = e.target.closest("[data-remove-queue-id]");
      if (remBtn) {
        var remId = remBtn.dataset.removeQueueId;
        state.animeList = state.animeList.filter(function(x) { return x.id !== remId; });
        saveSpotlightsLocally();
        renderActiveQueueList();
        renderHeroSection();
        window.showToast("🗑️ Removed from spotlight");
        return;
      }
    });

    // ── AniList Search Input Debounce ──
    var anilistInput = document.getElementById("anilistSearchInput");
    var anilistBtn = document.getElementById("anilistSearchBtn");
    var anilistResultsEl = document.getElementById("anilistResultsGrid");

    function runAniListSearch(q) {
      if (!q || q.length < 2) {
        if (anilistResultsEl) anilistResultsEl.style.display = "none";
        return;
      }
      if (anilistResultsEl) {
        anilistResultsEl.style.display = "grid";
        anilistResultsEl.innerHTML = '<p style="color:var(--electric-blue);padding:14px;font-size:0.85rem;">⏳ Fetching from AniList public database...</p>';
      }
      searchAniListAPI(q, function(results) {
        state.adminAniListResults = results;
        if (!results.length) {
          anilistResultsEl.innerHTML = '<p style="color:var(--text-muted);padding:14px;font-size:0.85rem;">Koi anime nahi mila. Try different name.</p>';
          return;
        }
        anilistResultsEl.innerHTML = results.map(function(item, idx) {
          return (
            '<div class="anilist-card-result" data-result-index="' + idx + '">' +
              '<img class="anilist-result-poster" src="' + item.poster + '" alt="' + item.title + '">' +
              '<div class="anilist-result-info">' +
                '<h4 class="anilist-result-title">' + item.title + '</h4>' +
                '<p class="anilist-result-sub">⭐ ' + item.rating + ' • ' + item.year + ' • ' + item.totalEp + '</p>' +
              '</div>' +
            '</div>'
          );
        }).join("");
      });
    }

    if (anilistInput) {
      var anilistDebounce = null;
      anilistInput.addEventListener("input", function(e) {
        clearTimeout(anilistDebounce);
        anilistDebounce = setTimeout(function() {
          runAniListSearch(e.target.value);
        }, 300);
      });
      anilistInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
          e.preventDefault();
          runAniListSearch(anilistInput.value);
        }
      });
    }

    if (anilistBtn && anilistInput) {
      anilistBtn.addEventListener("click", function() {
        runAniListSearch(anilistInput.value);
      });
    }

    // Live Custom Field typing -> updates Live Preview Box
    var bannerInput = document.getElementById("spotlightBannerInput");
    var posterInput = document.getElementById("spotlightPosterInput");
    var titleInput = document.getElementById("spotlightTitleInput");

    if (bannerInput) {
      bannerInput.addEventListener("input", function(e) {
        var pb = document.getElementById("previewBackdrop");
        if (pb && e.target.value.trim().length > 5) {
          pb.style.backgroundImage = 'url("' + e.target.value.trim() + '")';
        }
      });
    }
    if (posterInput) {
      posterInput.addEventListener("input", function(e) {
        var pp = document.getElementById("previewPosterImg");
        if (pp && e.target.value.trim().length > 5) {
          pp.src = e.target.value.trim();
        }
      });
    }
    if (titleInput) {
      titleInput.addEventListener("input", function(e) {
        var pt = document.getElementById("previewTitle");
        if (pt) pt.textContent = e.target.value.trim() || "Anime Title";
      });
    }

    // Apply Button: Set as Primary Hero Spotlight
    var applyBtn = document.getElementById("applySpotlightBtn");
    if (applyBtn) {
      applyBtn.addEventListener("click", function() {
        var bVal = (bannerInput ? bannerInput.value.trim() : "") || (state.selectedAdminAnime ? state.selectedAdminAnime.banner : "");
        var pVal = (posterInput ? posterInput.value.trim() : "") || (state.selectedAdminAnime ? state.selectedAdminAnime.poster : "");
        var tVal = (titleInput ? titleInput.value.trim() : "") || (state.selectedAdminAnime ? state.selectedAdminAnime.title : "Featured Anime");
        var metaVal = document.getElementById("spotlightMetaInput") ? document.getElementById("spotlightMetaInput").value.trim() : "Action, Adventure";

        if (!pVal) {
          window.showToast("⚠️ Please select or provide a poster image URL.");
          return;
        }

        var newSpotlight = {
          id: state.selectedAdminAnime ? state.selectedAdminAnime.id : ("custom-" + Date.now()),
          title: tVal,
          banner: bVal || pVal,
          poster: pVal,
          genres: metaVal.split("•")[0].trim() || "Action, Fantasy",
          totalEp: metaVal.includes("•") ? metaVal.split("•")[1].trim() : "Ep: 12",
          rating: (state.selectedAdminAnime && state.selectedAdminAnime.rating) ? state.selectedAdminAnime.rating : "9.0",
          year: (state.selectedAdminAnime && state.selectedAdminAnime.year) ? state.selectedAdminAnime.year : "2024",
          status: "ongoing",
          description: (state.selectedAdminAnime && state.selectedAdminAnime.description) ? state.selectedAdminAnime.description : "Watch high-definition anime streaming on Kyami Animes India."
        };

        // Place at index 0 of spotlight queue
        state.animeList = state.animeList.filter(function(x) { return x.id !== newSpotlight.id; });
        state.animeList.unshift(newSpotlight);
        state.heroIndex = 0;

        saveSpotlightsLocally();
        updateHeroSlide(0);
        renderActiveQueueList();
        renderAllSections();
        window.closeSpotlightManager();
        window.showToast("🚀 Live Spotlight Updated Successfully!");
      });
    }

    // Add to Queue Button
    var queueBtn = document.getElementById("addQueueSpotlightBtn");
    if (queueBtn) {
      queueBtn.addEventListener("click", function() {
        if (!state.selectedAdminAnime) {
          window.showToast("⚠️ Select an anime from search first.");
          return;
        }
        var target = Object.assign({}, state.selectedAdminAnime);
        state.animeList = state.animeList.filter(function(x) { return x.id !== target.id; });
        state.animeList.splice(1, 0, target);
        saveSpotlightsLocally();
        renderActiveQueueList();
        renderHeroSection();
        window.showToast("➕ Added to Spotlight Carousel Queue!");
      });
    }

    function saveSpotlightsLocally() {
      try {
        localStorage.setItem(STORAGE_KEYS.SPOTLIGHT_CUSTOM, JSON.stringify(state.animeList.slice(0, 8)));
      } catch (e) {}
    }

    // Top Search Input Listener
    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function(e) {
        clearTimeout(state.searchDebounce);
        state.searchDebounce = setTimeout(function() {
          executeSearch(e.target.value);
        }, 180);
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
        var ySel = document.getElementById("filterYearSelect");
        var rSel = document.getElementById("filterRatingSelect");
        if (ySel) state.filterYear = ySel.value;
        if (rSel) state.filterRating = rSel.value;
        state.currentPage = 1;
        renderBrowseGridIfPresent();
        window.showToast("✅ Filters Applied");
        if (filterBody) filterBody.classList.remove("open");
      });
    }

    var resetFilterBtn = document.getElementById("resetFilterBtn");
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", function() {
        var ySel = document.getElementById("filterYearSelect");
        var rSel = document.getElementById("filterRatingSelect");
        if (ySel) ySel.value = "All";
        if (rSel) rSel.value = "All";
        state.filterYear = "All";
        state.filterRating = "All";
        state.activeGenre = "All";
        state.activeLanguage = "All";
        state.currentPage = 1;
        renderGenreChips();
        renderBrowseGridIfPresent();
        window.showToast("🔄 Filters Reset");
        if (filterBody) filterBody.classList.remove("open");
      });
    }

    // ── Multi-Axis Touch Swipe on Hero Spotlight ──
    var heroEl = document.getElementById("heroBenchmarkSection");
    if (heroEl) {
      var startX = 0;
      var startY = 0;
      heroEl.addEventListener("touchstart", function(e) {
        if (e.touches && e.touches[0]) {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        }
      }, { passive: true });
      heroEl.addEventListener("touchend", function(e) {
        if (e.changedTouches && e.changedTouches[0]) {
          var diffX = startX - e.changedTouches[0].clientX;
          var diffY = startY - e.changedTouches[0].clientY;
          if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
              state.heroIndex = (state.heroIndex + 1) % Math.min(state.animeList.length, 5);
            } else {
              state.heroIndex = (state.heroIndex - 1 + Math.min(state.animeList.length, 5)) % Math.min(state.animeList.length, 5);
            }
            updateHeroSlide(state.heroIndex);
            startHeroAutoRotation();
          }
        }
      }, { passive: true });
    }

    // Header Tint on Scroll
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
