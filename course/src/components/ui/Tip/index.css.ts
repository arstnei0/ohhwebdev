import { globalStyle, style } from "@macaron-css/core"
import { box } from "../Box/index.css"

export const tipSvg = style({})
export const tipH3 = style({})
globalStyle(`${box}>${tipSvg}`, {
	margin: "0",
	padding: "0",
	marginRight: ".5em",
})

globalStyle(`${box}:hover>${tipSvg}`, {
	transform: "scale(1.4)",
})

globalStyle(`${box}>${tipH3}`, {
	margin: "0",
	padding: "0",
	marginRight: "1em",
})
globalStyle(`${box}:hover>${tipH3}`, {
	transform: "scale(1.2)",
})
