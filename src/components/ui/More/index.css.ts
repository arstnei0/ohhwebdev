import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transition, transitionFn } from "~/styles/theme/transition"
import { fadeIn } from "~/styles/utils/animations.css"
import { flexCenter } from "~/styles/utils/flex.css"

export const moreWrapper = style({
	display: "inline-block",
	position: "relative",
})
export const moreButton = style({
	...flexCenter,
	cursor: "pointer",
})
const hueRotation = keyframes({
	"0%": {
		filter: "hue-rotate(0deg)",
	},
	"50%": {
		filter: "hue-rotate(360deg)",
	},
	"100%": {
		filter: "hue-rotate(0deg)",
	},
})
globalStyle(`${moreButton}::before`, {
	position: "absolute",
	borderRadius,
	content: "",
	width: "120%",
	height: "120%",
	top: "-10%",
	left: "-10%",
	zIndex: -50,
	backgroundColor: color.primary,
	transition,
	animation: `7s linear 0s ${hueRotation} infinite`,
})
globalStyle(`${moreButton}:hover::before`, {
	backgroundColor: color.backgroundLighterer,
})
export const moreContent = style({
	position: "absolute",
	margin: "0px 5px",
	left: "-9vw",
	padding: ".5em 1em",
	borderRadius,
	width: "20vw",
	backgroundColor: color.backgroundLight,
	display: "none",
	":hover": {
		backgroundColor: color.backgroundLighter,
	},
})

globalStyle(`${moreWrapper}:hover ${moreContent}, ${moreContent}:hover`, {
	display: "block",
	animation: `.5s ${transitionFn} 0s ${fadeIn}`,
})
