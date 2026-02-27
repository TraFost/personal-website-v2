import type { RequestHandler } from "@sveltejs/kit";
import config from "$lib/config";

const urls = [{ loc: "", priority: "1.0" }];

export const GET: RequestHandler = () => {
	const hostname = config.meta.url.replace(/\/+$/, "");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`  <url>
    <loc>${hostname}/${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"content-type": "application/xml; charset=utf-8",
		},
	});
};
