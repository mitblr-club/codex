import Image from "next/image";

import { classNames } from "@/lib/classNames";

const isIconBlock = (value) => {
	return value.type === "page" || value.type === "callout";
};

const PageIcon = ({
  block,
  className,
  big,
  mapImageUrl,
}) => {
	if (!isIconBlock(block.value)) {
		return null;
	}
	const icon = block.value.format?.page_icon;
	const title = block.value.properties?.title;

	if (icon?.includes("http")) {
		const url = mapImageUrl(icon, block);

		return (
			<Image
				className={classNames(
				className,
				big ? "notion-page-icon-cover" : "notion-page-icon"
				)}
				src={url}
				alt={title ? getTextContent(title) : "Icon"}
			/>
		);
	} else {
		return (
			<span
				className={classNames(
				className,
				"notion-emoji",
				big ? "notion-page-icon-cover" : "notion-page-icon"
				)}
				role="img"
				aria-label={icon}
			>
				{icon}
			</span>
		);
	}
};

export default PageIcon;