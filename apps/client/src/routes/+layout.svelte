<script>
	import '../app.css'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	export let data

	const { projects } = data.body
	console.log('projects: ', projects)
</script>

<Header />

<slot />

<Footer />
