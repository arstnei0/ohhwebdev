import { batch, createEffect, createMemo, createSignal } from "solid-js"
import { createStoredSignal } from "~/lib/store"
import { chapters } from "../components/course/chapter"
import atom from "solid-use/atom"
import { toast } from "./toast"

export type Progress = {
	chapter: number
	phase: number
	page: number
}

export const [progress, setProgress] = createStoredSignal("progress", {
	chapter: 0,
	phase: 0,
	page: 0,
} as Progress)

export const [chapterId, setChapterId] = createSignal(progress().chapter)
export const chapter = createMemo(() => chapters[chapterId()])

export const [phaseId, setPhaseId] = createSignal(progress().phase)
export const phase = createMemo(() => chapter().phases[phaseId()])
export const hasNextPhase = () => !!chapter().phases[phaseId() + 1]
export const hasPreviousPhase = () => !!chapter().phases[phaseId() - 1]
export const toastPhase = () => {
	toast(`Now you are at Phase ${phase().n}: ${phase().title}.`)
}
export const goToPhase = (n: number) => {
	batch(() => {
		setPageId(0)
		setPhaseId(n)
	})
	toastPhase()
}
export const goToPreviousPhase = () => {
	if (hasPreviousPhase()) {
		batch(() => {
			setPageId(0)
			setPhaseId(($) => $ - 1)
		})
		toastPhase()
	} else {
		toast(`There are no previous phases!`)
	}
}
export const goToNextPhase = () => {
	if (hasNextPhase()) {
		batch(() => {
			setPageId(0)
			setPhaseId(($) => $ + 1)
		})
		toastPhase()
	} else toast(`There are no next phases!`)
}

export const [nextPageEnabled, setNextPageEnabled] = createSignal(true)
export const [pageId, setPageId] = createSignal(progress().page)
createEffect(() => {
	pageId()
	setNextPageEnabled(true)
})
export const page = createMemo(() => phase().pages[pageId()])
export const hasPreviousPage = createMemo(
	() => !!chapter().phases[phaseId()].pages[pageId() - 1]
)
export const hasNextPage = createMemo(
	() => nextPageEnabled() && !!chapter().phases[phaseId()].pages[pageId() + 1]
)
export const goToNextPage = () => {
	if (hasNextPage()) setPageId(($) => $ + 1)
}
export const goToPreviousPage = () => {
	if (hasPreviousPage()) setPageId(($) => $ - 1)
}

createEffect(() => {
	setProgress({
		chapter: chapterId(),
		phase: phaseId(),
		page: pageId(),
	})
})

export const [zen, setZen] = createStoredSignal("zen", true)
export const toggleZen = () => {
	setZen(($) => !$)
	if (zen()) {
		toast("Zen Mode Enabled")
	} else {
		toast("Zen Mode Disabled")
	}
}

export const commandPalette = atom(false)
