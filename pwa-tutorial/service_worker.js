var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/itezap.github.io/pwa-tutorial',
]

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlToCache);
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});
