import type { RequestHandler } from "@sveltejs/kit";
import config from "$lib/config";

export const GET: RequestHandler = () => {
	const lines = [
		"User-agent: *",
		"Disallow:",
		`Sitemap: ${config.meta.url}/sitemap.xml`,
	];

	return new Response(lines.join("\n"), {
		headers: {
			"content-type": "text/plain; charset=utf-8",
		},
	});
};
