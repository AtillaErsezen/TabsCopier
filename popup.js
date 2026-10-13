chrome.tabs.query({}, (tabs) => {
  const urls = tabs.map(tab => tab.url).filter(Boolean);
  const listEl = document.getElementById('url-list');
  listEl.textContent = urls.join('\n');

  document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(urls.join('\n')).then(() => {
      const status = document.getElementById('status');
      status.textContent = 'Copied!';
      setTimeout(() => { status.textContent = ''; }, 1500);
    });
  });
});
