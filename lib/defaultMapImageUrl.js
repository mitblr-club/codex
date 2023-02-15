export const defaultMapImageUrl = (image = "", block) => {
	const url = new URL(
		`https://www.notion.so${
			image.startsWith("/image") ? image : `/image/${encodeURIComponent(image)}`
		}`
	);
  
	if (block && !image.includes("/images/page-cover/")) {
		const table =
			block.value.parent_table === "space" ? "block" : block.value.parent_table;
		url.searchParams.set("table", table);
		url.searchParams.set("id", block.value.id);
		url.searchParams.set("cache", "v2");
	}
  
	return url.toString();
};
  