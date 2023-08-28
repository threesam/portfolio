<script>
	import Card from '$lib/components/Card.svelte'
	import Quote from '$lib/components/Quote.svelte'
	import SideBySide from '$lib/components/SideBySide.svelte'
	import TwoThirds from '$lib/components/TwoThirds.svelte'

	export let data

	const { projects } = data.body
	// console.log('projects: ', projects)
</script>

<TwoThirds />

<SideBySide />

<Quote />

<!-- LAILA -->
<section class="grid grid-cols-12 gap-4 p-4">
	{#each projects as project}
		<Card item={project} />
	{/each}
</section>
