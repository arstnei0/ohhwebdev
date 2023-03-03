import { Component, createSignal, onMount } from "solid-js"
import { course } from "./Course.css"

const [chapter, setChapter] = createSignal(0)

export const Course: Component<{}> = (props) => {
	onMount(() => {
		window.addEventListener("keyup", (e) => {
			console.log(e.defaultPrevented)
		})
	})

	return <div class={course}></div>
}
