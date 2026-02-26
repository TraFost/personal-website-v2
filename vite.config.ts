import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	optimizeDeps: {
		exclude: ["@splidejs/svelte-splide"],
	},
	ssr: {
		noExternal: ["@splidejs/svelte-splide"],
	},
});
