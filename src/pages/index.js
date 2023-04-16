import Meta from '@/components/Meta';
import GlitchTextOne from '@/components/effects/GlitchTextOne';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';
import { GoChevronRight, GoClock } from 'react-icons/go';
import { seoBanner } from '@/constants/ogimage-rest-generator';
import { getAllStories } from '@/services/markdownService';
import TimeAgo from '@/components/TimeAgo';
import StoryIcon from '@/components/StoryIcon';
import Image from 'next/image';

export async function getStaticProps({ params }) {
	const posts = getAllStories(`public/collections/stories`);
	return {
		props: {
			posts: posts.slice(0, 8)
		},
	};
}

export default function Home({ posts }) {
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
			<div className="flex flex-col gap-3 justify-center items-center py-8 px-8 sm:py-10 sm:px-10 relative -z-50">
				<div className="absolute top-5 left-10 w-72 h-72 bg-zinc-300 dark:bg-zinc-400 rounded-full dark:mix-blend-multiply filter blur-xl -z-50 opacity-20 sm:opacity-70 animate-blob"></div>
				<div className="absolute top-1/2 left-1/3 w-32 h-32 bg-zinc-300 dark:bg-zinc-400 rounded-full dark:mix-blend-multiply filter blur-xl -z-50 opacity-20 sm:opacity-70 animate-blob animation-delay-4000"></div>
				<div className="absolute top-1/2 right-1/3 w-32 h-32 bg-zinc-300 dark:bg-zinc-400 rounded-full dark:mix-blend-multiply filter blur-xl -z-50 opacity-20 sm:opacity-70 animate-blob animation-delay-6000"></div>
				<div className="absolute -bottom-10 right-14 w-52 h-52 bg-zinc-300 dark:bg-zinc-400 rounded-full dark:mix-blend-multiply filter blur-xl -z-50 opacity-20 sm:opacity-70 animate-blob animation-delay-4000"></div>
				<div className='text-center relative -z-40'>
					<div className="badge badge-info badge-outline dark:badge-error dark:badge-outline">
						Street Community Programmer (SCP)
					</div>
					<h2 className="text-3xl sm:text-4xl font-light my-2">
						The <GlitchTextOne text={'Gray Line'} /> of Internet
					</h2>
					<span className="text-lg sm:text-3xl font-light">
						Story as Code. Public{' '}
						<strong className="dark:mix-blend-multiply dark:important-text">
							Collections of Metaphor
						</strong>{' '}
						our Freestylers accross the world. <br className="hidden sm:block" />{' '}
						<strong className="dark:mix-blend-multiply dark:important-text">Gain knowledge</strong> with
						unusual perspective{' '}
						<strong className="dark:mix-blend-multiply dark:important-text">from our Punk members</strong>.
					</span>
				</div>
				<Link
					href="/stories"
					className="rounded-md p-3 shadow-md bg-gradient-to-r from-slate-700 via-slate-400 to-slate-500 hover:bg-gradient-to-r hover:from-slate-500 hover:via-slate-400 hover:to-slate-700 text-white font-bold relative"
				>
					Read Our Metaphor Story <GoChevronRight className="inline" />
				</Link>
			</div>
			<div className="flex flex-col items-center justify-center w-10/12 mx-auto">
				<div className='font-bold text-center sm:text-left text-white dark:text-base-content text-lg divider'>The Latest Metaphor Stories</div>
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-3">
					{posts.map((post, index) => (
						<Link href={`/stories/${post.frontmatter.language}/${post.slug}`} key={index}>
							<div className="card w-full bg-base-100 shadow-xl rounded-sm">
								<figure>
									<Image width="302" height="192" async src={seoBanner(post.frontmatter.title, post.frontmatter.author)} alt={post.frontmatter.title} crossOrigin='anonymous' />
								</figure>
								<div className="card-body p-3 relative bg-white dark:bg-zinc-900 border-t-none dark:border-t-1">
									<div className="bg-zinc-900 w-[25px] h-[25px] absolute right-1/4 mr-1 -top-10">
										<StoryIcon language={post.frontmatter.language} size={25} />
									</div>
									<div className='text-center text-xs dark:text-white text-zinc-900 font-mono'>
										<span>Created At <TimeAgo
											dateString={post.frontmatter.created_at}
											icon={<GoClock className="mr-1 inline" />}
											className="text-sm inline"
										/>
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
