import { APIRoute, GetStaticPaths } from "astro"
import { readFile } from "fs/promises"
import path from "path"
import shiki from "shiki"
import glob from "fast-glob"

const codeDir = import.meta.env.DEV
	? path.join(import.meta.url.slice(5), "../../../code")
	: path.join(import.meta.url.slice(5), "../../../../src/code")

export const getStaticPaths: GetStaticPaths = async () => {
	const files = await glob(path.join(codeDir, "**/*"))
	const res = files.map((filepath) => ({
		params: {
			id: (($) => $.slice($.lastIndexOf("code") + 1))(
				filepath.split(path.sep)
			).join("/"),
		},
	}))
	return res
}

const highlighter = await shiki.getHighlighter({
	theme: "dracula",
	langs: ["js", "ts", "jsx", "tsx", "astro", "svelte", "html"],
})

export const get: APIRoute = async ({ params }) => {
	const content = (
		await readFile(path.join(codeDir, `${params.id as string}`))
	).toString()
	const code = highlighter.codeToHtml(content, {
		lang: (($) => $ && $[$.length - 1])(params.id?.split(".")),
	})
	return new Response(JSON.stringify({ raw: content, code: code }))
}
