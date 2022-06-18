<script lang="ts">
	import type { IHistory } from '$lib/utils/historyInterface';
	import { historiesPlaceholder } from '$lib/utils/placeholders';
	import History from '../History.svelte';

	let selectedHistory: IHistory;
	function nextHistory() {
		let index = historiesPlaceholder.findIndex((value) => value.id === selectedHistory.id);
		if (++index > historiesPlaceholder.length + 1) return;
		selectedHistory = historiesPlaceholder[index];
	}
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
				class="modal-box history-modal bg-cover bg-center p-0 relative"
				style="background-image: url('{selectedHistory.image}')"
			>
				<div
					class="absolute top-[50vh] bg-red-400 p-4 right-0 -translate-y-1/2"
					on:click={nextHistory}
				>
					>
				</div>
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
