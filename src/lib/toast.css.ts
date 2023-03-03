import { keyframes, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { scaleOnClick } from "~/styles/theme/effects.css"
import { font } from "~/styles/theme/font.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transitionFn } from "~/styles/theme/transition"

export const toastWrapper = style({
	position: "fixed",
	bottom: 0,
	left: 0,
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})

const fadeIn = keyframes({
	"0%": {
		opacity: 0,
		transform: "translateY(50px)",
	},
	"100%": {
		opacity: 1,
		transform: "translateY(0px)",
	},
})
export const toastClass = style({
	marginBottom: "30px",
	minWidth: "30vw",
	// minHeight: "10vh",
	textAlign: "center",
	borderRadius,
	padding: "10px 20px",
	backgroundColor: `${color.backgroundLight}EE`,
	animation: `.5s ${transitionFn} 0s ${fadeIn}`,
	fontWeight: 600,
	fontFamily: font.mono,
	":hover": {
		backgroundColor: `${color.backgroundLighter}`,
		...scaleOnClick()[":active"],
	},
})

const fadeOut = keyframes({
	"0%": {
		opacity: 1,
		transform: "translateY(0px)",
	},
	"100%": {
		opacity: 0,
		transform: "translateY(50px)",
	},
})
export const toastFadeOut = style({
	animation: `.5s ${transitionFn} 0s ${fadeOut}`,
})
