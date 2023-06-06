import { client } from '$lib/commerce';

export async function load(event) {
	const { permalink } = event.params;

	const product = await client.products.retrieve(permalink, {
		type: 'permalink'
	});

	return {
		product
	};
}
