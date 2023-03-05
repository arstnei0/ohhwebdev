import type { Component } from "solid-js"
import type { SetStoreFunction } from "solid-js/store"

export type PageContent<Store = any> = Component<{
	next: { disable: () => void; enable: () => void }
	store: Store
	setStore: SetStoreFunction<Store>
	page: {
		next: () => void
		previous: () => void
	}
}>
export type Page<Store = any> = {
	content: PageContent<Store>
	store?: Store
	img?: string
}
