<script>
	import Card from '$lib/components/Card.svelte'
	import Quote from '$lib/components/Quote.svelte'
	import SideBySide from '$lib/components/SideBySide.svelte'
	import TwoThirds from '$lib/components/TwoThirds.svelte'

	export let data

	const { projects } = data.body
</script>

<TwoThirds item={projects.find((project) => project.tags?.includes('featured'))} />

<!-- <SideBySide /> -->

<section class="grid grid-cols-3 gap-4 p-4 pb-0">
	<h2
		class="text-dark bg-secondary col-span-1 grid h-full place-content-center rounded-md border-2 border-black font-sans text-4xl"
	>
		Testimonial
	</h2>
	<div class="col-span-2">
		<Quote />
	</div>
</section>

<!-- LAILA -->
<section
	class="grid grid-cols-12 gap-4 p-4 [&>*:nth-child(1)]:col-span-6 [&>*:nth-child(1)]:aspect-video [&>*:nth-child(2)]:col-span-6 [&>*:nth-child(2)]:aspect-video"
>
	{#each projects as project}
		{#if !!project.image && !project.tags?.includes('featured')}
			<Card item={project} />
		{/if}
	{/each}
</section>
