const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', !isExpanded);
    });

    const navLinksBootstrap = document.querySelectorAll('.navbar-nav .nav-link');
    navLinksBootstrap.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      });
    });
  }
});

const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".package__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 300 });
}

if (typeof Swiper !== 'undefined') {
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination" },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true
  });
}


function detectLanguageFromPage() {
  const path = window.location.pathname;
  if (path.includes('/en/')) return 'en';
  if (path.includes('/sr/')) return 'sr';
  
  if (document.body.classList.contains('lang-en')) return 'en';
  if (document.body.classList.contains('lang-sr')) return 'sr';
  
  return document.documentElement.lang || 'sr';
}

let currentLanguage = detectLanguageFromPage();

function toggleLanguage() {
  currentLanguage = currentLanguage === 'sr' ? 'en' : 'sr';
  localStorage.setItem('language', currentLanguage);
  updateLanguage();
  updateLanguageButton();
  loadBookings();
  loadVisitedDestinations();
}

function updateLanguage() {
  document.querySelectorAll('[data-sr][data-en]').forEach(el => {
    el.innerHTML = currentLanguage === 'sr' ? el.getAttribute('data-sr') : el.getAttribute('data-en');
  });
  document.querySelectorAll('[data-sr-placeholder][data-en-placeholder]').forEach(el => {
    el.placeholder = currentLanguage === 'sr' ? el.getAttribute('data-sr-placeholder') : el.getAttribute('data-en-placeholder');
  });
  document.documentElement.lang = currentLanguage;
}

function updateLanguageButton() {
  const langButton = document.getElementById('lang-toggle');
  if (langButton) langButton.textContent = currentLanguage === 'sr' ? 'EN' : 'СР';
}

document.addEventListener('DOMContentLoaded', () => {

  const pageLanguage = detectLanguageFromPage();
  const savedLanguage = localStorage.getItem('language');
  
  currentLanguage = pageLanguage;
  
  localStorage.setItem('language', currentLanguage);
  
  updateLanguage();
  updateLanguageButton();
  loadBookings();
  loadVisitedDestinations();
});

const packageTranslations = {
  'Berlin - Istorija uživo': {
    sr: 'Berlin - Istorija uživo',
    en: 'Berlin - History Alive'
  },
  'Berlin - History Alive': {
    sr: 'Berlin - Istorija uživo', 
    en: 'Berlin - History Alive'
  },
  'Prag - Zlatni Grad': {
    sr: 'Prag - Zlatni Grad',
    en: 'Prague - Golden City'
  },
  'Prague - Golden City': {
    sr: 'Prag - Zlatni Grad',
    en: 'Prague - Golden City'
  },
  'Budimpešta - Biser Dunava': {
    sr: 'Budimpešta - Biser Dunava',
    en: 'Budapest - Pearl of the Danube'
  },
  'Budapest - Pearl of the Danube': {
    sr: 'Budimpešta - Biser Dunava',
    en: 'Budapest - Pearl of the Danube'
  },
  'Grčka ostrva - Plavi raj': {
    sr: 'Grčka ostrva - Plavi raj',
    en: 'Greek Islands - Blue Paradise'
  },
  'Greek Islands - Blue Paradise': {
    sr: 'Grčka ostrva - Plavi raj',
    en: 'Greek Islands - Blue Paradise'
  },
  'Turska - Orijentalna magija': {
    sr: 'Turska - Orijentalna magija',
    en: 'Turkey - Oriental Magic'
  },
  'Turkey - Oriental Magic': {
    sr: 'Turska - Orijentalna magija',
    en: 'Turkey - Oriental Magic'
  },
  'Španija - Kosta del Sol': {
    sr: 'Španija - Kosta del Sol',
    en: 'Spain - Costa del Sol'
  },
  'Spain - Costa del Sol': {
    sr: 'Španija - Kosta del Sol',
    en: 'Spain - Costa del Sol'
  },
  'Austrija - Alpska magija': {
    sr: 'Austrija - Alpska magija',
    en: 'Austria - Alpine Magic'
  },
  'Austria - Alpine Magic': {
    sr: 'Austrija - Alpska magija',
    en: 'Austria - Alpine Magic'
  },
  'Švajcarska - Krov Evrope': {
    sr: 'Švajcarska - Krov Evrope',
    en: 'Switzerland - Roof of Europe'
  },
  'Switzerland - Roof of Europe': {
    sr: 'Švajcarska - Krov Evrope',
    en: 'Switzerland - Roof of Europe'
  },
  'Francuska - Val d\'Isère': {
    sr: 'Francuska - Val d\'Isère',
    en: 'France - Val d\'Isère'
  },
  'France - Val d\'Isère': {
    sr: 'Francuska - Val d\'Isère',
    en: 'France - Val d\'Isère'
  }
};

