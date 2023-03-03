<script lang="ts">
	import { onMount } from "svelte"
	import { container } from "./Container.css"
</script>

<div class={container}>
	<slot />
</div>
