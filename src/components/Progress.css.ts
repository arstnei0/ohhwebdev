import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { scaleOnClick } from "~/styles/theme/effects.css"
import { font } from "~/styles/theme/font.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transitionFn } from "~/styles/theme/transition"

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
	"-webkit-background-clip": "text",
} as any)

export const chapterClass = style({
	display: "inline-block",
	borderRadius,
	cursor: "pointer",
})
globalStyle(`${chapterClass}.hovering`, {
	transform: "scale(1.15)",
	opacity: 1,
	backgroundColor: color.backgroundLighter,
})

export const chaptersClass = style({
	position: "absolute",
	marginTop: "10px",
	padding: "0px 14px",
	borderRadius,
	cursor: "auto",
})

export const chapterItem = style({
	margin: "5px 0px",
	padding: "3px 10px",
	borderRadius,
	fontSize: "1em",
	cursor: "pointer",
	backgroundColor: color.backgroundLighter,
	":hover": {
		backgroundColor: color.backgroundLighterer,
		transform: "scale(1.1)",
	},
})

globalStyle(`${chaptersClass}:has(${chapterItem}:hover)`, {
	backgroundColor: color.backgroundLight,
})

globalStyle(`${chapterItem}.now`, {
	filter: "brightness(1.3)",
	transform: "scale(1.05)",
})
globalStyle(`${chapterItem} p`, {
	margin: 0,
	padding: 0,
})

export const theNameDoesNotMatterHelloHello = style({
	opacity: 0.4,
})
