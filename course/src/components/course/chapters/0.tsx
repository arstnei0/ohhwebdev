import type { Chatper } from "../chapter"
import AdventureImg from "~/assets/img/chapter0/adventure.svg"
import IMacImg from "~/assets/img/chapter0/imac.svg"
import { OhhWebDevTitle } from "../../utils/brand"
import { createEffect, createSignal } from "solid-js"
import Checkbox from "~/components/ui/Checkbox"
import type { Page } from "../page"
import Tip from "~/components/ui/Tip"
import Code from "~/components/utils/Code"
import More from "~/components/ui/More"
import VSCodeSelectColorThemeImg from "~/assets/img/chapter0/vscode-select-color-theme.png"
import VSCodeTerminalImg from "~/assets/img/chapter0/vscode-terminal.gif"
import HTMLExampleResult from "~/assets/img/chapter0/html-example-result.png"
import SvelteKitProjectResultImg from "~/assets/img/chapter0/sveltekit-project.png"
import SvelteKitInstallImg from "~/assets/img/chapter0/sveltekit-pnpm-install.gif"
import SvelteKitDevImg from "~/assets/img/chapter0/sveltekit-dev.gif"
import CreateSvelteImg from "~/assets/img/chapter0/create-svelte.gif"
import ChangePageSvelteImg from "~/assets/img/chapter0/changepagesvelte.gif"
import InlineCode from "~/components/ui/InlineCode"

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
									My name is Zihan and I am here to guide you and help you master
									web development from zero.
								</p>
								<p>
									Once you are ready, click on the button at the right side of
									this page and start the amazing journey.
								</p>
							</>
						)
					},
				},
				{
					content: props => {
						return (
							<>
								<h1>What is Web Dev?</h1>
								<p>
									Basically, it's just <u>developing websites</u>. <br />
									It can range from <i>a simple single static website </i>
									to
									<i> complex web applications.</i>
								</p>
								<p>
									Do you wanna build deautiful websites?
									<br />
									Move on, and I will teach you how!
								</p>
							</>
						)
					},
					img: AdventureImg,
				},
				{
					store: { laptop: false, brain: false, perseverance: false },
					content: ({ store, next, setStore }) => {
						createEffect(() => {
							if (store.laptop && store.brain && store.perseverance) next.enable()
							else next.disable()
						})

						return (
							<>
								<h1>"What do I need for web dev❔"</h1>
								<p>Good question. Check if you've got these things:</p>
								<div>
									<Checkbox
										value={store.laptop}
										onToggle={() =>
											setStore(s => ({
												...s,
												laptop: !s.laptop,
											}))
										}
										label="A working laptop 💻 (or just a computer 🖥️)"
									/>
									<Checkbox
										value={store.brain}
										onToggle={() =>
											setStore(s => ({
												...s,
												brain: !s.brain,
											}))
										}
										label="A working brain 🧠"
									/>
									<Checkbox
										value={store.perseverance}
										onToggle={() =>
											setStore(s => ({
												...s,
												perseverance: !s.perseverance,
											}))
										}
										label="Perseverance 💪"
									/>
								</div>
							</>
						)
					},
					img: IMacImg,
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
					content: () => {
						return (
							<>
								<h1>How to use this course properly</h1>
								<p>
									This web page is <strong>fully interactive</strong>.<br />
									Try to press <strong>Control + Shift + Z</strong> and see where
									we are now.
								</p>
								<p>
									Pressing <strong>Control + Shift + Z</strong> means `
									<strong>Toggle Zen Mode</strong>`.
								</p>
								<p>
									At the top of this page, when you are not in Zen Mode, you'll
									see your progress. You can also navigate between phases and
									chapters there.
								</p>
								<p>
									Use your arrow keys (Left or Right) to navigate between pages
									quickly.
								</p>
							</>
						)
					},
				},
				{
					content: () => {
						return (
							<>
								<h1>
									Try to press <strong>Control + K</strong> now.
								</h1>
								<p>
									That is the CP (Command Palette), the most powerful tool. You
									can do almost everything in the command palette.
								</p>
								<Tip>
									Use the arrow keys (Up or Down) to select commands and press
									enter to execute them. Press Escape to exit the CP.
								</Tip>
							</>
						)
					},
				},
				{
					content: () => {
						return (
							<>
								<h1>"How did you build this course?"</h1>
								<p>
									This course is fully open source on{" "}
									<a href="https://github.com/zihan-ch/ohhwebdev" target="_blank">
										Github
									</a>
									.
									<br />
									You can follow me on{" "}
									<a href="https://twitter.com/zihanch" target="_blank">
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
			title: `Software to install`,
			pages: [
				{
					content: () => {
						return (
							<>
								<h1>Software to install</h1>
								<p>
									First you need to install a powerful code editor{" "}
									<a href="https://code.visualstudio.com/" target="_blank">
										VS Code
									</a>{" "}
									(Visual Studio Code).{" "}
									<More>
										VS Code is also built with web technologies, which means
										that it can literally run in the browser (with some features
										not available).
									</More>
									<br />
									It has clear installation instructions on its homepage, just
									follow it according to your system setup.
								</p>
								<p>
									VS Code has a large community and thousands of extensions
									including different beautiful themes. Press{" "}
									<InlineCode>Cmd + K</InlineCode> then{" "}
									<InlineCode>Cmd + T</InlineCode> (Use Ctrl instead of Cmd on
									Windows).
								</p>
								<p>
									You can go browse some additional themes and choose your
									favourite one. Some popular options are Dracula, One Dark Pro,
									Community Material Theme, etc. My choice is{" "}
									<a href="https://catppuccin.com/" target="_blank">
										Catppuccin Mocha
									</a>
									.
								</p>
							</>
						)
					},
					img: VSCodeSelectColorThemeImg,
				},
				{
					content: () => {
						return (
							<>
								<h1>Install Node.js</h1>
								<p>
									Just follow the instructions on its homepage. Remember to
									install the latest version (19.7.0).
								</p>
								<p>
									After you installed it, open a new terminal and type{" "}
									<InlineCode>node -v</InlineCode>
									and enter. You should see your Node.js' version then.
								</p>
								<h2>"How do I get a terminal?"</h2>
								<p>
									VS Code just has a easy way to open and manage terminals! In the
									menu bar, you will see a Terminal bar, which contains the item
									"New Terminal".
								</p>
								<img src={VSCodeTerminalImg}></img>
								<p>
									Then, run <InlineCode>corepack enable</InlineCode> in your
									terminal. This enables us to use{" "}
									<a href="https://pnpm.io/">pnpm</a> (Performant Node.js Package
									Manager). It's an alternative to{" "}
									<a href="https://npm.im/">npm</a> (Node Package Manager). It's
									much faster and it can save a lot of disk space than npm with
									the full functionality of npm.
									<br />
									After running <InlineCode>corepack enable</InlineCode>, type{" "}
									<InlineCode>pnpm -v</InlineCode>, you should see your pnpm's
									version printed.
								</p>
							</>
						)
					},
					img: "https://nodejs.org/static/images/logo.svg",
				},
				{
					content: () => {
						return (
							<>
								<h1>Install Git</h1>
								<p>
									<a href="https://git-scm.com/">Git</a> is a version control
									system that developers use everyday. Install that{" "}
									<a href="https://git-scm.com/downloads">here</a>
									.
									<br />
									Don't be scared of it! I will teach you how to use it when you
									need it.
								</p>
								<h2>Github</h2>
								<p>
									You've probably heard of <a href="https://github.com">Github</a>{" "}
									before. It's a part of developers' life. Make sure you have a
									Github account.
								</p>
								<p>
									If you have no idea what Github actually it, this video is a
									nice one to explain that to you.
									{/* prettier-ignore *//* @ts-ignore */}
									<iframe width="560" height="315" src="https://www.youtube.com/embed/pBy1zgt0XPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								</p>
							</>
						)
					},
				},
				{
					content: () => {
						return (
							<>
								<h1>That's all we need!</h1>
								<p>
									In the next phase, I will introduce the basic concepts of web
									dev. You'll write your first web page there.
								</p>
							</>
						)
					},
				},
			],
		},
		{
			n: 4,
			title: "HTML, CSS & JS",
			pages: [
				{
					content: () => (
						<>
							<h1>HTML, CSS, JS</h1>
							<p>
								To build a web page, you'll need to know three different languages:
								HTML, CSS, JS.
							</p>
							<p>
								{" "}
								What is the connection between these three languages?
								<br /> HTML describes the <b>content</b> of the page, CSS adds{" "}
								<b>styling</b> to the page (make the content look better), and JS
								adds <b>functionalities</b> to the page (e.g. buttons).
							</p>
						</>
					),
				},

				{
					content: () => (
						<>
							<h1>HTML</h1>
							<p>
								HyperText Markup Language (who cares its full name) looks something
								like this:
							</p>
							<Code id="chapter0/src/routes/+page.svelte"></Code>
							And the code above will show this in the browser:
							<img src={HTMLExampleResult}></img>
							<h2>Wait, where do I put the code?</h2>
							<p>
								We are gonna use a framework called{" "}
								<a href="https://kit.svelte.dev/">SvelteKit</a> to build our example
								website. It uses `.svelte` files with the Svelte syntax, which you
								can just write HTML, CSS and JS in.
							</p>
							<p>
								To create a new SvelteKit project, go to your terminal again, and go
								to your home directory (use{" "}
								<code class="inline">
									cd {"<"}directory{">"}
								</code>{" "}
								to change your current directory, on Mac, you can go to your home
								directory by typing <InlineCode>cd ~</InlineCode>), type
								<InlineCode>pnpm create svelte chapter0</InlineCode>. Choose the
								option "Skeleton project" as the Svelte app template, the option
								"Yes, using TypeScript syntax" for the "Add type checking with
								TypeScript?". No additional options are needed for now. Then, in VS
								Code, open that directory (it should be the `chapter0` at your home
								directory). If you did it correctly, you should see a view like
								this:
							</p>
							<img src={CreateSvelteImg} />
							<img src={SvelteKitProjectResultImg} />
							<p>
								Then, create a new terminal, run{" "}
								<InlineCode>pnpm install</InlineCode>. After the command is run, you
								should see a new directory `node_modules` created.
							</p>
							<img src={SvelteKitInstallImg} />
							<p>
								Open the <InlineCode>src/routes/+page.svelte</InlineCode>, change
								the content to the code provided above. If VS Code asks you to
								install a plugin, just do what VS Code asks you to do.
							</p>
							<img src={ChangePageSvelteImg} />
							<p>
								Then, run <InlineCode>pnpm dev</InlineCode> and open the link shown
								in the terminal.
							</p>
							<img src={SvelteKitDevImg} />
							<p>Great! You just created your first web page ever!</p>
						</>
					),
				},

				{
					content: () => (
						<>
							<h1>HTML Syntax</h1>
							<p>
								HTML consists of <b>elements</b>. Each element has one <b>tag</b> ,
								multiple <b>attributes</b> and some optional children.
								<br />
								For example,{" "}
								<InlineCode>{"<h1>This is a heading!</h1>"}</InlineCode> is just an
								element. The tag of this element is <InlineCode>h1</InlineCode>,
								while the child of the element is the text{" "}
								<InlineCode>This is a heading!</InlineCode>. This h1 element doesn't
								has any attributes on it.
								<br />
								Another example,{" "}
								<InlineCode>{`<a href="https://ohhwebdev.pages.dev/">OhhWebDev</a>`}</InlineCode>{" "}
								is an element with the tag <InlineCode>a</InlineCode>, an attribute{" "}
								<InlineCode>href</InlineCode> set as{" "}
								<InlineCode>"https://ohhwebdev.pages.dev/"</InlineCode> and a child
								which is the text <InlineCode>OhhWebDev</InlineCode>.
							</p>
							<p>
								To create an new element, start with the open angle bracket{" "}
								<InlineCode>{"<"}</InlineCode>, leading the tag of the element and
								the close angle bracket <InlineCode>{">"}</InlineCode>. Between the
								tag and the close bracket, the attributes are defined. Then after
								the close angle bracket, the children of the element begins. When
								the close tag appears, the children ends and the element is closed.
								The close tag is just <InlineCode>{"</tag-name>"}</InlineCode>. Note
								that HTML is not case-sensitive, which means that{" "}
								<InlineCode>tagName</InlineCode> is the same as{" "}
								<InlineCode>tagname</InlineCode>. Instead of using{" "}
								<InlineCode>camelCase</InlineCode> or
								<InlineCode>snake_case</InlineCode>, HTML uses{" "}
								<InlineCode>kebab-case</InlineCode>, that the words are separated
								with minus signs (<InlineCode>-</InlineCode>).
							</p>
							<p>
								<b>You hate text descriptions?</b> This explains everything:
							</p>
							<Code id="chapter0/src/element.svelte" />
							<h2>"What are some common tags?</h2>
							<p>
								{
									"<h1>, <h2>, <h3>, <h4>, <h5> and <h6> are used to present headings. The number in their name is just their heading level.\n"
								}
								<br />
								{"<p> for paragraphs"}
								<br />
								{
									"<a> for hyperlinks, use the href attribute to set the URL the link is to"
								}
								<br />
								{
									"<img> for images, use the src attribute to set the URL of the image"
								}
							</p>
							<Code id="chapter0/src/more-tags.svelte"></Code>
						</>
					),
				},
			],
		},
	],
} as Chatper
