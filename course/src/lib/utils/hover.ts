import atom from "solid-use/atom"

export const createHover = (delay: number | null = null) => {
	const hovering = atom(false)
	let clear = null as null | number
	const hoverIn =
		delay === null
			? () => {
					hovering(true)
			  }
			: () => {
					if (clear) clearInterval(clear)
					hovering(true)
			  }
	const hoverOut =
		delay === null
			? () => {
					hovering(false)
			  }
			: () => {
					clear = setTimeout(
						() => hovering(false),
						delay
					) as unknown as number
			  }

	return [
		hovering,
		{
			onMouseEnter: hoverIn,
			onMouseLeave: hoverOut,
			onFocusIn: hoverIn,
			onFocusOut: hoverOut,
		},
	] as const
}
