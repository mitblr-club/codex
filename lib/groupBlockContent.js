export const groupBlockContent = (blockMap) => {
	const output = [];
  
	let lastType = undefined;
	let index = -1;
  
	Object.keys(blockMap).forEach(id => {
	  blockMap[id].value.content?.forEach(blockId => {
		const blockType = blockMap[blockId]?.value?.type;
  
		if (blockType && blockType !== lastType) {
		  index++;
		  lastType = blockType;
		  output[index] = [];
		}
  
		output[index].push(blockId);
	  });
  
	  lastType = undefined;
	});
	
	return output;
};