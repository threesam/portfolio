<script>
	import Quote from '$lib/components/Quote.svelte'
	import SideBySide from '$lib/components/SideBySide.svelte'
	import TwoThirds from '$lib/components/TwoThirds.svelte'
</script>

<TwoThirds />

<SideBySide />

<Quote />

<!-- LAILA -->
<section class="grid grid-cols-12 gap-4 p-4">
	<div
		class="hover:border-secondary relative col-span-6 grid aspect-square place-content-center overflow-hidden rounded-md border-2 border-black transition-colors duration-300"
	>
		<div class="text-light absolute bottom-16 left-16 z-20">
			<h2 class="text-light text-3xl">Skeleton Flowers and Water</h2>
			<p class="w-3/5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime esse voluptatum nam
				totam doloribus, iure ullam quidem, sapiente, repudiandae odio placeat aspernatur amet id
				corrupti! Ipsam deserunt corrupti est.
			</p>
		</div>
		<div
			class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"
		/>
		<img
			src="https://cdn.sanity.io/images/4yxngtwt/production/df0b294263b9284c4c170bb80d500b594a220138-1024x1024.jpg"
			class="absolute inset-0 h-full w-full object-cover"
			alt="to the trees poster"
		/>
	</div>

	<div
		class="hover:border-secondary relative col-span-6 aspect-square overflow-hidden rounded-md border-2 border-black transition-colors duration-300"
	>
		<div class="text-light absolute bottom-16 left-16 z-20">
			<h2 class="text-light text-3xl">Laila Wolf</h2>
			<p class="w-3/5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime esse voluptatum nam
				totam doloribus, iure ullam quidem, sapiente, repudiandae odio placeat aspernatur amet id
				corrupti! Ipsam deserunt corrupti est.
			</p>
		</div>
		<div
			class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"
		/>
		<img
			src="https://cdn.sanity.io/images/4yxngtwt/production/8a41890a7c548331ca40f8492f2eb3f3be01c160-1024x1024.png"
			alt="hand drawn plants"
			class="absolute inset-0 h-full w-full object-cover"
		/>
	</div>

	<!-- <div
		class="bg-primary relative col-span-4 grid aspect-square place-content-center rounded-md border-black transition-colors duration-300 hover:border-secondary border-2 p-5"
	>
		<h2 class="mb-3 text-3xl"><span class="text-dark text-xl">client:</span>Laila</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime esse voluptatum nam
			totam doloribus, iure ullam quidem, sapiente, repudiandae odio placeat aspernatur amet id
			corrupti! Ipsam deserunt corrupti est.
		</p>
	</div> -->
</section>
