<script lang="ts">
	import type { IUser } from '$lib/utils/userInterface';
	import { fly } from 'svelte/transition';

	export let profile: IUser | null;
	function closeModal() {
		profile = null;
	}
</script>

<div
	transition:fly={{ y: 1000 }}
	class="fixed h-[90vh] rounded-t-[2.5rem] w-screen bg-base-200  bottom-0 left-0"
>
	<div
		class="profile h-[40vh] md:h-[60vh] rounded-t-[2.5rem] bg-no-repeat bg-cover bg-center p-8 relative"
		style:background-image="url('https://api.lorem.space/image/shoes?w=800&h=550')"
	>
		<nav class="menu-top flex w-full justify-between">
			<div class="close icon-rounded" on:click={closeModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
			</div>
			<div class="share p-2 bg-base-300 rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					/>
				</svg>
			</div>
		</nav>
		<div class="user-info w-2/3 flex flex-col mx-auto p-4 items-center">
			<div
				class="avatar aspect-square w-1/2 max-w-[100px] p-2 border-primary border-2 bg-base-300 rounded-full grid place-items-center mr-3"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 "
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
			<p>{profile?.name}</p>
		</div>
		<div
			class="absolute w-full min-h-[10vh] bg-gradient-to-t from-base-200  via-base-200  bottom-0 left-0"
		/>
	</div>
</div>
