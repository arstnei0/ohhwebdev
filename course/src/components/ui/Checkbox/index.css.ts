import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { scaleOnClick } from "~/styles/theme/effects.css"
import { borderRadius } from "~/styles/theme/sizes.css"

export const checkbox = style({
	padding: "8px",
	borderRadius,
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	":hover": {
		backgroundColor: color.backgroundLight,
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
	backgroundColor: color.backgroundLighter,
})

globalStyle(`${checkbox}:active ${checkboxIcon}`, {
	transform: "scale(0.7)",
})

globalStyle(`${checkbox}.checked ${checkboxIcon}`, {
	backgroundColor: color.backgroundLightest,
	transform: "scale(0.7)",
})
