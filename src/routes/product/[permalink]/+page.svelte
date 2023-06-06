<script>
	export let data;
</script>

<img src={data.product.image?.url} alt={data.product.name} />
<h1>{data.product.name}</h1>

<p>{data.product.price.formatted_with_symbol}</p>
