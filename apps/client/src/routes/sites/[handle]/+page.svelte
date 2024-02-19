<script>
	import PortableText from '$lib/components/PortableText.svelte'

	export let data
	console.log('data: ', data)
	const { project } = data.body
</script>

<section class="grid w-full grid-cols-2 gap-4 p-4">
	<div class="text-dark bg-primary grid aspect-video place-content-center rounded-md px-16">
		<h1 class="text-3xl">{project.title}</h1>
		<p>{project.description}</p>
	</div>
	<figure class="aspect-video w-full overflow-hidden rounded-md">
		<img class="h-full w-full object-cover" src={project.image.asset.url} alt="" />
	</figure>
</section>

<PortableText blocks={project.caseStudy} />

<pre class="text-light">{JSON.stringify(data, null, 2)}</pre>
