import { client } from '$lib/commerce';

export async function load({ params }) {
	const { permalink } = params;

	const product = await client.products.retrieve(permalink, {
		type: 'permalink'
	});

	return {
		product
	};
}
