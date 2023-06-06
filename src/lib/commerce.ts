// cant use the commerce js sdk bc cloudflare workers cant use axios
type Params = { [key: string]: string };

const token = 'pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec';
const productURL = 'https://api.chec.io/v1/products';

async function fetchData(api: string, params: Params) {
	const headers = {
		'X-Authorization': token,
		Accept: 'application/json',
		'Content-Type': 'application/json'
	};
	const url = new URL(api);
	Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
	const response = await fetch(url, {
		method: 'GET',
		headers: headers
	});
	return response.json();
}

export async function getProducts() {
	const params: Params = {
		limit: '25'
	};
	return await fetchData(productURL, params);
}

export async function getProduct(
	permalink: string,
	params = {
		type: 'permalink'
	}
) {
	const url = `${productURL}/${permalink}`;
	return await fetchData(url, params);
}
