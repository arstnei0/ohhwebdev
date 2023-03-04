import { createEffect, For, Show } from "solid-js"
import atom from "solid-use/atom"
import {
	chapter,
	chapterId,
	goToPhase,
	phase,
	phaseId,
	zen,
} from "~/lib/course"
import { createHover } from "~/lib/utils/hover"
import { chapters } from "./course/chapter"
import {
	chapterClass,
	chapterItem,
	chaptersClass,
	ohhwebdevTitle,
	progressText,
	progressTextLight,
	progressWrapper,
	theNameDoesNotMatterHelloHello,
} from "./Progress.css"

export default () => {
	const [hoveringChapter, hoveringChapterEvents] = createHover(600)
	const [hoveringPhase, hoveringPhaseEvents] = createHover(600)
	createEffect(() => hoveringChapter() && hoveringPhase(false))
	createEffect(() => hoveringPhase() && hoveringChapter(false))

	return (
		<div class={progressWrapper}>
			<h1 class={progressText}>
				<span class={ohhwebdevTitle}>ohhwebdev</span>
				<Show
					when={zen()}
					fallback={
						<>
							<div
								class={chapterClass}
								classList={{
									hovering: hoveringChapter(),
								}}
								{...hoveringChapterEvents}
							>
								<span class={progressTextLight}>.chapter(</span>
								{chapter().n}
								<span class={progressTextLight}>, "</span>
								{chapter().name}
								<span class={progressTextLight}>")</span>

								<Show when={hoveringChapter()}>
									<div class={chaptersClass}>
										<For each={chapters}>
											{(chapter, i) => (
												<div
													class={chapterItem}
													classList={{
														now:
															i() === chapterId(),
													}}
												>
													<p>
														{chapter.n}
														<span
															class={
																theNameDoesNotMatterHelloHello
															}
														>
															:{" "}
														</span>
														{chapter.name}
													</p>
												</div>
											)}
										</For>
									</div>
								</Show>
							</div>
							<div
								class={chapterClass}
								classList={{
									hovering: hoveringPhase(),
								}}
								{...hoveringPhaseEvents}
							>
								<span class={progressTextLight}>.phase(</span>
								{phase().n}
								<span class={progressTextLight}>, "</span>
								{phase().title}
								<span class={progressTextLight}>")</span>

								<Show when={hoveringPhase()}>
									<div class={chaptersClass}>
										<For each={chapter().phases}>
											{(phase, i) => (
												<div
													class={chapterItem}
													classList={{
														now: i() === phaseId(),
													}}
													onClick={() => {
														goToPhase(i())
														hoveringPhase(false)
													}}
												>
													<p>
														{phase.n}
														<span
															class={
																theNameDoesNotMatterHelloHello
															}
														>
															:{" "}
														</span>
														{phase.title}
													</p>
												</div>
											)}
										</For>
									</div>
								</Show>
							</div>
						</>
					}
				>
					<></>
				</Show>
			</h1>
		</div>
	)
}
