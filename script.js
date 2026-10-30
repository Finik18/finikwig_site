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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});