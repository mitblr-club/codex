import { Block } from "./NotionBlock";
import { defaultMapImageUrl } from "@/lib/defaultMapImageUrl";
import { defaultMapPageUrl } from "@/lib/defaultMapPageUrl";

export const NotionRenderer = ({
	level = 0,
	currentId,
	mapPageUrl = defaultMapPageUrl,
	mapImageUrl = defaultMapImageUrl,
	...props
}) => {
	const { blockMap } = props;
	const id = currentId || Object.keys(blockMap)[0];
  	const currentBlock = blockMap[id];

  	if (!currentBlock) {
    	if (process.env.NODE_ENV !== "production") {
      		console.warn("error rendering block", currentId);
    	}
    	return null;
  	}

	return (
		<Block
			key={id}
			level={level}
			block={currentBlock}
			mapPageUrl={mapPageUrl}
			mapImageUrl={mapImageUrl}
			{...props}
		>
			{currentBlock?.value?.content?.map(contentId => (
				<NotionRenderer
					key={contentId}
					currentId={contentId}
					level={level + 1}
					mapPageUrl={mapPageUrl}
					mapImageUrl={mapImageUrl}
					{...props}
				/>
			))}
		</Block>
	);
}