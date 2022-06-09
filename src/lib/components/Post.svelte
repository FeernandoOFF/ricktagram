<script lang="ts">
	import type { IPost } from '$lib/utils/postInterface';

	import Comment from './Comment.svelte';
	export let post: IPost;
	let seeMore = false;
</script>

<div class="card w-full md:max-w-[800px] mx-auto bg-base-200 shadow-xl py-4 px-2 text-sm my-8 ">
	<div class="post-head flex justify-between  items-center mb-3">
		<div class="post-friend flex items-center">
			<div class="avatar w-8 h-8 bg-base-300 rounded-full grid place-items-center mr-3">
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
			<div class="flex flex-col">
				<p>{post.user.name}</p>
				<span>{post.time} mins ago </span>
			</div>
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
	</div>
	<figure class="">
		<img
			src="https://api.lorem.space/image/shoes?w=400&h=225"
			alt="Shoes"
			class="rounded-t-xl w-full"
		/>
	</figure>
	<div class=" items-center ml-1 my-2">
		<div class="interaction flex w-1/3 justify-between ">
			<div class="icon-interaction">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</div>
			<div class="icon-interaction">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			</div>
			<div class="icon-interaction rotate-45">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
					/>
				</svg>
			</div>
		</div>
		<div class="comments mt-4 flex w-1/2 text-xs font-light text-neutral-focus justify-between">
			<p><span class="font-bold">{post.likes} </span> Likes</p>
			<b>-</b>
			<p><span class="font-bold">{post.comments.length} </span> Comments</p>
		</div>
		<div class="comments mt-4 font-light text-neutral-focus text-xs">
			{#each post.comments as comment, i}
				{#if i >= 1 && !seeMore}
					<p on:click={() => (seeMore = true)}>see more</p>
				{:else}
					<Comment {...comment} />
					{#if i === post.comments.length - 1}
						<p on:click={() => (seeMore = false)}>see less</p>
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</div>
