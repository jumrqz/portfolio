document.querySelectorAll('.toggle-text').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const projectText = this.nextElementSibling;
    projectText.classList.toggle('show');
    if (projectText.classList.contains('show')) {
      this.textContent = this.getAttribute('data-more-text') || 'Ver menos';
    } else {
      this.textContent = 'Ver más';
    }
  });
});
  