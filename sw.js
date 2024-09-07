const cacheName = 'firesearch-cache-v1';
const cacheAssets = [
    './',
    './index.html',
    './styles.css',
    './assets/banner.png',
    './assets/fav.png',
    './lang.js'
];

// Install event
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Caching files');
            cache.addAll(cacheAssets);
        })
    );
});

// Fetch event
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    );
});
