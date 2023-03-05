export const flex = {
	display: "flex",
} as const
export const flexCenter = {
	...flex,
	alignItems: "center",
	justifyContent: "center",
} as const
