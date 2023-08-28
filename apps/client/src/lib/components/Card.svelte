<script>
	export let item
</script>

<div
	class=" relative col-span-4 grid aspect-square place-content-center overflow-hidden rounded-md border-2 border-black transition-colors duration-300"
>
	<div class="text-light absolute bottom-16 left-16 z-20">
		<h2 class="text-light text-3xl">{item.title}</h2>
		<p class="w-3/5">
			{item.description}
		</p>
	</div>
	<div
		class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"
	/>
	<img
		src={item.mainImage.asset.url}
		class="absolute inset-0 h-full w-full object-cover"
		alt={item.mainImage.alt}
	/>
</div>
