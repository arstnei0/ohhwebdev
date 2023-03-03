import { createEffect, createSignal } from "solid-js"

export const storedSignal = <T>(key: string, initial: T) => {
	if (!localStorage.getItem(key)) {
		localStorage.setItem(key, JSON.stringify(initial))
	}
	const stored = JSON.parse(localStorage.getItem(key) as string) as T
	const signal = createSignal(stored)
	createEffect(() => {
		localStorage.setItem(key, JSON.stringify(signal[0]()))
	})
	return signal
}
