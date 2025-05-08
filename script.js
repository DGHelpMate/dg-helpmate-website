const toggleBtn = document.getElementById('modeToggle');
const body = document.body;
const heading = document.querySelector('.glow-heading');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
  if (heading) heading.style.color = body.classList.contains('dark-mode') ? '#ffffff' : '#1e1e2f';
});
