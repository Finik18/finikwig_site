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
});