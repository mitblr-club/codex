// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/components/Link.js
import Link from "next/link"

const CustomLink = ({ href, ...rest }) => {
	const isInternalLink = href && href.startsWith('/')
	const isAnchorLink = href && href.startsWith('#')
  
	if (isInternalLink) {
		return (
			<Link legacyBehavior={true} href={href}>
				<a {...rest} />
			</Link>
		)
	}
  
	if (isAnchorLink) {
		return <a href={href} {...rest} />
	}
  
	return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink