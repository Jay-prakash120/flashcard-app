const CACHE_NAME = 'focusflow-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './mistake.html',
    './11053193.png',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
    'https://raw.githubusercontent.com/Jay-prakash120/flashcard-app/refs/heads/main/11053193.png'
];

// Install Event - Pre-cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching core app assets');
            return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
                console.warn('[Service Worker] Failed to pre-cache some assets:', err);
                // Cache whatever succeeds
                return Promise.allSettled(
                    ASSETS_TO_CACHE.map((url) => cache.add(url))
                );
            });
        }).then(() => self.skipWaiting())
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Stale-While-Revalidate with Offline Fallback
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Handle cross-origin or local requests
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Try fetching from network to get potential update
            const fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                    // Check valid response
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // Network failed (Offline)
                    console.log('[Service Worker] Network request failed, returning cached version if available.');
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Navigation fallback to index.html if navigating
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html') || caches.match('/');
                    }
                });

            // Return cached response immediately if available, otherwise wait for network
            return cachedResponse || fetchPromise;
        })
    );
});
