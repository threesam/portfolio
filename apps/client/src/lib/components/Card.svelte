<script>
	export let item
</script>

<div
	class="relative col-span-4 grid aspect-square place-content-center overflow-hidden rounded-md border-2 border-black transition-colors duration-300 first:col-span-4"
>
	<div class="text-light absolute bottom-4 left-4 z-20">
		<div class="mb-2 flex gap-4">
			{#each item.tags as tag}
				<span class="">{tag}</span>
			{/each}
		</div>
		<h2 class="text-light text-3xl">{item.title}</h2>
		<div class="flex items-center pb-2">
			{#if item.links?.length}
				{#each item.links as link}
					<a
						class="bg-tertiary text-dark rounded-lg border-2 border-black px-5 py-2 font-semibold transition-all duration-200 hover:rotate-3 hover:scale-95"
						href={link.url}>visit</a
					>
				{/each}
			{/if}
			<a
				class="border-tertiary hover:text-tertiary mx-5 border-b-2 py-1 font-bold transition-colors duration-150 hover:border-transparent"
				href={'/post/' + item.handle.current}
			>
				case study
			</a>
		</div>
		<p class="max-w-2xl">
			{item.subtitle}
		</p>
	</div>
	<div
		class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"
	/>
	<img
		src={item.mainImage?.asset.url ?? item.image?.asset.url}
		class="absolute inset-0 h-full w-full object-cover"
		alt={item.mainImage?.alt}
	/>
</div>
