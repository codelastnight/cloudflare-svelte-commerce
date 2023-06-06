import { getProducts } from '$lib/commerce';

export async function load() {
	//const { data: categories } = await client.categories.list();
	const { data: products } = await getProducts();

	return {
		//categories,
		products
	};
}
