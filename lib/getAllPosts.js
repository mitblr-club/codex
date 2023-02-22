export async function getAllPosts(id) {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${id}`
	).then((res) => res.json());
};