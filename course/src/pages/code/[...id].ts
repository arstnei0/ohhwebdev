import { APIRoute, GetStaticPaths } from "astro"
import { readFile } from "fs/promises"
import path from "path"
import shiki from "shiki"
import glob from "fast-glob"

const codeDir = import.meta.env.DEV
	? path.join(import.meta.url.slice(5), "../../../../../code")
	: path.join(import.meta.url.slice(5), "../../../../../code")

const allowedExtensions = ["html", "svelte", "ts", "tsx", "js", "jsx", "json", "astro"] as const
const allowedEndsWith = allowedExtensions.map(($) => `.${$}`)
export const getStaticPaths: GetStaticPaths = async () =>
	(await glob(`**/*`, { cwd: codeDir }))
		.filter(($) => !/(node_modules|dist)/gi.test($))
		.map(($) => (($) => $.slice($.lastIndexOf("code") + 1))($.split(path.sep)).join("/"))
		.map(($) => (($) => (allowedEndsWith.some((ext) => $.endsWith(ext)) ? $ : null))($))
		.filter(Boolean)
		.map(($) => ({ params: { id: $ as string } }))

const highlighter = await shiki.getHighlighter({
	theme: "dracula",
	// @ts-ignore
	langs: allowedExtensions,
})

export const get: APIRoute = async ({ params }) => {
	const content = (await readFile(path.join(codeDir, `${params.id as string}`))).toString()
	const code = highlighter.codeToHtml(content, {
		lang: (($) => $ && $[$.length - 1])(params.id?.split(".")),
	})
	return new Response(JSON.stringify({ raw: content, code: code }))
}
