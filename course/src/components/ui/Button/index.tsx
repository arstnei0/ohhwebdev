import type { JSX } from "solid-js/jsx-runtime"
import { button, pointer, pointerWrapper } from "./index.css"

const Button = (props: { children: JSX.Element; onClick?: () => void }) => {
	return (
		<button class={button} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export const PointButton = (props: {
	children: JSX.Element
	onClick?: () => void
}) => {
	return (
		<Button onClick={props.onClick}>
			{props.children}
			<div class={pointerWrapper}>
				<div class={pointer}></div>
			</div>
		</Button>
	)
}

export default Button
