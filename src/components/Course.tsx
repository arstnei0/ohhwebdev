import { Component, Show, createEffect, createMemo, onMount } from "solid-js"
import { Dynamic } from "solid-js/web"
import { course, nextPage, pageClass, previousPage } from "./Course.css"
import { createStore, Store } from "solid-js/store"
import Button, { PointButton } from "./ui/Button"
import { toast } from "~/lib/toast"
import {
	chapter,
	chapterId,
	commandPalette,
	goToNextPage,
	goToNextPhase,
	goToPreviousPage,
	hasNextPage,
	hasNextPhase,
	hasPreviousPage,
	page,
	pageId,
	phase,
	phaseId,
	setNextPageEnabled,
	setZen,
	toggleZen,
	zen,
} from "~/lib/course"
import { createShortcut } from "@solid-primitives/keyboard"
import CommandPalette from "./CommandPalette"
import { isMac } from "~/lib/utils/platform"
import Progress from "./Progress"

export const Course: Component<{}> = (props) => {
	const p = createMemo(() => {
		const key = `${chapterId()}:${phaseId()}:${pageId()}`
		if (!localStorage.getItem(key)) {
			localStorage.setItem(key, JSON.stringify(page().store ?? {}))
		}
		const [store, setStore] = createStore(
			JSON.parse(localStorage.getItem(key) as string)
		)
		createEffect(() => {
			localStorage.setItem(key, JSON.stringify({ ...store }))
		})
		return (
			<Dynamic
				component={page().content}
				next={{
					disable: () => setNextPageEnabled(false),
					enable: () => setNextPageEnabled(true),
				}}
				store={store}
				setStore={setStore}
				page={{
					next: goToNextPage,
					previous: goToPreviousPage,
				}}
			></Dynamic>
		)
	})

	onMount(() => {
		createShortcut(["Control", "K"], () => {
			commandPalette(!commandPalette())
		})
		createShortcut(["Control", "Shift", "Z"], toggleZen)
	})

	return (
		<div class={course}>
			<Progress />
			<div class={pageClass}>
				{p()}
				<Show when={hasNextPhase() && !phase().pages[pageId() + 1]}>
					<PointButton onClick={goToNextPhase}>
						Next Phase
					</PointButton>
				</Show>
			</div>
			<div
				class={previousPage}
				classList={{
					locked: !hasPreviousPage(),
				}}
				onClick={goToPreviousPage}
			>
				{/* prettier-ignore */}
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"></path></svg>
			</div>
			<div
				class={nextPage}
				classList={{
					locked: !hasNextPage(),
				}}
				onClick={goToNextPage}
			>
				{/* prettier-ignore */}
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"></path></svg>
			</div>
			<CommandPalette
				show={commandPalette()}
				onHide={() => commandPalette(false)}
			></CommandPalette>
		</div>
	)
}
