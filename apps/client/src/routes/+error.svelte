<script>
	import { page } from '$app/stores'

	const emojis = {
		// TODO add the rest!
		420: '🫠',
		500: '💥'
	}
</script>

<section class="grid h-full w-full place-content-center py-16">
	<p class="text-light text-3xl">{$page.status} {$page.error?.message}</p>
	<span class="pt-5 text-center text-8xl">
		{emojis[$page.status] ?? emojis[500]}
	</span>
</section>
