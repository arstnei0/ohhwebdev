import { style } from "@vanilla-extract/css"

export const container = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100vh",
	height: "100vh",
	overflowY: "hidden",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})
