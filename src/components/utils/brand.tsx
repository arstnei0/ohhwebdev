import { dev, equal, gradient, ohh, web } from "./brand.css"

export const OhhWebDevTitle = () => (
	<span class={gradient}>
		<span class={ohh}>{"<"}Ohh</span>
		<span class={web}>&nbsp;web</span>
		<span class={equal}>{"="}</span>
		<span class={dev}>
			{'"'}dev{'" />'}
		</span>
	</span>
)
