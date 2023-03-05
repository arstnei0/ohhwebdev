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
import { transition, transitionFn } from "~/styles/theme/transition.css"
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
	overflowX: "clip",
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
	},
	"100%": {
		transform: "scale(1)",
	},
})

export const movePageWrapper = style({})

const movePage = {
	zIndex: 10,
	position: "fixed",
	top: "calc(50% - 50px)",
	cursor: "pointer",
	height: "100px",
	width: "60px",
	transition,
	backgroundColor: `${color.backgroundLight}AA`,
	":hover": {
		backgroundColor: color.font.primary,
		color: color.background,
		transform: "scale(1.1)",
	},
	":active": {
		filter: "brightness(.7)",
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
	borderRadius: "0% 100px 100px 0%",
})
export const nextPage = style({
	...movePage,
	right: 0,
	borderRadius: "100px 0% 0% 100px",
})

globalStyle(`:is(.${previousPage}, .${nextPage}).locked`, {
	display: "none",
})

export const bgImg = style({
	width: "100vw",
	height: "100vh",
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: -100,
	opacity: 0.25,
})
