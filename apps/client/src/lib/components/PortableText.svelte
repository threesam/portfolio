<script lang="ts">
	export let blocks: any[] = []
	import { PortableText } from '@portabletext/svelte'
</script>

<section class="portable-text mx-auto mb-32 max-w-4xl">
	<PortableText value={blocks} />
</section>

<style lang="scss">
	:global {
		.portable-text {
			h1,
			h2,
			h3,
			h4,
			h5 {
				@apply text-light pb-2 pt-6 text-2xl;
			}
			ul,
			p {
				@apply text-light pb-5;
			}

			a {
				@apply border-primary border-b-2 transition-all duration-100;

				&:hover {
					@apply text-primary border-transparent pb-1;
				}
			}

			blockquote {
				@apply bg-tertiary text-dark mb-5 mt-8 rounded-md p-5 text-xl;
			}
		}
	}
</style>
