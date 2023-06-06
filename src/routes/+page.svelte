<script lang="ts">
	export let data;
</script>

<h1>ecommerce store example</h1>
<ul>
	{#each data.products as product}
		<li>
			<a rel="prefetch" href="/product/{product.permalink}">{product.name}</a>
		</li>
	{/each}
</ul>
