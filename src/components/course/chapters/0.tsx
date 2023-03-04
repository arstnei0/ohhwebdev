import type { Chatper } from "../chapter"
import AdventureImg from "~/assets/img/adventure.svg"
import IMacImg from "~/assets/img/imac.svg"
import { OhhWebDevTitle } from "../../utils/brand"
import { bgImg } from "./0.css"
import { createEffect, createSignal } from "solid-js"
import Checkbox from "~/components/ui/Checkbox"
import type { Page } from "../page"
import Tip from "~/components/ui/Tip"
import Code from "~/components/utils/Code"
import More from "~/components/ui/More"

export const chapter0 = {
	n: 0,
	name: "Getting Started",
	phases: [
		{
			n: 1,
			title: "Get ready",
			pages: [
				{
					content: () => {
						return (
							<>
								<h1>
									Welcome to <OhhWebDevTitle />!
								</h1>
								<p>
									My name is Zihan and I am here to guide you
									and help you master web development from
									zero.
								</p>
								<p>
									Once you are ready, click on the button at
									the right side of this page and start the
									amazing journey.
								</p>
							</>
						)
					},
				},
				{
					content: (props) => {
						return (
							<>
								<h1>What is Web Dev?</h1>
								<p>
									Basically, it's just{" "}
									<u>developing websites</u>. <br />
									It can range from{" "}
									<i>a simple single static website </i>to
									<i> complex web applications.</i>
								</p>
								<p>
									Do you wanna build deautiful websites?
									<br />
									Move on, and I will teach you how!
								</p>
								<img class={bgImg} src={AdventureImg}></img>
							</>
						)
					},
				},
				{
					store: { laptop: false, brain: false, perseverance: false },
					content: ({ store, next, setStore }) => {
						createEffect(() => {
							if (
								store.laptop &&
								store.brain &&
								store.perseverance
							)
								next.enable()
							else next.disable()
						})

						return (
							<>
								<h1>"What do I need for web dev❔"</h1>
								<p>
									Good question. Check if you've got these
									things:
								</p>
								<div>
									<Checkbox
										value={store.laptop}
										onToggle={() =>
											setStore((s) => ({
												...s,
												laptop: !s.laptop,
											}))
										}
										label="A working laptop💻 (or just a computer🖥️)"
									/>
									<Checkbox
										value={store.brain}
										onToggle={() =>
											setStore((s) => ({
												...s,
												brain: !s.brain,
											}))
										}
										label="A working brain🧠"
									/>
									<Checkbox
										value={store.perseverance}
										onToggle={() =>
											setStore((s) => ({
												...s,
												perseverance: !s.perseverance,
											}))
										}
										label="Perseverance💪"
									/>
								</div>
								<img class={bgImg} src={IMacImg}></img>
							</>
						)
					},
				} as Page<{
					laptop: boolean
					brain: boolean
					perseverance: boolean
				}>,
				{
					content: ({ next, store }) => {
						return (
							<>
								<h1>Good. </h1>
								<p>Now let's get started.</p>
							</>
						)
					},
				},
			],
		},
		{
			n: 2,
			title: "How to use this course properly",
			pages: [
				{
					n: 1,
					content: () => {
						return (
							<>
								<h1>How to use this course properly</h1>
								<p>
									This web page is{" "}
									<strong>fully interactive</strong>.<br />
									Try to press{" "}
									<strong>Control + Shift + Z</strong> and see
									where we are now.
								</p>
								<p>
									Pressing{" "}
									<strong>Control + Shift + Z</strong> means `
									<strong>Toggle Zen Mode</strong>`.
								</p>
								<p>
									At the top of this page, when you are not in
									Zen Mode, you'll see your progress. You can
									also navigate between phases and chapters
									there.
								</p>
								<p>
									Use your arrow keys (Left or Right) to
									navigate between pages quickly.
								</p>
							</>
						)
					},
				},
				{
					n: 2,
					content: () => {
						return (
							<>
								<h1>
									Try to press <strong>Control + K</strong>{" "}
									now.
								</h1>
								<p>
									That is the CP (Command Palette), the most
									powerful tool. You can do almost everything
									in the command palette.
								</p>
								<Tip>
									Use the arrow keys (Up or Down) to select
									commands and press enter to execute them.
									Press Escape to exit the CP.
								</Tip>
							</>
						)
					},
				},
				{
					n: 3,
					content: () => {
						return (
							<>
								<h1>"How did you build this course?"</h1>
								<p>
									This course is fully open source on{" "}
									<a
										href="https://github.com/zihan-ch/ohhwebdev"
										target="_blank"
									>
										Github
									</a>
									.
									<br />
									You can follow me on{" "}
									<a
										href="https://twitter.com/zihanch"
										target="_blank"
									>
										Twitter
									</a>{" "}
									to get the latest updates about OhhWebDev.
								</p>
							</>
						)
					},
				},
			],
		},
		{
			n: 3,
			title: `Softwares to install`,
			pages: [
				{
					n: 1,
					content: () => {
						return (
							<>
								<h1>Softwares to install</h1>
								<p>
									First you need to install a powerful code
									editor{" "}
									<a
										href="https://code.visualstudio.com/"
										target="_blank"
									>
										VS Code
									</a>{" "}
									(Visual Studio Code).{" "}
									<More>
										VS Code is also built with web
										technologies, which means that it can
										literally run in the browser (with some
										features not available).
									</More>
									<br />
									It has clear installation instructions on
									its homepage, just follow it according to
									your system setup.
								</p>
							</>
						)
					},
				},
			],
		},
	],
} as Chatper
