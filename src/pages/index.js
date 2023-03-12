import Meta from '@/components/Meta';
import GlitchTextOne from '@/components/effects/GlitchTextOne';
import Image from 'next/image';
import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';
import metaphor from '../../public/metaphor.webp';

export default function Home() {
	return (
		<>
			<Meta />
			<div className="flex align-middle justify-center">
				<div className="py-16 text-center">
					<div className="text-center">
						<div className="badge badge-info badge-outline dark:badge-error dark:badge-outline">
							Street Community Programmer (SCP)
						</div>
					</div>
					<h2 className="text-4xl font-light text-center my-2">
						The <GlitchTextOne text={'Gray Line'} /> of Internet
					</h2>
					<div className="text-center">
						<span className="text-3xl font-light">
							Story as Code. Public{' '}
							<strong className="important-text">
								Collections of Metaphor
							</strong>{' '}
							our Freestylers accross the world. <br />{' '}
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
							className="mx-auto"
						/>
					</div>
					<Link
						href="/stories"
						className="rounded-md p-3 shadow-md bg-zinc-900 text-white font-bold"
					>
						Read Our Metaphor Story <GoChevronRight className="inline" />
					</Link>
				</div>
			</div>
		</>
	);
}
