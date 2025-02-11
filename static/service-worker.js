const CACHE_NAME = "github-icons-cache-v2";

self.addEventListener("fetch", (event) => {
	if (event.request.url.includes("raw.githubusercontent.com")) {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return cache.match(event.request).then((cachedResponse) => {
					if (cachedResponse) {
						return cachedResponse;
					}
					return fetch(event.request).then((response) => {
						const clonedResponse = response.clone();
						const newHeaders = new Headers(response.headers);
						newHeaders.set("Cache-Control", "max-age=31536000"); // 1 year cache
						const modifiedResponse = new Response(clonedResponse.body, {
							status: clonedResponse.status,
							statusText: clonedResponse.statusText,
							headers: newHeaders,
						});
						cache.put(event.request, modifiedResponse);
						return response;
					});
				});
			})
		);
	}
});
