<script>
	import '../app.css';

	export let data;

	const { settings } = data.body;
</script>

<pre>{JSON.stringify({ settings }, null, 2)}</pre>
<slot />
