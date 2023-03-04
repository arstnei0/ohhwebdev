import {
	createVar,
	globalKeyframes,
	globalStyle,
	keyframes,
	style,
} from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { scaleOnClick } from "~/styles/theme/effects.css"
import { font } from "~/styles/theme/font.css"
import { transition, transitionFn } from "~/styles/theme/transition"
import { fadeIn, fadeOut } from "~/styles/utils/animations.css"

export const course = style({
	position: "fixed",
	top: 0,
	left: 0,

	width: "100vw",
	height: "100vh",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})

export const pageClass = style({
	padding: "2em",
	width: "80%",
	height: "85vh",
	overflowY: "scroll",
})

export const fadeOutClass = style({
	animation: `1s ${transitionFn} 0s ${fadeOut}`,
})
export const fadeInClass = style({
	animation: `1s ${transitionFn} 0s ${fadeIn}`,
})

const scaleIn = keyframes({
	"0%": {
		transform: "scale(3)",
		marginRight: "100px",
	},
	"100%": {
		transform: "scale(1)",
		marginRight: "0px",
	},
})

const movePage = {
	position: "absolute",
	top: 0,
	cursor: "pointer",
	height: "100vh",
	width: "80px",
	transition,
	backgroundColor: color.background,
	":hover": {
		backgroundColor: color.backgroundLight,
	},
	":active": {
		backgroundColor: color.backgroundLighter,
		...scaleOnClick(1.3)[":active"],
	},
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	animation: `.7s ${transitionFn} 0s ${scaleIn}`,
} as const

export const previousPage = style({
	...movePage,
	left: 0,
	borderRadius: "0% 100% 100% 0%",
})
export const nextPage = style({
	...movePage,
	right: 0,
	borderRadius: "100% 0% 0% 100%",
})

globalStyle(`:is(.${previousPage}, .${nextPage}).locked`, {
	display: "none",
})
