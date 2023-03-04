import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transition } from "~/styles/theme/transition"

export const button = style({
	all: "unset",
	cursor: "pointer",
	padding: "12px 36px",
	borderRadius,
	gap: "15px",
	boxSizing: "border-box",
	backgroundColor: color.backgroundLight,
	transition,
	":hover": {
		backgroundColor: color.backgroundLighter,
		transform: "scale(1.1)",
	},
	":active": {
		backgroundColor: color.backgroundLightest,
		transform: "scale(1.3)",
	},
	display: "flex",
	alignItems: "center",
})

export const pointerWrapper = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
const arrowWidth = "25px"
const arrowStroke = "4px"

export const pointer = style({
	marginTop: "1px",
	width: arrowWidth,
	background: color.font.primary,
	borderRadius: "2px",
	height: arrowStroke,
	position: "relative",
	transition: ".3s",
})

globalStyle(`${button}:not(:hover) ${pointer}`, {
	background: color.backgroundLight,
})

globalStyle(`${button} ${pointer}::before`, {
	content: "",
	boxSizing: "border-box",
	position: "absolute",
	border: `solid ${color.font.primary}`,
	borderWidth: `0 ${arrowStroke} ${arrowStroke} 0`,
	display: "inline-block",
	top: "-6px",
	right: "6px",
	transition: ".3s",
	padding: "6px",
	borderRadius: "2px",
	transform: "rotate(-45deg)",
})

globalStyle(`${button}:hover ${pointer}:before`, {
	right: "0",
})
