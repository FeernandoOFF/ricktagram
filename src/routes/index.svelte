<script lang="ts">
	import TimeLine from './../lib/components/containers/TimeLine.svelte';
	import Main from '$lib/components/containers/Main.svelte';
	import History from '$lib/components/History.svelte';
	import CategorySwitcher from '$lib/components/CategorySwitcher.svelte';

	import { Categories } from '$lib/utils/categories';
	import Post from '$lib/components/Post.svelte';
	import type { IPost } from '$lib/utils/postInterface';

	const posts: IPost[] = [
		{
			user: {
				name: 'Fernando Obregon',
				id: 13
			},
			likes: 20,
			time: 20,
			comments: [
				{
					user: 'User 2',
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
				},
				{
					user: 'User 2',
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
				}
			]
		},
		{
			user: {
				name: 'Fernando Obregon',
				id: 13
			},
			likes: 20,
			time: 20,
			comments: [
				{
					user: 'User 2',
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
				}
			]
		}
	];
	let category = Categories.EXPLORE;
</script>

<div class="container-width">
	<TimeLine>
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
		<History />
	</TimeLine>
	<Main>
		<CategorySwitcher bind:category />

		<div>
			{#if category === 'explore'}
				<div class="my-6">
					{#each posts as post}
						<Post {post} />
					{/each}
				</div>
			{:else}
				<p>Discover</p>
			{/if}
		</div>
	</Main>
</div>
