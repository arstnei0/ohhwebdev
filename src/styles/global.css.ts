import { globalStyle, style } from "@vanilla-extract/css"

export const color = {
	background: "#212121",
	font: {
		primary: "#EEEEEE",
	},
} as const

export const font = {
	sans: `"Poppins", sans-serif`,
	serif: `"Noto Serif", serif`,
	mono: `"JetBrains Mono", monospace`,
} as const

globalStyle("body", {
	backgroundColor: color.background,
	color: color.font.primary,
	fontFamily: font.sans,
	overflowY: "hidden",
})
