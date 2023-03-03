import { chapter0 } from "./chapters/0"
import type { Phase } from "./phase"

export type Chatper = {
	n: number
	name: string
	phases: Phase[]
}

export const chapters: Chatper[] = [chapter0]
