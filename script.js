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

  var carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(function(container) {
    var track = container.querySelector('.carousel-track');
    var slides = Array.from(track.children);
    var nextButton = container.querySelector('.next-btn');
    var prevButton = container.querySelector('.prev-btn');
    var currentIndex = 0;

    function updateCarousel() {
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    nextButton.addEventListener('click', function() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });

    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1;
      }
      updateCarousel();
    });
  });
});