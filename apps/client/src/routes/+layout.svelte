<script>
	import '../app.css'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
