import { defineConfig } from "astro/config"
import vanillaExtract from "astro-vanilla-extract"
import svelte from "@astrojs/svelte"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
	integrations: [vanillaExtract(), svelte(), solidJs()],
})
