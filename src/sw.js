importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const {registerRoute} = workbox.routing;
const {CacheFirst} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
// the following line will be replaced by workbox-cli
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Cache unpkg (for systemjs)
registerRoute(
    /^https:\/\/unpkg\.com/,
    new CacheFirst({
        cacheName: "unpkg",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);