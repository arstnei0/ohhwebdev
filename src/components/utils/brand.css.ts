import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { font } from "~/styles/theme/font.css"
import { transitionFn } from "~/styles/theme/transition"

export const gradient = style({
	display: "inline-block",
	fontFamily: font.mono,
	filter: `drop-shadow(0px 15px 8px #FFFFFF66)`,
	cursor: "none",
})

const g = {
	"-webkit-text-fill-color": "transparent",
	"-webkit-background-clip": "text",
} as any

export const ohh = style({
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	...g,
})
export const web = style({
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	...g,
})
export const dev = style({
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	...g,
})
export const equal = style({
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	...g,
})

globalStyle(`${gradient} > *`, {
	display: "inline-block",
	zIndex: 100,
	transition: `all .5s ${transitionFn}`,
})

const float = keyframes({
	"0%": {
		transform: "scale(1.05)",
	},
	"50%": {
		transform: "scale(1)",
	},
	"100%": {
		transform: "scale(1.05)",
	},
})

globalStyle(`${gradient}:not(:hover)`, {
	animation: `3s linear 0s ${float} infinite`,
})

globalStyle(`${gradient}:hover ${ohh}`, {
	transform: "rotate(-30deg) translateY(-40px) translateX(-30px) scale(1.3)",
})

globalStyle(`${gradient}:hover ${web}`, {
	transform: "rotate(-5deg) translateY(-60px) translateX(-5px) scale(1.6)",
})

globalStyle(`${gradient}:hover ${equal}`, {
	transform: "rotate(7deg) translateY(-60px) translateX(5px) scale(1.6)",
})

globalStyle(`${gradient}:hover ${dev}`, {
	transform: "rotate(30deg) translateY(-40px) translateX(30px) scale(1.3)",
})
