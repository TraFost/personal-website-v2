const CACHE_NAME = "github-icons-cache-v1";

const GITHUB_ICON_URLS = [
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/rxjs/rxjs-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
	"https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
];

// Install event: Cache GitHub Icons
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Caching GitHub icons...");
			return cache.addAll(GITHUB_ICON_URLS);
		})
	);
});

// Fetch event: Serve cached assets
self.addEventListener("fetch", (event) => {
	if (event.request.url.includes("raw.githubusercontent.com")) {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				return (
					cachedResponse ||
					fetch(event.request).then((response) => {
						return caches.open(CACHE_NAME).then((cache) => {
							cache.put(event.request, response.clone());
							return response;
						});
					})
				);
			})
		);
	}
});

// Activate event: Clean old caches
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						console.log("Deleting old cache:", key);
						return caches.delete(key);
					}
				})
			)
		)
	);
});
