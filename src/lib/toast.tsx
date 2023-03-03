import { JSX, Show, createSignal, onMount } from "solid-js"
import { toastClass, toastFadeOut, toastWrapper } from "./toast.css"
import { Portal, render } from "solid-js/web"
import { createStore, produce } from "solid-js/store"

export const Toast = (props: { children: JSX.Element }) => {
	let wrapper = null as unknown as HTMLDivElement
	const [out, setOut] = createSignal(false)
	setTimeout(() => setOut(true), 2500)

	return (
		<div
			class={toastWrapper}
			classList={{
				[toastFadeOut]: out(),
			}}
			ref={wrapper}
		>
			<div class={toastClass}>{props.children}</div>
		</div>
	)
}
const [content, setContent] = createSignal(null as null | JSX.Element)
let clearTimeout$ = null as null | number

const el = document.createElement("div")
document.body.appendChild(el)
render(() => {
	return (
		<>
			<Show when={content() !== null}>
				<Toast>{content()}</Toast>
			</Show>
		</>
	)
}, el)

export const toast = (content: JSX.Element) => {
	setContent(content)
	if (clearTimeout$) clearTimeout(clearTimeout$)
	clearTimeout$ = setTimeout(() => {
		setContent(null)
	}, 3000)
}
