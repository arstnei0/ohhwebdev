import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import solid from "@astrojs/solid-js"
import { macaronVitePlugin as macaron } from "@macaron-css/vite"
import vanillaExtract from "astro-vanilla-extract"

export default defineConfig({
	integrations: [svelte(), solid(), vanillaExtract()],
	experimental: {
		assets: true,
	},
	// vite: { plugins: [macaron()] },
})
