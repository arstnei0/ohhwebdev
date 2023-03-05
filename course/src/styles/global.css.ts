import { globalStyle, style } from "@macaron-css/core"
import { color } from "./theme/color.css"
import { font } from "./theme/font.css"
import { transition } from "./theme/transition.css"

globalStyle("body", {
	backgroundColor: color.background,
	color: color.font.primary,
	fontFamily: font.sans,
	overflow: "hidden",
})

globalStyle("*", {
	transition,
	boxSizing: "border-box",
})

globalStyle("*::-webkit-scrollbar", {
	width: "10px",
})

globalStyle("*::-webkit-scrollbar-thumb", {
	backgroundColor: `${color.font.primary}22`,
	borderRadius: "4px",
})

globalStyle("*::-webkit-scrollbar-thumb:hover", {
	backgroundColor: "#60996644",
})

globalStyle("*::-webkit-scrollbar-thumb:active", {
	backgroundColor: "#60996666",
})

globalStyle("*::-webkit-scrollbar-track", {
	background: `${color.background}55`,
	borderRadius: "4px",
})
