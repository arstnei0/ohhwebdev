import atom from "solid-use/atom"

export const createHover = (delay: number | null = null) => {
	const hovering = atom(false)
	let clear = null as null | number
	return [
		hovering,
		delay === null
			? {
					onMouseEnter: () => {
						hovering(true)
					},
					onMouseLeave: () => {
						hovering(false)
					},
			  }
			: {
					onMouseEnter: () => {
						if (clear) clearInterval(clear)
						hovering(true)
					},
					onMouseLeave: () => {
						clear = setTimeout(() => hovering(false), delay)
					},
			  },
	] as const
}
