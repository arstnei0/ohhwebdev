import { globalStyle, style } from "@vanilla-extract/css"
import { font } from "~/styles/theme/font.css"
import { borderRadius } from "~/styles/theme/sizes.css"

export const codeClass = style({})

globalStyle(`${codeClass} .shiki`, {
	padding: ".5em 1em",
	borderRadius,
	fontFamily: font.mono,
})

globalStyle(`${codeClass}:hover .shiki`, {
	transform: "scale(1.05)",
	filter: "contrast(1.05)",
})

globalStyle(`${codeClass} .line:hover`, {
	filter: "hue-rotate(180deg)",
})
