<script lang="ts">
	import type { IUser } from '$lib/utils/userInterface';
	import { fly } from 'svelte/transition';
	import CategorySwitcher from './CategorySwitcher.svelte';

	export let profile: IUser | null;
	export let id: number;
	export let closeModal: () => void;
</script>

<div
	id="profile-{id}"
	class="profile fixed h-[90vh] max-h-[90vh] rounded-t-[2.5rem] w-screen bg-base-100  bottom-0 left-0 overflow-y-scroll"
	transition:fly={{ y: 1000 }}
>
	<div
		class="h-[40vh] md:h-[60vh] rounded-t-[2.5rem] bg-no-repeat bg-cover bg-center p-8 relative"
		style:background-image="url('https://api.lorem.space/image/shoes?w=800&h=550')"
	>
		<nav class="menu-top flex w-full justify-between">
			<a href="#" class="close icon-rounded" on:click={closeModal}>
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
			</a>
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
			<div class="text-center mx-auto my-4 z-10">
				<h1>{profile?.name}</h1>
				<div class="bio my-3 px-2  text-xs">
					<p>Lorem ipsum dolor sit, amet consectetur</p>
				</div>
			</div>
		</div>
		<div
			class="absolute w-full min-h-[15vh] bg-gradient-to-t from-base-100  via-base-100  bottom-0 left-0"
		/>
	</div>
	<div class="content">
		<div class="numbers max-w-md   flex justify-between mx-auto w-10/12 p-4 rounded-lg bg-base-200">
			<div class="numbers-data w-1/3 text-center">
				<span>100</span>
				<p class="text-xs from-neutral-focus opacity-70">Posts</p>
			</div>
			<div class="numbers-data w-1/3 text-center">
				<span>1,50K</span>
				<p class="text-xs from-neutral-focus opacity-70">Followers</p>
			</div>
			<div class="numbers-data w-1/3 text-center">
				<span>500</span>
				<p class="text-xs from-neutral-focus opacity-70">Following</p>
			</div>
		</div>

		<div class="my-8 mx-auto w-10/12">
			<CategorySwitcher category="xd" />
		</div>
		<div
			class="grid-container grid max-h-[50vh] max-w-5xl mx-auto gap-3 md:gap-8 justify-center p-1"
		>
			{#each Array.from(Array(7).keys()) as i}
				<div class="w-full ">
					<img
						src="https://api.lorem.space/image/shoes?w=250&h=400"
						alt=""
						class="w-full rounded-md"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.profile {
		display: none;
	}
	.profile:target {
		display: block;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 170px);
		grid-auto-rows: minmax(20px, auto);
		justify-content: center;
	}
	@media screen and (min-width: 768px) {
		.grid-container {
			grid-template-columns: repeat(auto-fill, 270px);
		}
	}
</style>
