import { keyframes } from "@vanilla-extract/css"

export const fadeOut = keyframes({
	"0%": {
		opacity: 1,
	},
	"100%": {
		opacity: 0,
	},
})
export const fadeIn = keyframes({
	"0%": {
		opacity: 0,
	},
	"100%": {
		opacity: 1,
	},
})

export const scaleIn = keyframes({
	"0%": {
		transform: `scale(1.5)`,
	},
	"100%": {
		transform: `scale(1)`,
	},
})
