import { globalStyle, style } from "@macaron-css/core"
import { color } from "~/styles/theme/color.css"
import { scaleOnClick } from "~/styles/theme/effects.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transition } from "~/styles/theme/transition.css"

export const checkbox = style({
	padding: "8px",
	borderRadius,
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	":hover": {
		backgroundColor: color.font.primary,
		color: color.background,
	},
	...scaleOnClick(),
})
export const checkboxIcon = style({
	marginRight: "1em",
	width: "1.5em",
	height: "1.5em",
	backgroundColor: color.backgroundLight,
	borderRadius,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})

globalStyle(`${checkbox}:hover ${checkboxIcon}`, {
	backgroundColor: color.backgroundLight,
})

globalStyle(`${checkbox}:active ${checkboxIcon}`, {
	transform: "scale(0.8)",
})

globalStyle(`${checkbox}.checked ${checkboxIcon}`, {
	transform: "scale(0.8)",
})

globalStyle(`${checkbox} ${checkboxIcon}::before`, {
	content: "",
	width: "3em",
	height: "3em",
	position: "absolute",
	background: color.primary,
	borderRadius: "100%",
	opacity: 0,
	transition,
})

globalStyle(`${checkbox}.checked ${checkboxIcon}::before`, {
	width: ".7em",
	height: ".7em",
	opacity: 1,
})
