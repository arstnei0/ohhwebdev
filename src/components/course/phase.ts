import { Laziable } from "~/lib/utils/lazy"
import type { Page } from "./page"

export type Phase = {
	n: number
	title: string
	pages: Page[]
}
