import Meta from '@/components/Meta';
import GlitchTextOne from '@/components/effects/GlitchTextOne';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';
import { GoChevronRight } from 'react-icons/go';
import metaphor from '../../public/metaphor.webp';

export default function Home() {
	return (
		<>
			<Meta />
			<NextSeo
				title={NEXT_APP_NAME}
				description={`Story as Code. Public Collections of Metaphor our Freestylers accross the world. Gain knowledge with unusual perspective from our Punk members.`}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: NEXT_BASE_URL,
					siteName: NEXT_APP_NAME,
				}}
			/>
			<div className="flex flex-col sm:flex-row justify-center items-center">
				<div className="py-8 sm:py-16 text-center">
					<div className="text-center">
						<div className="badge badge-info badge-outline dark:badge-error dark:badge-outline">
							Street Community Programmer (SCP)
						</div>
					</div>
					<h2 className="text-3xl sm:text-4xl font-light text-center my-2">
						The <GlitchTextOne text={'Gray Line'} /> of Internet
					</h2>
					<div className="text-center">
						<span className="text-lg sm:text-3xl font-light">
							Story as Code. Public{' '}
							<strong className="important-text">
								Collections of Metaphor
							</strong>{' '}
							our Freestylers accross the world. <br className="hidden sm:block" />{' '}
							<strong className="important-text">Gain knowledge</strong> with
							unusual perspective{' '}
							<strong className="important-text">from our Punk members</strong>.
						</span>
						<Image
							src={metaphor}
							alt="Metaphor Banner"
							placeholder="blur"
							width={530}
							height={298}
							className="mx-auto mt-4 sm:mt-8"
						/>
					</div>
					<Link
						href="/stories"
						className="mt-4 sm:mt-8 rounded-md p-3 shadow-md bg-zinc-900 text-white font-bold"
					>
						Read Our Metaphor Story <GoChevronRight className="inline" />
					</Link>
				</div>
			</div>

		</>
	);
}
