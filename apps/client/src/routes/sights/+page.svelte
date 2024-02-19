<script>
	export let data
	const { catalogs } = data.body
	console.log('catalogs: ', catalogs)

	const colors = ['#1F1E1E', '#D0D0D0'] //['#F76919', '#F79E19', '#049786']

	let show = false
	let modalImageSrc
	function triggerModal(imageSrc) {
		modalImageSrc = imageSrc
		show = true
	}
</script>

<section class="w-screen last:pb-4">
	{#each catalogs as catalog, index}
		<div class="text-light flex">
			<!-- <div
				class="relative z-10 grid aspect-square h-96 w-96 place-content-center p-4 {index % 2 === 1
					? 'order-last'
					: ''}"
			>
				<h2 class="px-4 pt-4 text-center text-3xl">{catalog.title}</h2>
				<p class="max-w-xl px-4 text-center">{catalog.subtitle}</p>
			</div> -->
			<div
				class="scrollbar-none hide-scrollbar flex snap-x snap-mandatory overflow-scroll px-4 pt-4 {index %
					2 ===
				1
					? 'flex-row-reverse'
					: ''}"
			>
				{#each catalog.images as image}
					<button
						class="l-4 relative aspect-square h-96 w-96 snap-start rounded-lg pl-5"
						on:click={() => triggerModal(image.asset.url)}
					>
						<div
							class="absolute inset-0 z-10 opacity-0 transition-all duration-300 hover:opacity-100"
						>
							<p class="bg-dark text-light absolute right-4 top-4 z-10 p-1">
								{catalog.title}
							</p>
						</div>
						<img src={image.asset.url} class="h-full w-full rounded-lg grayscale-0" alt="" />
					</button>
				{/each}
			</div>
		</div>
	{/each}
</section>

{#if show}
	<button
		on:click|preventDefault={() => (show = false)}
		class="fixed inset-0 z-50 grid h-screen w-screen place-content-center bg-black/70"
	>
		<figure class="l-4 relative aspect-square h-[600px] w-[600px] snap-start rounded-lg">
			<img src={modalImageSrc} class="h-full w-full rounded-lg grayscale-0" alt="" />
		</figure>
	</button>
{/if}
