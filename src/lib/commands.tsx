import { Component } from "solid-js"
import {
	goToNextPhase,
	goToPreviousPage,
	goToPreviousPhase,
	setZen,
	toggleZen,
} from "./course"

export type Command = {
	name: string
	action: () => void
	icon?: Component
}
export const commands: Command[] = [
	{
		name: "Toggle Zen Mode",
		action: toggleZen,
		// prettier-ignore
		icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 6h17.143L7 24h18m4-9h12L29 29h12m-26 3h9.048L15 42h10"></path></svg>,
	},
	{
		name: "Go to Previous Phase",
		action: () => goToPreviousPhase(),
	},
	{
		name: "Go to Next Phase",
		action: goToNextPhase,
	},
]
