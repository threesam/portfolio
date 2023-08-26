<script>
	import Logo from '$lib/components/svgs/Logo.svelte'

	const obj = {
		sights: '#F76919',
		sites: '#F79E19',
		sounds: '#049786'
	}

	$: primary = obj.sounds
</script>

<header
	style="--primary: {primary}; background-color: var(--primary)"
	class="bg-secondary grid w-screen place-content-center transition-colors duration-300"
>
	<span class="w-full pb-4 pt-8 text-center text-xl font-thin">creative studio</span>
	<div class="h-64 w-full px-10">
		<Logo />
	</div>
	<div class="flex w-full justify-center gap-8 pb-8 pt-4 text-2xl">
		<button
			class={primary === obj.sounds ? 'underline underline-offset-4' : ''}
			on:click={() => (primary = obj.sounds)}>sounds</button
		>
		<button
			class={primary === obj.sights ? 'underline' : ''}
			on:click={() => (primary = obj.sights)}>sights</button
		>
		<button class={primary === obj.sites ? 'underline' : ''} on:click={() => (primary = obj.sites)}
			>sites</button
		>
	</div>
</header>