const legacyPackageNames = {
  'prague-golden-city': {
    sr: 'Prag - Zlatni Grad',
    en: 'Prague - Golden City',
    image: '../assets/destination-1.jpg'
  },
  'berlin-history': {
    sr: 'Berlin - Istorija uživo',
    en: 'Berlin - History Alive', 
    image: '../assets/destination-2.jpg'
  },
  'budapest-pearl': {
    sr: 'Budimpešta - Biser Dunava',
    en: 'Budapest - Pearl of the Danube',
    image: '../assets/destination-3.jpg'
  },
  'austria-alpine': {
    sr: 'Austrija - Alpska magija',
    en: 'Austria - Alpine Magic',
    image: '../assets/client-1.jpg'
  },
  'greece-islands': {
    sr: 'Grčka ostrva - Plavi raj',
    en: 'Greek Islands - Blue Paradise',
    image: '../assets/package-1.jpg'
  },
  'turkey-mediterranean': {
    sr: 'Turska - Orijentalna magija',
    en: 'Turkey - Oriental Magic',
    image: '../assets/package-2.jpg'
  },
  'spain-sunny-coast': {
    sr: 'Španija - Kosta del Sol',
    en: 'Spain - Costa del Sol',
    image: '../assets/package-3.jpg'
  },
  'switzerland-roof': {
    sr: 'Švajcarska - Krov Evrope',
    en: 'Switzerland - Roof of Europe',
    image: '../assets/destination-2.jpg'
  },
  'france-val': {
    sr: 'Francuska - Val d\'Isère',
    en: 'France - Val d\'Isère',
    image: '../assets/destination-3.jpg'
  },
  'paris-lights': {
    sr: 'Pariz - Svetla i umetnost',
    en: 'Paris - Lights and Art',
    image: '../assets/europe-7.jpg'
  },
  'switzerland-winter': {
    sr: 'Švajcarska - Zimska bajka',
    en: 'Switzerland - Winter Fairytale',
    image: '../assets/winter-2.jpg'
  },
  'france-alpine': {
    sr: 'Francuska - Alpski šarm',
    en: 'France - Alpine Charm',
    image: '../assets/winter-3.jpg'
  }
};

function translatePackageName(packageName, targetLanguage) {
  const translation = packageTranslations[packageName];
  if (translation && translation[targetLanguage]) {
    return translation[targetLanguage];
  }
  
  return packageName;
}


function bookPackage(packageId, price) {
  const packageInfo = legacyPackageNames[packageId];
  
  if (!packageInfo) {
    alert('Package not found: ' + packageId);
    return;
  }

  const packageData = {
    id: 'pkg-' + Date.now(),
    destination: packageInfo[currentLanguage] || packageInfo.sr,
    image: packageInfo.image,
    price: `€${price}`,
    startDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 
    participants: '2',
    status: 'active'
  };

  const bookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
  bookings.push(packageData);
  localStorage.setItem('userBookings', JSON.stringify(bookings));

  loadBookings();

  alert(currentLanguage === 'sr'
    ? `Rezervacija potvrđena za ${translatePackageName(packageData.destination, currentLanguage)}`
    : `Booking confirmed for ${translatePackageName(packageData.destination, currentLanguage)}`);
}

function initializeBookingSystem() {
  if (!localStorage.getItem('userBookings')) localStorage.setItem('userBookings', JSON.stringify([]));
}

