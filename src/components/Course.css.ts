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
	marginRight: "20%",
	marginBottom: "20%",
	maxWidth: "60%",
	position: "fixed",
})

const fadeOut = keyframes({
	"0%": {
		opacity: 1,
	},
	"100%": {
		opacity: 0,
	},
})
export const fadeOutClass = style({
	animation: `1s ${transitionFn} 0s ${fadeOut}`,
})
const fadeIn = keyframes({
	"0%": {
		opacity: 0,
	},
	"100%": {
		opacity: 1,
	},
})
export const fadeInClass = style({
	animation: `1s ${transitionFn} 0s ${fadeIn}`,
})

const scaleIn = keyframes({
	"0%": {
		transform: "scale(5)",
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
	animation: `.5s ${transitionFn} 0s ${scaleIn}`,
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

export const progressWrapper = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100vw",
	marginTop: "10px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	":hover": {
		...scaleOnClick()[":active"],
	},
})
export const progressText = style({
	fontSize: "1em",
	opacity: 0.3,
	fontFamily: font.mono,
	transition: `all .6s ${transitionFn}`,
})
export const progressTextLight = style({
	display: "inline-block",
	opacity: 0.5,
})
globalStyle(`${progressWrapper}:hover ${progressText}`, {
	opacity: 0.9,
})
globalStyle(`${progressWrapper}:hover ${progressTextLight}`, {
	opacity: 0.7,
})
export const ohhwebdevTitle = style({
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	"-webkit-text-fill-color": "transparent",
	"background-clip": "text",
} as any)
