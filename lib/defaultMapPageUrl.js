export const defaultMapPageUrl = (pageId = "") => {
	pageId = pageId.replace(/-/g, "");
  
	return `/${pageId}`;
};