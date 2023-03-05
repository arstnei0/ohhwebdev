import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transitionFn } from "~/styles/theme/transition.css"

export const box = style({
	display: "flex",
	alignItems: "center",
	borderRadius,
	backgroundColor: color.backgroundLight,
	padding: ".4em 1.4em",
	":hover": {
		transform: "scale(1.05)",
		filter: "brightness(1.3)",
	},
	overflow: "hidden",
	// HACK: Work without `position: absolute;`
	transform: "scale(1)",
})

export const shiningRect = style({
	position: "absolute",
	left: "-5%",
	transform: "skewX(-30deg)",
	width: "20%",
	height: "100%",
	zIndex: -10,
	backgroundColor: `${color.backgroundLightest}55`,
	transition: `all .6s ${transitionFn}`,
})

globalStyle(`${box}:hover ${shiningRect}`, {
	left: "80%",
	width: "30%",
	backgroundColor: `${color.backgroundLightest}22`,
})
