// Minimal Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // Optional: log fetch events, no caching needed
  console.log('Fetching:', event.request.url);
});
