import { createEffect, onMount } from "solid-js"
import { For, Portal, Show } from "solid-js/web"
import atom from "solid-use/atom"
import { createEventListener } from "@solid-primitives/event-listener"
import { commands as theCommands } from "~/lib/commands"
import {
	commandClass,
	commandClassIcon,
	commandEntering,
	commandIcon,
	commandPalette,
	commandPaletteInput,
	commandPaletteWrapper,
	shiningRect1,
	shiningRect2,
} from "./CommandPalette.css"
import { toast } from "~/lib/toast"
import { createHover } from "~/lib/utils/hover"

export default (props: { show: boolean; onHide: () => void }) => {
	let inputEl = null as unknown as HTMLInputElement
	let commandPaletteEl = null as unknown as HTMLDivElement
	const currentFocus = atom(0)
	const searchingCommand = atom("")
	const [hovering, hoveringEvents] = createHover()
	const commands = atom(theCommands)
	const onHide = () => {
		props.onHide()
		currentFocus(0)
		hovering(false)
	}
	createEffect(() => {
		commands(
			searchingCommand() !== ""
				? theCommands.filter(command =>
						new RegExp(`${searchingCommand()}`, "gi").test(command.name)
				  )
				: theCommands
		)
	})
	onMount(() => {
		createEventListener(window, "keyup", e => {
			if (props.show) {
				if (e.key === "Enter") {
					commands()[currentFocus()].action()
					onHide()
				} else if (e.key === "ArrowDown") {
					currentFocus(($ => (commands()[$] ? $ : 0))(currentFocus() + 1))
				} else if (e.key === "ArrowUp") {
					currentFocus(
						($ => (commands()[$] ? $ : commands().length - 1))(currentFocus() - 1)
					)
				} else if (e.key === "Escape") {
					onHide()
				}
			}
		})
	})

	return (
		<>
			<Portal mount={document.body}>
				<Show when={props.show}>
					<div
						class={commandPaletteWrapper}
						onClick={() => commandPaletteEl.matches(":hover") || onHide()}
					>
						<div class={shiningRect1}></div>
						<div class={shiningRect2}></div>
						<div class={commandPalette} ref={commandPaletteEl}>
							<div style="display: flex; align-items: center; justify-content: center;">
								<div
									class={commandIcon}
									onClick={() => onHide()}
									{...hoveringEvents}
								>
									<Show
										when={hovering()}
										fallback={
											/* prettier-ignore */
											<svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5S4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3zM16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8H16zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5V8H6.5zm3.5 6v-4h4v4h-4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5z"></path></svg>
										}
									>
										{/* prettier-ignore */}
										<svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>
									</Show>
								</div>
								<input
									class={commandPaletteInput}
									value={searchingCommand()}
									placeholder="Search command"
									autofocus
									onInput={e => {
										searchingCommand((e.target as any).value)
									}}
									ref={inputEl}
								></input>
							</div>
							<div style="margin-top: 15px;">
								<For each={commands()}>
									{(command, i) => (
										<>
											<div
												class={commandClass}
												classList={{
													[commandEntering]: i() === currentFocus(),
												}}
												onClick={() => {
													command.action()
													onHide()
												}}
											>
												{command.name}
												<div class={commandClassIcon}>
													<Show when={command.icon}>
														{/* @ts-ignore */}
														<command.icon></command.icon>
													</Show>
													<Show when={i() === currentFocus()}>
														{/* prettier-ignore */}
														<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.625-4.625q.275-.275.688-.262T9.7 6.7q.275.275.275.7t-.275.7L6.8 11H19V8q0-.425.288-.713T20 7q.425 0 .713.288T21 8v4q0 .425-.288.713T20 13H6.8l2.925 2.925q.275.275.263.688T9.7 17.3q-.275.275-.7.275t-.7-.275Z"></path></svg>
													</Show>
												</div>
											</div>
										</>
									)}
								</For>
							</div>
						</div>
					</div>
				</Show>
			</Portal>
		</>
	)
}
