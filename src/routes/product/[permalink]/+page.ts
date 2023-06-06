import { getProduct } from '$lib/commerce';

export async function load({ params }) {
	const { permalink } = params;

	const product = await getProduct(permalink, {
		type: 'permalink'
	});

	return {
		product
	};
}
