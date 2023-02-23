import { groupBlockContent } from "./groupBlockContent";

export const getListNumber = (blockId, blockMap) => {
	const groups = groupBlockContent(blockMap);
	const group = groups.find(g => g.includes(blockId));

	if (!group) {
	  return;
	}
  
	return group.indexOf(blockId) + 1;
};