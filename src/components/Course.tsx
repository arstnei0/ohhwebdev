import {
	Component,
	Show,
	batch,
	createEffect,
	createMemo,
	createSignal,
	onMount,
	useTransition,
} from "solid-js"
import { Dynamic } from "solid-js/web"
import {
	course,
	fadeInClass,
	fadeOutClass,
	nextPage,
	ohhwebdevTitle,
	pageClass,
	previousPage,
	progressText,
	progressTextLight,
	progressWrapper,
} from "./Course.css"
import { createStore, Store } from "solid-js/store"
import { chapters } from "./course/chapter"
import Button, { PointButton } from "./ui/Button"
import { storedSignal } from "~/lib/store"
import { toast } from "~/lib/toast"

type Progress = {
	chapter: number
	phase: number
	page: number
}

const progressKey = "progress"
if (!localStorage.getItem(progressKey)) {
	localStorage.setItem(
		progressKey,
		JSON.stringify({
			chapter: 0,
			phase: 0,
			page: 0,
		} as Progress)
	)
}
const progressStored = JSON.parse(
	localStorage.getItem(progressKey) as string
) as Progress
const [progress, setProgress] = createSignal(progressStored)
createEffect(() => {
	localStorage.setItem(progressKey, JSON.stringify(progress()))
})

const [chapterId, setChapterId] = createSignal(progressStored.chapter)
const chapter = createMemo(() => chapters[chapterId()])

const [phaseId, setPhaseId] = createSignal(progressStored.phase)
const phase = createMemo(() => chapter().phases[phaseId()])
const hasNextPhase = () => !!chapter().phases[phaseId() + 1]
const goToNextPhase = () => {
	if (hasNextPhase()) {
		batch(() => {
			setPageId(0)
			setPhaseId(($) => $ + 1)
		})
	}
}

const [nextPageEnabled, setNextPageEnabled] = createSignal(true)
const [pageId, setPageId] = createSignal(progressStored.page)
const page = createMemo(() => phase().pages[pageId()])
const hasPreviousPage = createMemo(
	() => !!chapter().phases[phaseId()].pages[pageId() - 1]
)
const hasNextPage = createMemo(
	() => nextPageEnabled() && !!chapter().phases[phaseId()].pages[pageId() + 1]
)
const goToNextPage = () => {
	if (hasNextPage()) setPageId(($) => $ + 1)
}
const goToPreviousPage = () => {
	if (hasPreviousPage()) setPageId(($) => $ - 1)
}

createEffect(() => {
	setProgress({
		chapter: chapterId(),
		phase: phaseId(),
		page: pageId(),
	})
})

createEffect(() => {
	pageId()
	setNextPageEnabled(true)
})

const [zen, setZen] = storedSignal("zen", true)

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
		window.addEventListener("keyup", (e) => {
			if (e.key === "z") {
				setZen(($) => !$)
				if (zen()) {
					toast("Zen Mode Enabled")
				} else {
					toast("Zen Mode Disabled")
				}
			}
		})
	})

	return (
		<div class={course}>
			<div class={progressWrapper}>
				<h1 class={progressText}>
					<span class={ohhwebdevTitle}>ohhwebdev</span>
					<Show
						when={zen()}
						fallback={
							<>
								<span class={progressTextLight}>.chapter(</span>
								{chapter().n}
								<span class={progressTextLight}>, "</span>
								{chapter().name}
								<span class={progressTextLight}>").phase(</span>
								{phase().n}
								<span class={progressTextLight}>, "</span>
								{phase().title}
								<span class={progressTextLight}>")</span>
							</>
						}
					>
						<></>
					</Show>
				</h1>
			</div>
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
		</div>
	)
}
