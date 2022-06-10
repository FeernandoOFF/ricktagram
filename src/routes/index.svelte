<script lang="ts">
	import { AnimateSharedLayout, AnimatePresence, Motion } from 'svelte-motion';

	import type { IUser } from '$lib/utils/userInterface';

	import TimeLine from './../lib/components/containers/TimeLine.svelte';
	import Main from '$lib/components/containers/Main.svelte';
	import History from '$lib/components/History.svelte';
	import Post from '$lib/components/Post.svelte';
	import CategorySwitcher from '$lib/components/CategorySwitcher.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import { Categories } from '$lib/utils/categories';
	import { historiesPlaceholder, postsPlaceholder } from '$lib/utils/placeholders';

	let category = Categories.EXPLORE;
	let profile: IUser | null;
	let selectedHistory = '';
</script>

<div class="container-width">
	<TimeLine>
		<AnimateSharedLayout type="crossfade">
			<Motion let:motion={grid} layout>
				{#each historiesPlaceholder as history}
					<History {history} bind:selectedHistory />
				{/each}
			</Motion>
			<AnimatePresence
				history={historiesPlaceholder.find((his) => his.id === selectedHistory)}
				let:history
			>
				<div class="modal" id="my-modal-2">
					<div class="modal-box">
						<h3 class="font-bold text-lg">{history.name}</h3>
						<p class="py-4">
							You've been selected for a chance to get one year of subscription to use Wikipedia for
							free!
						</p>
						<div class="modal-action">
							<a href="#" class="btn">Yay!</a>
						</div>
					</div>
				</div>
			</AnimatePresence>
		</AnimateSharedLayout>
	</TimeLine>
	<Main>
		<CategorySwitcher bind:category />

		<div>
			{#if category === 'explore'}
				<div class="my-6">
					{#each postsPlaceholder as post}
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
	<Profile closeModal={() => (profile = null)} bind:profile />
{/if}
