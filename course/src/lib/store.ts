import { createLocalStorage } from "@solid-primitives/storage"
import { createEffect, createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import atom from "solid-use/atom"

export const [storage, setStorage] = createStore({} as Record<string, any>)

export const createStoredSignal = <T>(key: string, initial: T) => {
	if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(initial))
	const stored = JSON.parse(localStorage.getItem(key) as string) as T
	const signal = createSignal(stored)
	createEffect(() => setStorage(key, signal[0]()))
	createEffect(() => localStorage.setItem(key, JSON.stringify(storage[key])))
	return signal
}

export const createStoredAtom = <T>(key: string, initial: T) => {
	if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(initial))
	const stored = JSON.parse(localStorage.getItem(key) as string) as T
	setStorage(key, stored)
	const $ = atom(stored)
	createEffect(() => setStorage(key, $()))
	createEffect(() => localStorage.setItem(key, storage[key]))
	return $
}
