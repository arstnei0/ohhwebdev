import type { Phase } from "./phase"

export type Chatper = {
	n: number
	name: string
	phases: Phase[]
}

export const chapters: Chatper[] = [
	{
		n: 1,
		name: "Getting Started",
		phases: [
			{
				n: 1,
				title: "Excuse me?",
				pages: [
					{
						content: () => {
							return (
								<>
									<h1>So, you are here?</h1>
									<p>Ok. Let me introduce myself first.</p>
									<p>
										My name is Zihan. Here is Ohh Web Dev.
									</p>
								</>
							)
						},
					},
				],
			},
		],
	},
]
