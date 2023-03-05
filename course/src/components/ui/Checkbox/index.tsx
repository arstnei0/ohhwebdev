import type { JSX } from "solid-js"
import { checkbox, checkboxIcon } from "./index.css"

export default (props: {
	value: boolean
	onToggle: () => void
	label?: JSX.Element
}) => {
	return (
		<div
			class={checkbox}
			onClick={props.onToggle}
			classList={{
				checked: props.value,
			}}
		>
			<span class={checkboxIcon}></span>
			{props.label}
		</div>
	)
}
