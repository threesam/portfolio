<script>
	export let item
</script>

<section class="grid grid-cols-12 gap-4 p-4 pb-0">
	<div
		class="relative col-span-8 row-span-1 grid aspect-[4/3] place-content-center overflow-hidden rounded-md border-2 border-black transition-colors duration-300"
	>
		<h2
			class="bg-primary relative z-20 rounded-md border-2 border-black p-16 text-center text-5xl text-black"
		>
			{item.title}
		</h2>

		<!-- <div class="absolute inset-0 z-10 bg-black/70" /> -->
		<img
			src={item.image?.asset.url}
			class="absolute inset-0 h-full w-full object-cover"
			alt={item.title}
		/>
	</div>

	<div
		class="bg-primary col-span-4 grid place-content-center rounded-md border-2 border-black p-3 px-16 transition-colors duration-300"
	>
		<p class="text-dark mb-3 text-3xl">Hot Off the Press</p>
		<div class="flex pb-2">
			{#if item.links?.length}
				{#each item.links as link}
					<a
						class=" border-dark bg-secondary text-dark rounded-lg border-2 px-5 py-2 font-semibold transition-all duration-200 hover:rotate-3 hover:scale-95"
						href={link.url}>visit</a
					>
				{/each}
			{/if}
			<a
				class="mx-5 py-2 font-bold underline underline-offset-8 transition-all duration-150 hover:underline-offset-4"
				href={'/post/' + item.handle.current}
			>
				case study
			</a>
		</div>
		<p class="max-w-2xl">
			{item.subtitle}
		</p>
	</div>
</section>
