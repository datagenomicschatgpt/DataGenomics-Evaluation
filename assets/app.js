'use strict';
const statusNode = document.getElementById('copy-status');
let messageTimer;
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    let message;
    try {
      await navigator.clipboard.writeText(source.textContent);
      message = 'Comandos copiados';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      message = 'Texto seleccionado. Copia con Ctrl+C o ⌘C.';
    }
    statusNode.textContent = message;
    statusNode.classList.add('visible');
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => statusNode.classList.remove('visible'), 3000);
  });
});
