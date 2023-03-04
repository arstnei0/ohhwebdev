import { globalStyle } from "@vanilla-extract/css"
import { color } from "./theme/color.css"
import { borderRadius } from "./theme/sizes.css"
import { transitionFn } from "./theme/transition"

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
	zIndex: -5,
	borderRadius,
	height: "120%",
	top: "-10%",
	width: "140%",
	left: "-20%",
	backgroundColor: `${color.backgroundLighter}00`,
})

globalStyle("a:hover::before", {
	backgroundColor: `${color.backgroundLighter}99`,
})
