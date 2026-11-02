document.addEventListener('DOMContentLoaded', function() {
  var card = document.getElementById('flip-card');
  if (card) {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  }

  var themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark');
    });
  }

  var orderBtn = document.getElementById('order-btn');
  var dropdownMenu = document.getElementById('dropdown-menu');

  if (orderBtn && dropdownMenu) {
    orderBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
      if (!dropdownMenu.contains(event.target) && event.target !== orderBtn) {
        dropdownMenu.classList.remove('show');
      }
    });
  }

  var scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });
    
    reveals.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  function setupCarousel(trackId, prevBtnId, nextBtnId) {
    var track = document.getElementById(trackId);
    var prevBtn = document.getElementById(prevBtnId);
    var nextBtn = document.getElementById(nextBtnId);
    
    if (!track || !prevBtn || !nextBtn) return;

    var cards = track.querySelectorAll('.card');
    var cardWidth = cards[0].offsetWidth + 30;
    var visibleCards = window.innerWidth > 900 ? 3 : (window.innerWidth > 768 ? 2 : 1);
    var maxIndex = cards.length - visibleCards;

    nextBtn.addEventListener('click', function() {
      if (maxIndex > 0) {
        currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
        track.style.transform = 'translateX(-' + (currentIndex * cardWidth) + 'px)';
      }
    });

    prevBtn.addEventListener('click', function() {
      if (maxIndex > 0) {
        currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
        track.style.transform = 'translateX(-' + (currentIndex * cardWidth) + 'px)';
      }
    });
    
    var currentIndex = 0;
  }

  setupCarousel('work-track', 'work-prev', 'work-next');
  setupCarousel('cosplay-track', 'cosplay-prev', 'cosplay-next');
});