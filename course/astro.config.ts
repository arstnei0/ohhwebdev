import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import solid from "@astrojs/solid-js"
import { macaronVitePlugin as macaron } from "@macaron-css/vite"

export default defineConfig({
	integrations: [svelte(), solid()],
	vite: { plugins: [macaron()] },
})
