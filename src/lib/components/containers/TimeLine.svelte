<script lang="ts">
	import type { IHistory } from '$lib/utils/historyInterface';
	import { historiesPlaceholder } from '$lib/utils/placeholders';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import History from '../History.svelte';

	let selectedHistory: IHistory;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
			};
		}
	});
</script>

<div class="p-2">
	<p>Stories</p>
	<div class="carousel carousel-center p-4 space-x-4 rounded-box">
		{#each historiesPlaceholder as history}
			<History {history} bind:selectedHistory />
		{/each}
	</div>
	<!-- Put this part before </body> tag -->
	{#if selectedHistory}
		<div class="modal" id="my-modal-2">
			<div
				class="modal-box history-modal bg-cover bg-center p-0"
				style="background-image: url('{selectedHistory.image}')"
			>
				<div
					class="flex justify-between  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 p-4 w-full"
				>
					<p>{selectedHistory.name}</p>
					<a href="#">X</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.history-modal {
		aspect-ratio: 1/2;
	}
</style>
