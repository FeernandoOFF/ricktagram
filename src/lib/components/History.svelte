<script lang="ts">
	import type { IHistory } from '$lib/utils/historyInterface';

	export let history: IHistory;
</script>

<div
	class="carrousel-item history-card rounded-2xl flex flex-col-reverse  bg-cover bg-no-repeat bg-center "
	style={`background-image:url(${history.image})`}
>
	<div class="bottom w-full bg-base-200 h-12 p-3 pt-5 rounded-lg relative">
		<div class="history-avatar w-8 h-8  ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 "
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
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
