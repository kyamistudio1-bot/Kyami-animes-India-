// ═══════════════════════════════════════════════════════════════════════════════
// KYAMI ANIMES INDIA — MASTER SCRIPT ENGINE (60FPS)
// High-Speed Animations, Dynamic Backdrop Carousel & Full Route Integration N
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
      // 👇 LINE 24: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png",
      // 👇 LINE 26: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 48: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png",
      // 👇 LINE 50: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 72: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146066-zzKl6P6OeEjy.jpg",
      // 👇 LINE 74: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 90: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-hSNRJM03pvv1.jpg",
      // 👇 LINE 92: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 108: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
      // 👇 LINE 110: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 126: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg",
      // 👇 LINE 128: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 144: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg",
      // 👇 LINE 146: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 162: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx166742-io6yR2XeJiEh.jpg",
      // 👇 LINE 164: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 180: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151117-AOcwR3mXCDx7.jpg",
      // 👇 LINE 182: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 198: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131680-gjs8mMQPmkOQ.png",
      // 👇 LINE 200: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 216: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-SUo3ZQuCbYhJ.png",
      // 👇 LINE 218: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 234: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx199-sWefXJvXkDOb.jpg",
      // 👇 LINE 236: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 252: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-sKUNXAsWMNFw.jpg",
      // 👇 LINE 254: BACKDROP BANNER URL (Landscape 16:9)
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
      // 👇 LINE 270: POSTER IMAGE URL (Vertical 2:3)
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-kGfVm0YqCPcu.png",
      // 👇 LINE 272: BACKDROP BANNER URL (Landscape 16:9)
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
    TG_POPUP: "kyami_tg_popup_timestamp"
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

  // ═══ FIREBASE REALTIME DB INTEGRATION (SAFEGUARDED AGAINST OVERWRITES) ═══
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
          // Seed map with verified high-resolution fallback records
          CURATED_FALLBACK_ANIME.forEach(function(item) { 
            mergedMap.set(item.id, Object.assign({}, item)); 
          });

          // Carefully merge live records: NEVER allow broken, empty, or unsplash images to overwrite verified art!
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
              // Brand new record strictly from Firebase
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
      console.warn("Firebase sync running with verified offline fallback:", err);
    }
  }

  // ═══ ANIME CARD BUILDER (ZERO-JANK) ═══
  function buildAnimeCardHTML(anime, rank) {
    var isOngoing = anime.status === "ongoing" || (anime.totalEp && anime.totalEp.toLowerCase().includes("ongoing"));
    var statusClass = isOngoing ? "ongoing" : "finished";
    var statusLabel = isOngoing ? "ONGOING" : "FINISHED";
    var ratingVal = anime.rating || "8.5";
    var epLabel = anime.totalEp || (anime.episodes ? "Ep: " + Object.keys(anime.episodes).length : "Ep: 12");
    var genrePrimary = (anime.genres || "Anime").split(",")[0].trim();
    var isFav = window.ToonFav.isFav(anime.id);
    var posterUrl = (anime.poster && !anime.poster.includes("unsplash.com")) 
      ? anime.poster 
      : "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png";

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
          '<img class="card-poster-img" src="' + posterUrl + '" loading="lazy" alt="' + (anime.title || "Anime") + '" onload="this.parentElement.classList.remove(\'skeleton\')" onerror="this.src=\'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png\'">' +
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

  // ═══ HERO CAROUSEL CONTROLLER (KEN BURNS 60FPS AMBIENT BACKDROP) ═══
  function updateHeroSlide(index) {
    if (!state.animeList.length) return;
    var heroList = state.animeList.slice(0, 5);
    var item = heroList[index % heroList.length];
    if (!item) return;

    var backdropLayer = document.querySelector(".hero-backdrop-layer") || document.getElementById("heroBackdropLayer");
    var bgImg = document.getElementById("heroBackdropImg");
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

    // Dual-Update: Set CSS background-image on backdrop container + <img> tag
    if (backdropLayer) {
      backdropLayer.style.backgroundImage = 'url("' + nextBanner + '")';
    }

    if (bgImg) {
      if (bgImg.src !== nextBanner) {
        bgImg.style.opacity = "0.4";
        var preloader = new Image();
        preloader.onload = function() {
          bgImg.src = nextBanner;
          bgImg.style.opacity = "0.92";
        };
        preloader.onerror = function() {
          bgImg.src = item.poster;
          bgImg.style.opacity = "0.92";
        };
        preloader.src = nextBanner;
      }
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
    renderLanguageChips();
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
    var el = document.getElementById("genreChipsScroll") || document.getElementById("genreChipsScrollStrip");
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
        return buildAnimeCardHTML(item, null);
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
    var overlay = document.getElementById("searchResultsOverlay") || document.getElementById("searchOverlayModal");
    var grid = document.getElementById("searchCardsGrid") || document.getElementById("searchOverlayResults");
    var title = document.getElementById("searchResultsHeading");
    if (!overlay || !grid) return;

    var q = (query || "").trim().toLowerCase();
    if (!q) {
      overlay.style.display = "none";
      overlay.classList.remove("active");
      return;
    }

    var matches = state.animeList.filter(function(a) {
      var t = (a.title || "").toLowerCase();
      var g = (a.genres || "").toLowerCase();
      var y = String(a.year || "");
      var l = (a.language || "").toLowerCase();
      var d = (a.description || "").toLowerCase();
      return t.includes(q) || g.includes(q) || y.includes(q) || l.includes(q) || d.includes(q);
    });

    overlay.style.display = "block";
    overlay.classList.add("active");
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

    var modal = document.getElementById("animeModalBackdrop") || document.getElementById("watchModal");
    var iframe = document.getElementById("modalPlayerIframe") || document.getElementById("watchVideoIframe");
    var title = document.getElementById("modalAnimeTitle") || document.getElementById("watchModalTitle");
    var poster = document.getElementById("modalAnimePoster");
    var desc = document.getElementById("modalAnimeDesc");
    var tags = document.getElementById("modalTagsContainer") || document.getElementById("watchMetaGenres");
    var seasonStrip = document.getElementById("modalSeasonStrip") || document.getElementById("watchSeasonsStrip");
    var epGrid = document.getElementById("modalEpisodesGrid") || document.getElementById("watchEpisodesGrid");
    var teleBtn = document.getElementById("watchTelegramBtn");

    if (title) title.textContent = anime.title || "Anime Player";
    if (poster) poster.src = anime.poster || "";
    if (desc) desc.textContent = anime.description || "Enjoy high-definition Hindi Dubbed audio on Kyami Animes India.";
    if (iframe) iframe.src = anime.trailer || "https://www.youtube.com/embed/to2lh1oYqU4?autoplay=1";
    if (teleBtn) teleBtn.href = anime.telegram || "https://t.me/Anime_hindizone";

    if (tags && !document.getElementById("watchMetaGenres")) {
      tags.innerHTML = [
        anime.year ? '<span class="modal-tag">📅 ' + anime.year + '</span>' : '',
        anime.rating ? '<span class="modal-tag">⭐ ' + anime.rating + '</span>' : '',
        '<span class="modal-tag">📢 ' + (anime.language || 'Hindi Dubbed') + '</span>',
        '<span class="modal-tag">HD 1080p</span>'
      ].join("");
    } else if (document.getElementById("watchMetaGenres")) {
      document.getElementById("watchMetaGenres").textContent = (anime.language || "Hindi Dubbed") + " • " + (anime.genres || "Anime");
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
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function renderModalEpisodes(episodesObj, activeEpNum) {
    var epGrid = document.getElementById("modalEpisodesGrid") || document.getElementById("watchEpisodesGrid");
    var iframe = document.getElementById("modalPlayerIframe") || document.getElementById("watchVideoIframe");
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
        '<button class="modal-ep-btn ep-item-btn ' + (isCurrent ? 'active current' : '') + '" data-ep-num="' + num + '" data-stream-url="' + (ep.streaming || "") + '">' +
          '<span class="modal-ep-num">' + num + '</span>' +
          '<span>' + (ep.title || ('Ep ' + num)) + '</span>' +
        '</button>'
      );
    }).join("");

    var currentEp = eps.find(function(e) { return e.number === (activeEpNum || 1); }) || eps[0];
    if (iframe && currentEp && currentEp.streaming) {
      iframe.src = currentEp.streaming;
    }
  }

  function closeAnimeModal() {
    var modal = document.getElementById("animeModalBackdrop") || document.getElementById("watchModal");
    var iframe = document.getElementById("modalPlayerIframe") || document.getElementById("watchVideoIframe");
    if (iframe) iframe.src = "";
    if (modal) {
      modal.classList.remove("active");
      modal.classList.remove("open");
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

  // ═══ TELEGRAM JOIN POPUP (With Cooldown) ═══
  function initTelegramPopup() {
    var lastShown = localStorage.getItem(STORAGE_KEYS.TG_POPUP);
    var cooldown = 24 * 60 * 60 * 1000;
    if (lastShown && (Date.now() - parseInt(lastShown, 10)) < cooldown) return;

    setTimeout(function() {
      var overlay = document.getElementById("tgPopupOverlay") || document.getElementById("telegramPopupModal");
      if (overlay) {
        overlay.classList.add("show");
        localStorage.setItem(STORAGE_KEYS.TG_POPUP, Date.now().toString());
      }
    }, 3800);
  }

  window.closeTgPopup = function() {
    var overlay = document.getElementById("tgPopupOverlay") || document.getElementById("telegramPopupModal");
    if (overlay) overlay.classList.remove("show");
  };
  window.closeTelegramPopup = window.closeTgPopup;

  // ═══ UNIFIED HIGH-PERFORMANCE EVENT DELEGATION ═══
  function attachEventDelegation() {
    document.addEventListener("click", function(e) {
      // 1. Favorite Heart Button
      var favBtn = e.target.closest(".card-fav-action, .card-fav-btn");
      if (favBtn) {
        e.stopPropagation();
        var favId = favBtn.dataset.favId;
        var anime = state.animeList.find(function(x) { return x.id === favId; });
        if (anime) {
          var added = window.ToonFav.toggle(anime);
          favBtn.classList.toggle("active", added);
          var svg = favBtn.querySelector("svg");
          if (svg) svg.setAttribute("fill", added ? "currentColor" : "none");
          else favBtn.textContent = added ? "❤️" : "🤍";
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
        var overlay = document.getElementById("searchResultsOverlay") || document.getElementById("searchOverlayModal");
        if (overlay) {
          overlay.style.display = "none";
          overlay.classList.remove("active");
        }
        if (sid) openAnimeModal(sid, 1);
        return;
      }

      // 4. Hero Spotlight Card Click
      var heroCard = e.target.closest("#heroSpotlightCard, .hero-floating-card");
      if (heroCard) {
        var hcId = heroCard.dataset.animeId || state.animeList[state.heroIndex].id;
        if (hcId) openAnimeModal(hcId, 1);
        return;
      }

      // 5. Hero Action: Play Now
      var heroPlay = e.target.closest("#heroPlayAction, .btn-play-hero");
      if (heroPlay) {
        var aId = heroPlay.dataset.animeId || state.animeList[state.heroIndex].id;
        if (aId) openAnimeModal(aId, 1);
        return;
      }

      // 6. Hero Add to My List
      if (e.target.closest("#heroMyListAction, .btn-mylist-hero")) {
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

      // 9. Language Chips
      var langChip = e.target.closest("[data-lang-chip]");
      if (langChip) {
        state.activeLanguage = langChip.dataset.langChip;
        state.currentPage = 1;
        document.querySelectorAll("[data-lang-chip]").forEach(function(c) { c.classList.remove("active"); });
        langChip.classList.add("active");
        renderBrowseGridIfPresent();
        return;
      }

      // 10. Pagination Clicks
      var pageBtn = e.target.closest(".page-btn, [data-page-num]");
      if (pageBtn && !pageBtn.disabled) {
        var targetPage = parseInt(pageBtn.dataset.page || pageBtn.dataset.pageNum, 10);
        if (targetPage && targetPage !== state.currentPage) {
          state.currentPage = targetPage;
          renderBrowseGridIfPresent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // 11. Modal Close
      if (e.target.closest("#modalCloseBtn, .modal-close-trigger, .btn-close-modal") || e.target.id === "animeModalBackdrop" || e.target.id === "watchModal") {
        closeAnimeModal();
        return;
      }

      // 12. Modal Season Switch
      var seasonTab = e.target.closest(".modal-season-tab, .season-tab-btn");
      if (seasonTab) {
        var sKey = seasonTab.dataset.seasonKey;
        state.activeSeasonKey = sKey;
        document.querySelectorAll(".modal-season-tab, .season-tab-btn").forEach(function(t) { t.classList.remove("active"); });
        seasonTab.classList.add("active");
        if (state.activeAnimeModal && state.activeAnimeModal.seasons) {
          renderModalEpisodes(state.activeAnimeModal.seasons[sKey], 1);
        }
        return;
      }

      // 13. Modal Episode Select
      var epBtn = e.target.closest(".modal-ep-btn, .ep-item-btn");
      if (epBtn) {
        document.querySelectorAll(".modal-ep-btn, .ep-item-btn").forEach(function(b) { b.classList.remove("active", "current"); });
        epBtn.classList.add("active", "current");
        var epNum = epBtn.dataset.epNum;
        var streamUrl = epBtn.dataset.streamUrl;
        var iframe = document.getElementById("modalPlayerIframe") || document.getElementById("watchVideoIframe");
        if (iframe && streamUrl) iframe.src = streamUrl;
        window.showToast("▶ Loading Episode " + epNum + "...");
        return;
      }

      // 14. Telegram Popup Outside Click
      if (e.target.id === "tgPopupOverlay" || e.target.id === "telegramPopupModal") {
        window.closeTgPopup();
        return;
      }
    });

    // Top Search Input Listener
    var searchInput = document.getElementById("searchInput") || document.getElementById("siteSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function(e) {
        clearTimeout(state.searchDebounce);
        state.searchDebounce = setTimeout(function() {
          executeSearch(e.target.value);
        }, 180);
      });
      searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
          var overlay = document.getElementById("searchResultsOverlay") || document.getElementById("searchOverlayModal");
          if (overlay) {
            overlay.style.display = "none";
            overlay.classList.remove("active");
          }
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
    var filterTrigger = document.getElementById("filterAccordionTrigger") || document.getElementById("searchFilterToggle");
    var filterBody = document.getElementById("filterAccordionBody") || document.getElementById("advancedFiltersPanel");
    if (filterTrigger && filterBody) {
      filterTrigger.addEventListener("click", function() {
        filterBody.classList.toggle("open");
      });
    }

    var applyFilterBtn = document.getElementById("applyFilterBtn");
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", function() {
        var ySel = document.getElementById("filterYearSelect") || document.getElementById("filterSelectYear");
        var rSel = document.getElementById("filterRatingSelect") || document.getElementById("filterSelectRating");
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
        var ySel = document.getElementById("filterYearSelect") || document.getElementById("filterSelectYear");
        var rSel = document.getElementById("filterRatingSelect") || document.getElementById("filterSelectRating");
        if (ySel) ySel.value = "All";
        if (rSel) rSel.value = "All";
        state.filterYear = "All";
        state.filterRating = "All";
        state.activeGenre = "All";
        state.activeLanguage = "All";
        state.currentPage = 1;
        renderGenreChips();
        renderLanguageChips();
        renderBrowseGridIfPresent();
        window.showToast("🔄 Filters Reset");
        if (filterBody) filterBody.classList.remove("open");
      });
    }

    // Touch Swipe on Hero Spotlight
    var heroEl = document.getElementById("heroBenchmarkSection");
    if (heroEl) {
      var startX = 0;
      heroEl.addEventListener("touchstart", function(e) {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });
      heroEl.addEventListener("touchend", function(e) {
        var diff = startX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 45) {
          if (diff > 0) {
            state.heroIndex = (state.heroIndex + 1) % Math.min(state.animeList.length, 5);
          } else {
            state.heroIndex = (state.heroIndex - 1 + Math.min(state.animeList.length, 5)) % Math.min(state.animeList.length, 5);
          }
          updateHeroSlide(state.heroIndex);
          startHeroAutoRotation();
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
