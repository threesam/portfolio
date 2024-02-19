<script>
	import Logo from '$lib/components/svgs/Logo.svelte'
	import { page } from '$app/stores'
	console.log('page: ', $page)

	const obj = {
		sights: '#F76919',
		sites: '#F79E19',
		sounds: '#049786'
	}

	$: primary = obj[$page.route.id?.substring(1)?.split('/')[0] ?? 'sites']
</script>

<header
	style="--primary: {primary}; background-color: var(--primary)"
	class="grid w-screen place-content-center transition-colors duration-300"
>
	<span class="w-full pb-4 pt-8 text-center text-xl font-thin">digital garden</span>
	<div class="h-40 w-full max-w-4xl px-10">
		<Logo />
	</div>
	<div class="flex w-full justify-center gap-8 pb-8 pt-4 text-2xl">
		<a
			href="/sounds"
			class={$page.route.id?.includes('/sounds') ? 'underline underline-offset-4' : ''}>sounds</a
		>
		<a href="/sights" class={$page.route.id?.includes('/sights') ? 'underline' : ''}>sights</a>
		<a href="/sites" class={$page.route.id?.includes('/sites') ? 'underline' : ''}>sites</a>
	</div>
</header>
