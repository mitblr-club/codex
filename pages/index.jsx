import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import siteConfig from "@/site.config";

export default function Home() {
	return (
		<>
			<Head>
				<title>{siteConfig.title}</title>
				<meta name="description" content={siteConfig.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='relative h-72 w-full bg-cover bg-center bg-gray-900 p-20'>
				<Image
					className="relative overflow-hidden grayscale opacity-75 blur-sm"
					alt="CodeX Hero Section"
					src="https://i.imgur.com/rJzpouD.png"
					style={{ objectFit: "cover" }}
					fill
				/>
				<div className="relative flex flex-col justify-center">
					<h1 className="mb-3 text-5xl text-white font-bold font-mono">
						{siteConfig.title}
					</h1>
					<p className="text-lg text-white">
						The leading technical club of <b>Manipal Institute of Technology, Bengaluru Campus</b>.
					</p>
					<div className="mt-4">
						<Link href="/events">
							<button className="px-6 py-2 text-center text-white font-mono rounded-lg shadow-lg border-2 transition duration-150 hover:bg-gray-800 hover:opacity-80">
								Explore Events
							</button>
						</Link>
					</div>
				</div>
        	</div>
			<div className="w-full p-20 bg-gray-100 h-80">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-5xl font-bold font-mono">OUR VISION</h1>
					<p className="p-6 text-lg text-center">
					We strive to provide the best resources and tech education to the students at MAHE-BLR, irrespective of their experience or domain knowledge.
					<br />
					CodeX welcomes students from all disciplines, across the colleges at MAHE-BLR
					</p>
				</div>
        	</div>
			<div className="relative w-full p-20 h-80">
				<div className="flex flex-col justify-center">
					<h1 className="text-5xl font-bold font-mono">OUR TEAM</h1>
					<p className="py-3 text-lg">
						Our core committee members comprise the developers and artists
						<br />
						who are passionate about spreading knowledge and putting
						<br />
						their best in their projects. We can always count on them to achieving
						<br />
						the best possible result.
					</p>
				</div>
        	</div>
		</>
	);
};
