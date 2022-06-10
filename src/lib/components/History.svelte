<script lang="ts">
	import type { IHistory } from '$lib/utils/historyInterface';

	export let selectedHistory;
	export let history: IHistory;
</script>

<div
	class="carrousel-item history-card rounded-2xl flex flex-col-reverse  bg-cover bg-no-repeat bg-center "
	style={`background-image:url(${history.image})`}
	on:click={() => (selectedHistory = history.id)}
>
	<div class="bottom w-full bg-base-200 h-16  p-2 pt-7 rounded-lg relative">
		<p
			class="history-avatar w-9 h-9 bg-cover bg-center border-2 border-primary"
			style={`background-image:url('${history.avatar}')`}
		/>
		<p class="text-xs">{history.name}</p>
	</div>
</div>

<style>
	.history-card {
		cursor: pointer;
		height: min(400px, 190px);
		width: max(15vw, 200px);
		min-width: 140px;
	}
	.history-avatar {
		background: blue;
		display: grid;
		place-content: center;

		position: absolute;
		left: 50%;
		right: 50%;
		top: -0.8rem;

		padding: 0.5rem;
		border-radius: 100%;
		transform: translateX(-50%);
	}
</style>
