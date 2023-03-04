import { JSX } from "solid-js"
import { shiningRect, box } from "./index.css"

export default (props: { children: JSX.Element; pre: JSX.Element }) => {
	return (
		<div class={box}>
			{props.pre}
			<div class={shiningRect}></div>
			{props.children}
		</div>
	)
}
