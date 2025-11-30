// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Close modal on outside click
window.addEventListener('click', function(event) {
  const modal = document.querySelector('.trailer-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Prevent body scroll when modal is open
document.querySelector('.trailer-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});