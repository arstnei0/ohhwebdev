import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { font } from "~/styles/theme/font.css"
import { borderRadius, borderRadiusLarge } from "~/styles/theme/sizes.css"
import { transitionFn } from "~/styles/theme/transition"
import { fadeIn, scaleIn } from "~/styles/utils/animations.css"
import { flexCenter } from "~/styles/utils/flex.css"

export const commandPaletteWrapper = style({
	position: "fixed",
	zIndex: 500,
	top: 0,
	left: 0,
	width: "100vw",
	height: "100vh",
	backgroundColor: `${color.backgroundLight}AA`,
	animation: `.5s ${transitionFn} 0s ${fadeIn}`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})

export const commandPalette = style({
	width: "45vw",
	height: "60vh",
	backgroundColor: color.backgroundLight,
	borderRadius: borderRadiusLarge,
	padding: "20px",
	zIndex: 600,
})

export const commandIcon = style({
	marginRight: ".7em",
	padding: "5px",
	animation: `.8s ${transitionFn} 0s ${scaleIn}`,
	backgroundColor: color.backgroundLighter,
	borderRadius,
	cursor: "pointer",
	":hover": {
		backgroundColor: color.backgroundLighterer,
		transform: "scale(1.3) rotate(90deg)",
	},
	":active": {
		transform: "scale(1.5) rotate(90deg)",
	},
	...flexCenter,
})

export const closeButton = style({
	position: "absolute",
	bottom: "12%",
	backgroundColor: color.backgroundLighter,
	borderRadius: "100%",
	width: "60px",
	height: "60px",
	cursor: "pointer",
	...flexCenter,
	":hover": {
		backgroundColor: color.backgroundLighterer,
		transform: "scale(1.3)",
	},
})

export const commandPaletteInput = style({
	padding: "10px 18px",
	border: "none",
	outline: "none",
	borderRadius,
	width: "100%",
	backgroundColor: color.backgroundLighter,
	color: color.font.primary,
	fontSize: "1.25em",
	fontFamily: font.mono,
	":focus": {
		backgroundColor: color.backgroundLighterer,
	},
	":hover": {
		backgroundColor: color.backgroundLighterer,
		transform: "scale(1.05)",
	},
})

export const commandClass = style({
	padding: "7px 18px",
	margin: "12px 0px",
	borderRadius,
	backgroundColor: color.backgroundLighter,
	cursor: "pointer",
	...flexCenter,
	justifyContent: "space-between",
	alignItems: "flex-end",

	":hover": {
		backgroundColor: color.backgroundLighterer,
		transform: "scale(1.1)",
	},
})

export const commandClassIcon = style({
	margin: "3px 10px",
	gap: "5px",
	...flexCenter,
})

globalStyle(`${commandClass}:hover ${commandClassIcon}`, {
	transform: "scale(1.6)",
})

export const commandEntering = style({
	filter: "brightness(1.5)",
	transform: "scale(1.05)",
})

export const shiningRect1 = style({
	position: "absolute",
	left: "0%",
	transform: "skewX(-40deg)",
	width: "20%",
	height: "100%",
	backgroundColor: `${color.backgroundLighterer}44`,
	transition: `all .6s ${transitionFn}`,
	animation: `.6s ${transitionFn} 0s ${fadeIn}`,
})

export const shiningRect2 = style({
	position: "absolute",
	left: "70%",
	transform: "skewX(-40deg)",
	width: "40%",
	height: "100%",
	backgroundColor: `${color.backgroundLighterer}22`,
	transition: `all .6s ${transitionFn}`,
	animation: `.6s ${transitionFn} 0s ${fadeIn}`,
})
