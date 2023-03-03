import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "./theme/color.css"
import { font } from "./theme/font.css"
import { transition } from "./theme/transition"

globalStyle("body", {
	backgroundColor: color.background,
	color: color.font.primary,
	fontFamily: font.sans,
	overflowY: "hidden",
})

globalStyle("*", {
	transition,
})
