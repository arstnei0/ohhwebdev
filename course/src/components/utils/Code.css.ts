import { globalStyle, style } from "@vanilla-extract/css"
// import { color } from "~/styles/theme/color.css"
import { font } from "~/styles/theme/font.css"
import { borderRadius } from "~/styles/theme/sizes.css"

export const codeClass = style({})

globalStyle(`${codeClass} .shiki`, {
	padding: ".5em 1em",
	borderRadius,
	fontFamily: font.mono,
	overflowX: "scroll",
	fontSize: "1em",
})

globalStyle(`${codeClass}:not(:hover) .shiki`, {
	transform: "scale(.98)",
})

globalStyle(`${codeClass} span:not(.line)`, {
	borderRadius,
	// filter: "brightness(.8)",
})

globalStyle(`${codeClass} span:not(.line):hover`, {
	backgroundColor: "#383a48",
	// filter: "brightness(.8)",
})
