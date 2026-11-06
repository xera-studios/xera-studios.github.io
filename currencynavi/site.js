const preview = document.querySelector('#app-preview');
const modeButtons = document.querySelectorAll('[data-mode]');
modeButtons.forEach(button => button.addEventListener('click', () => {
  if (!preview) return;
  preview.src = preview.dataset[button.dataset.mode];
  modeButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));
