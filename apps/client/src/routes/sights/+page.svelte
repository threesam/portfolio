<script>
	export let data
	const { catalogs } = data.body
	console.log('catalogs: ', catalogs)
</script>

<section class="text-dark bg-secondary">
	{#each catalogs as catalog}
		<div class="flex">
			<div class="text-dark grid aspect-square h-96 w-96 place-content-center">
				<h2 class="text-dark px-4 pt-4 text-3xl">{catalog.title}</h2>
				<p class="mb-3 max-w-xl px-4">{catalog.subtitle}</p>
			</div>
			<div class="bg-dark scrollbar-none flex snap-x snap-mandatory overflow-scroll p-4">
				{#each catalog.images as image}
					<figure class="aspect-square h-96 w-96 snap-start rounded-lg object-cover pl-4">
						<img src={image.asset.url} class="h-full w-full rounded-lg grayscale-0" alt="" />
					</figure>
				{/each}
			</div>
		</div>
	{/each}
</section>
