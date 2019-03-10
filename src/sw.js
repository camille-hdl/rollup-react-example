importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.precaching.suppressWarnings();
// the following line will be replaced by workbox-cli
workbox.precaching.precacheAndRoute([]);

// Cache unpkg (for systemjs)
workbox.routing.registerRoute(
    /^https:\/\/unpkg\.com/,
    workbox.strategies.cacheFirst({
        cacheName: "unpkg",
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);