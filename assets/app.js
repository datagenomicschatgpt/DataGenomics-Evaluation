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

// Public navigation only. Credentials are handled exclusively by the server.
(async () => {
  try {
    const response = await fetch('access.json', {cache: 'no-store'});
    if (!response.ok) return;
    const config = await response.json();
    if (config.schema !== 'datagenomics-public-access/1' || !config.server_origin) return;
    const target = new URL(config.server_origin);
    if (target.protocol !== 'https:' || target.username || target.password || target.search || target.hash || target.pathname !== '/' || target.hostname.endsWith('.github.io')) return;
    const button = document.getElementById('server-access');
    if (!button) return;
    button.href = target.origin + '/login';
    button.removeAttribute('aria-disabled');
    button.classList.remove('access-pending');
    button.textContent = 'Entrar en DataGenomics ↗';
    button.rel = 'noreferrer';
    document.getElementById('server-access-status').textContent = 'Servidor: ' + target.host + '. Conecta a la red corporativa o VPN antes de entrar.';
  } catch { /* Keep the explicit pending state on invalid configuration. */ }
})();
