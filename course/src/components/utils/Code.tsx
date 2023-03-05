import fetch from "solid-use/fetch"
import { codeClass } from "./Code.css"
import { Show } from "solid-js"

export default (props: { id: string }) => {
	const code = fetch(`/code/${props.id}`).json<{
		raw: string
		code: string
	}>()
	let codeEl = null as unknown as HTMLDivElement

	return (
		<>
			<Show when={code.status === "success"} fallback={<p>Code Loading...</p>}>
				<div ref={codeEl} class={codeClass} innerHTML={code.value.code}></div>
			</Show>
		</>
	)
}
