import { JSXElement } from "solid-js"
import { moreButton, moreContent, moreWrapper } from "./index.css"

export default (props: { children: JSXElement; width?: string }) => {
	return (
		<>
			<div class={moreWrapper} style={{ width: props.width }}>
				<div class={moreButton} tabIndex={0}>
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></path></svg>
				</div>
				<div class={moreContent}>{props.children}</div>
			</div>
		</>
	)
}