function bookPackageDetailed(event) {
  event.preventDefault();
  const form = event.target;
  const container = form.closest('.booking-form');
  if (!container) return;

  const packageData = {
    id: 'pkg-' + Date.now(),
    destination: container.dataset.destination,
    image: container.dataset.image,
    price: container.dataset.price,
    startDate: form.querySelector('#startDate').value,
    participants: form.querySelector('#participants').value,
    status: 'active'
  };

  if (!packageData.startDate || !packageData.participants) {
    alert(currentLanguage === 'sr' ? 'Molimo popunite sve podatke' : 'Please fill all fields');
    return;
  }

  const bookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
  bookings.push(packageData);
  localStorage.setItem('userBookings', JSON.stringify(bookings));

  loadBookings();

  alert(currentLanguage === 'sr'
    ? `Rezervacija potvrđena za ${translatePackageName(packageData.destination, currentLanguage)}`
    : `Booking confirmed for ${translatePackageName(packageData.destination, currentLanguage)}`);
}

function loadBookings() {
  const bookingsList = document.getElementById('bookingsList');
  if (!bookingsList) return;

  const bookings = JSON.parse(localStorage.getItem('userBookings') || '[]').filter(b => b.status === 'active');

  if (!bookings.length) {
    bookingsList.innerHTML = `<p>${currentLanguage === 'sr' ? 'Nema aktivnih rezervacija' : 'No active bookings'}</p>`;
    return;
  }

  bookingsList.innerHTML = bookings.map(b => {
    const translatedName = translatePackageName(b.destination, currentLanguage);
    
    return `
    <div class="card mb-3" id="booking-${b.id}">
      <div class="card-body row align-items-center">
        <div class="col-md-2">
          <img src="${b.image}" class="img-fluid rounded">
        </div>
        <div class="col-md-5">
          <h6>${translatedName}</h6>
          <p>${formatDateRange(b.startDate)}</p>
        </div>
        <div class="col-md-2">
          <span class="badge bg-success">${currentLanguage === 'sr' ? 'Potvrđeno' : 'Confirmed'}</span>
        </div>
        <div class="col-md-3 text-end">
          <strong>${b.price}</strong>
          <button class="btn btn-sm btn-outline-danger mt-2" onclick="cancelBooking('${b.id}')">
            ${currentLanguage === 'sr' ? 'Otkaži' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function cancelBooking(id) {
  let bookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
  const booking = bookings.find(b => b.id === id);
  if (booking) {
    const today = new Date();
    const startDate = new Date(booking.startDate);
    const diffDays = Math.floor((startDate - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 5) {
      alert(currentLanguage === 'sr'
        ? 'Rezervaciju možete otkazati najkasnije 5 dana pre polaska'
        : 'You can cancel the booking at least 5 days before start');
      return;
    }
  }
  bookings = bookings.filter(b => b.id !== id);
  localStorage.setItem('userBookings', JSON.stringify(bookings));
  loadBookings(); 
}


function formatDateRange(start) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(start).toLocaleDateString('en-US', options);
}

function loadVisitedDestinations() {
  const visitedList = document.getElementById('visitedList');
  if (!visitedList) return;

  const storedReviews = JSON.parse(localStorage.getItem('visitedReviews') || '{}');

  const visited = [
    {
      id: 'vst-2',
      name_sr: "Berlin – Istorijski grad",
      name_en: "Berlin – Historical City",
      image: "../assets/berlin1.jpg",
      rating: 4.6,
      reviews: 198,
      date: "2024-05-22",
    },
    {
      id: 'vst-3',
      name_sr: "Prag – Zlatni grad",
      name_en: "Prague – Golden City",
      image: "../assets/prague1.jpg",
      rating: 4.9,
      reviews: 312,
      date: "2025-01-05",
    }
  ];

  if (!visited.length) {
    visitedList.innerHTML = `<p>${currentLanguage === 'sr' ? 'Još nema posećenih destinacija.' : 'No visited destinations yet.'}</p>`;
    return;
  }

  visitedList.innerHTML = visited.map(v => {
    const userRating = storedReviews[v.id]?.rating || v.rating;

    return `
      <div class="card mb-3 shadow-sm border-0" id="visited-${v.id}">
        <div class="card-body row align-items-center">
          <div class="col-md-2">
            <img src="${v.image}" alt="${currentLanguage === 'sr' ? v.name_sr : v.name_en}" class="img-fluid rounded">
          </div>
          <div class="col-md-5">
            <h6>${currentLanguage === 'sr' ? v.name_sr : v.name_en}</h6>
            <p class="mb-1 text-muted">
              <i class="ri-calendar-line text-primary"></i> ${formatDateRange(v.date)}
            </p>
            <div class="text-warning fs-5">
              ${renderStars(userRating)} 
              <span class="text-dark small">(${v.reviews} ${currentLanguage === 'sr' ? 'recenzija' : 'reviews'})</span>
            </div>
          </div>
          <div class="col-md-5 text-end">
            <button class="btn btn-sm btn-outline-primary" onclick="leaveReview('${v.id}')">
              ${currentLanguage === 'sr' ? 'Ostavi ocenu' : 'Leave Rating'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


function leaveReview(id) {
  let rating = prompt(currentLanguage === 'sr' ? 'Unesite ocenu (1-5):' : 'Enter rating (1-5):');
  rating = parseFloat(rating);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    alert(currentLanguage === 'sr' ? 'Nevažeća ocena!' : 'Invalid rating!');
    return;
  }

  const storedReviews = JSON.parse(localStorage.getItem('visitedReviews') || '{}');

  storedReviews[id] = { rating };

  localStorage.setItem('visitedReviews', JSON.stringify(storedReviews));

  loadVisitedDestinations();
  loadRatings();
}


function loadRatings() {
  const ratingsList = document.getElementById('ratingsList');
  if (!ratingsList) return;

  const storedReviews = JSON.parse(localStorage.getItem('visitedReviews') || '{}');

  const visitedDestinations = [
    { id: 'vst-2', name_sr: "Berlin – Istorijski grad", name_en: "Berlin – Historical City", image: "../assets/destination-1.jpg" },
    { id: 'vst-3', name_sr: "Prag – Zlatni grad", name_en: "Prague – Golden City", image: "../assets/destination-2.jpg" }
  ];

  const reviewsArray = visitedDestinations
    .filter(dest => storedReviews[dest.id])
    .map(dest => {
      const r = storedReviews[dest.id];
      return {
        id: dest.id,
        name: currentLanguage === 'sr' ? dest.name_sr : dest.name_en,
        image: dest.image,
        rating: r.rating,
      };
    });

  if (!reviewsArray.length) {
    ratingsList.innerHTML = `<p>${currentLanguage === 'sr' ? 'Još nema ocena.' : 'No ratings yet.'}</p>`;
    return;
  }

  ratingsList.innerHTML = reviewsArray.map(r => `
    <div class="card mb-3 shadow-sm border-0" id="rating-${r.id}">
      <div class="card-body row align-items-center">
        <div class="col-md-2">
          <img src="${r.image}" class="img-fluid rounded">
        </div>
        <div class="col-md-10">
          <h6>${r.name}</h6>
          <div class="text-warning fs-5">
            ${renderStars(r.rating)} <span class="text-dark small">(${r.rating})</span>
          </div>
      
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (halfStar) stars += '☆';
  return stars.padEnd(5, '☆');
}

function filterGallery(category) {
  const buttons = document.querySelectorAll('.btn-group .btn');
  buttons.forEach(btn => {
    btn.classList.remove('btn-primary', 'active');
    btn.classList.add('btn-outline-primary');
  });
  
  event.target.classList.remove('btn-outline-primary');
  event.target.classList.add('btn-primary', 'active');
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  const videoTitle = document.getElementById('video-title');
  const imagesTitle = document.getElementById('images-title');
  
  const isShowAll = category === 'sve' || category === 'all';
  const isShowVideo = category === 'video';
  const isShowImages = category === 'slike' || category === 'images';
  
  if (isShowAll) {
    galleryItems.forEach(item => {
      item.style.setProperty('display', 'block', 'important');
    });
    if (videoTitle) videoTitle.style.setProperty('display', 'block', 'important');
    if (imagesTitle) imagesTitle.style.setProperty('display', 'block', 'important');
  } else if (isShowVideo) {
    galleryItems.forEach(item => {
      if (item.dataset.category === 'video') {
        item.style.setProperty('display', 'block', 'important');
      } else {
        item.style.setProperty('display', 'none', 'important');
      }
    });
    if (videoTitle) videoTitle.style.setProperty('display', 'block', 'important');
    if (imagesTitle) imagesTitle.style.setProperty('display', 'none', 'important');
  } else if (isShowImages) {
    galleryItems.forEach(item => {
      const category = item.dataset.category;
      if (category === 'slike' || category === 'images') {
        item.style.setProperty('display', 'block', 'important');
      } else {
        item.style.setProperty('display', 'none', 'important');
      }
    });
    if (videoTitle) videoTitle.style.setProperty('display', 'none', 'important');
    if (imagesTitle) imagesTitle.style.setProperty('display', 'block', 'important');
  }
}

let originalPackages = [];

function initializePackageFilters() {
  const packageGrid = document.querySelector('.package__grid');
  if (packageGrid) {
    originalPackages = Array.from(packageGrid.children);
  }
}

function filterPackages() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const packageCards = document.querySelectorAll('.package__card');
  
  console.log(`Searching for: "${searchTerm}"`);
  console.log(`Found ${packageCards.length} packages`);
  
  packageCards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function sortPackages() {
  const sortValue = document.getElementById('sortSelect').value;
  const packageGrid = document.querySelector('.package__grid');
  if (!packageGrid) return;
  
  console.log(`Sorting by: ${sortValue}`);
  
  const packages = Array.from(packageGrid.children);
  
  packages.sort((a, b) => {
    switch (sortValue) {
      case 'name':
        const nameA = a.dataset.name || a.querySelector('h4').textContent;
        const nameB = b.dataset.name || b.querySelector('h4').textContent;
        return nameA.localeCompare(nameB);
        
      case 'price-low':
        const priceA = parseInt(a.dataset.price) || extractPrice(a);
        const priceB = parseInt(b.dataset.price) || extractPrice(b);
        console.log(`Price A: ${priceA}, Price B: ${priceB}`);
        return priceA - priceB;
        
      case 'price-high':
        const priceHighA = parseInt(a.dataset.price) || extractPrice(a);
        const priceHighB = parseInt(b.dataset.price) || extractPrice(b);
        return priceHighB - priceHighA;
        
      case 'rating':
        const ratingA = parseFloat(a.dataset.rating) || extractRating(a);
        const ratingB = parseFloat(b.dataset.rating) || extractRating(b);
        return ratingB - ratingA;
        
      default:
        return 0;
    }
  });
  
  packageGrid.innerHTML = '';
  packages.forEach(package => packageGrid.appendChild(package));
}

function extractPrice(packageElement) {
  const priceElement = packageElement.querySelector('.price, .text-primary');
  if (priceElement) {
    const priceText = priceElement.textContent;
    const price = priceText.match(/\d+/);
    return price ? parseInt(price[0]) : 0;
  }
  return 0;
}

function extractRating(packageElement) {
  const ratingElement = packageElement.querySelector('.rating-text');
  if (ratingElement) {
    const ratingText = ratingElement.textContent;
    const rating = ratingText.match(/[\d.]+/);
    return rating ? parseFloat(rating[0]) : 0;
  }
  return 0;
}

function resetFilters() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'name';
  
 
  const packageCards = document.querySelectorAll('.package__card');
  packageCards.forEach(card => {
    card.style.display = 'block';
  });
  
  const packageGrid = document.querySelector('.package__grid');
  if (packageGrid && originalPackages.length > 0) {
    packageGrid.innerHTML = '';
    originalPackages.forEach(package => packageGrid.appendChild(package));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeBookingSystem();
  loadBookings();
  loadVisitedDestinations();
  loadRatings(); 
  initializePackageFilters(); 
  const form = document.getElementById('bookingForm');
  if (form) form.addEventListener('submit', bookPackageDetailed);
});
