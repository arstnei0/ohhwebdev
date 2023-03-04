import { APIRoute, GetStaticPaths } from "astro"
import { readFile } from "fs/promises"
import path from "path"
import shiki from "shiki"

export const getStaticPaths: GetStaticPaths = async () => {
	const files = await import.meta.glob("/src/code/**/*")
	return Object.entries(files).map(([filepath, imp]) => ({
		params: { id: filepath.split(path.sep).slice(3).join("/") },
	}))
}

const highlighter = await shiki.getHighlighter({
	theme: "material-theme-palenight",
	langs: ["js", "ts", "jsx", "tsx", "astro", "svelte"],
})

export const get: APIRoute = async ({ params }) => {
	const content = (
		await readFile(
			path.join(
				import.meta.env.DEV
					? path.join(import.meta.url.slice(5), "../../../code")
					: path.join(
							import.meta.url.slice(5),
							"../../../../src/code"
					  ),
				`${params.id as string}`
			)
		)
	).toString()
	const code = highlighter.codeToHtml(content, {
		lang: (($) => $ && $[$.length - 1])(params.id?.split(".")),
	})
	return new Response(JSON.stringify({ raw: content, code: code }))
}
