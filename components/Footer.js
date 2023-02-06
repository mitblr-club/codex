import Link from './Link'
import siteConfig from '@/site.config.js'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
	return (
		<footer>
			<div className="mt-16 flex flex-col items-center">
				<div className="mb-3 flex space-x-4">
					<SocialIcon kind="github" href={siteConfig.github} size="6" />
					<SocialIcon kind="twitter" href={siteConfig.twitter} size="6" />
				</div>
				<div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
					<Link href="/">{siteConfig.title}</Link>
					<div>{` • `}</div>
					<div>{`© ${new Date().getFullYear()}`}</div>
				</div>
			</div>
		</footer>
	)
}