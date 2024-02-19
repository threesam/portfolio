<script>
	import { page } from '$app/stores'

	const obj = {
		sights: '#F76919',
		sites: '#F79E19',
		sounds: '#049786'
	}

	$: primary = obj[$page.route.id.substring(1) ?? 'sites']
</script>

<footer style="background-color: {primary}" class=" text-dark py-32 transition-colors duration-300">
	<div class="mx-auto grid max-w-7xl grid-cols-6">
		<div class="col-span-1">
			<h3 class="font-bold">work</h3>
			<ul class="flex flex-col gap-5">
				<li>skeleton flowers</li>
				<li>art killing apathy</li>
				<li>industry of good</li>
				<li>to the trees</li>
			</ul>
		</div>
		<div class="col-span-1">
			<h3 class="font-bold">company</h3>
			<ul class="flex flex-col gap-5">
				<li>about</li>
				<li>process</li>
				<li>blog</li>
			</ul>
		</div>
		<div class="col-span-1">
			<h3 class="font-bold">connect</h3>
			<ul class="flex flex-col gap-5">
				<li>instagram</li>
				<li>facebook</li>
				<li>tiktok</li>
			</ul>
		</div>
		<div class="col-span-2 col-start-5">
			<h3>sign up for newsletter</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<input type="text" placeholder="email address" />
			<button>-></button>
		</div>
	</div>
</footer>
