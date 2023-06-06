import { client } from '$lib/commerce';

export async function load({ params }) {
	//const { data: categories } = await client.categories.list();
	const { data: products } = await client.products.list();

	return {
		//categories,
		products
	};
}
