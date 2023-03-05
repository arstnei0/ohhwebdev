import { globalStyle } from "@macaron-css/core"
import { color } from "./theme/color.css"
import { font } from "./theme/font.css"
import { borderRadius } from "./theme/sizes.css"
import { transition, transitionFn } from "./theme/transition.css"

globalStyle("body", {
	fontSize: "1.4em",
})

globalStyle("a", {
	textDecoration: "none",
	color: color.font.accent,
	display: "inline-block",
	padding: "4px .5em",
	borderRadius,
	backgroundColor: color.backgroundLighter,
})

globalStyle("a:hover", {
	transform: "scale(1.2)",
	backgroundColor: color.font.accent,
	color: color.background,
})

// globalStyle("a::before", {
// 	content: "",
// 	position: "absolute",
// 	zIndex: -100,
// 	borderRadius,
// 	height: "120%",
// 	top: "-10%",
// 	width: "140%",
// 	left: "-20%",
// 	display: "none",
// 	backgroundColor: `${color.backgroundLighter}99`,
// })

// globalStyle("a:hover::before", {
// 	display: "block",
// })

globalStyle(`code.inline`, {
	display: "inline-block",
	// position: "relative",
	fontFamily: font.mono,
	padding: "4px .6em",
	backgroundColor: color.backgroundLighter,
	borderRadius,
})
globalStyle(`code.inline:hover`, {
	backgroundColor: color.font.primary,
	color: color.background,
	transform: "scale(1.15)",
})

globalStyle("img", {
	width: "70%",
	borderRadius,
})

globalStyle("main img:hover", {
	filter: "blur(0)",
	transform: "scale(1.04)",
})

globalStyle("main img", {
	filter: "blur(1px)",
})
