<script lang="ts">
	import { Categories } from '$lib/utils/categories';

	export let category: string;
</script>

<div class="mx-auto container-width md:max-w-[300px] ">
	<div class="tabs tabs-boxed justify-between rounded-3xl">
		<p
			on:click={() => (category = Categories.EXPLORE)}
			class="tab tab-md category-tab {category === Categories.EXPLORE ? 'tab-active' : ''}"
		>
			Explore
		</p>
		<p
			on:click={() => (category = Categories.DISCOVER)}
			class="tab tab-md category-tab {category === Categories.DISCOVER ? 'tab-active' : ''}"
		>
			Discover
		</p>
	</div>
</div>

<style>
	.category-tab {
		color: white;
		width: 50%;
	}
	.tab-active {
		border-radius: 3rem;
		color: white;
	}
</style>
