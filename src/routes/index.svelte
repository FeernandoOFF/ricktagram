<script lang="ts">
	import TimeLine from './../lib/components/containers/TimeLine.svelte';
	import Main from '$lib/components/containers/Main.svelte';
	import History from '$lib/components/History.svelte';
	import Post from '$lib/components/Post.svelte';
	import CategorySwitcher from '$lib/components/CategorySwitcher.svelte';
	import Profile from '$lib/components/Profile.svelte';

	import { Categories } from '$lib/utils/categories';
	import { posts } from '$lib/utils/placeholders';
	import type { IUser } from '$lib/utils/userInterface';

	let category = Categories.EXPLORE;
	let profile: IUser | null;
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
						<Post bind:profile {post} />
					{/each}
				</div>
			{:else}
				<p>Discover</p>
			{/if}
		</div>
	</Main>
</div>

{#if !!profile}
	<Profile bind:profile />
{/if}
