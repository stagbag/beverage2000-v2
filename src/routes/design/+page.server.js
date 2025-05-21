import { client} from '$lib/sanity';

export async function load() {

	const query = `*[_type == "link"] {
		url,
		name,
		date,
		origin,
		"preview": preview.asset->url
	}`;

	try {
		const designs = await client.fetch(query);
		return {
			designs
		};

	}  catch(error) {
		console.error('Error fetching posts:', error);
		return {
			designs: []
		};
	}
}
