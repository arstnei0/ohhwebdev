import { globalStyle } from "@vanilla-extract/css"
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
})

globalStyle("a:hover", {
	transform: "scale(1.2)",
})

globalStyle("a::before", {
	content: "",
	position: "absolute",
	zIndex: -100,
	borderRadius,
	height: "120%",
	top: "-10%",
	width: "140%",
	left: "-20%",
	display: "none",
	backgroundColor: `${color.backgroundLighter}99`,
})

globalStyle("a:hover::before", {
	display: "block",
})

globalStyle(`code.inline`, {
	display: "inline-block",
	position: "relative",
	fontFamily: font.mono,
})

globalStyle("code.inline::before", {
	content: "",
	position: "absolute",
	zIndex: -5,
	borderRadius,
	height: "140%",
	top: "-20%",
	width: "120%",
	left: "-10%",
	backgroundColor: color.backgroundLighter,
	transition,
})

globalStyle("code.inline:hover::before", {
	backgroundColor: color.backgroundLighterer,
	transform: "scale(1.2)",
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
