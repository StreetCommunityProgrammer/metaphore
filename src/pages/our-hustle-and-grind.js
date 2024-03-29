import Meta from '@/components/Meta';
import Image from 'next/image';
import Link from 'next/link';
import { GoMarkGithub } from 'react-icons/go';
import metaphor from '../../public/metaphor.webp';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';

export default function OurHustleandGrind() {
	const router = useRouter();
	const currentUrl = router.asPath;
	return (
		<>
			<Meta />
			<NextSeo
				title={`Our Hustle and Grind | ${NEXT_APP_NAME}`}
				description="Welcome to the Street Community Programmer, where the code is funky fresh and the possibilities are endless."
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: NEXT_BASE_URL + currentUrl,
					siteName: NEXT_APP_NAME,
				}}
			/>
			<div className="min-h-[calc(100vh-100px)]">
				<div className="grid gap-3 grid-cols-1 md:grid-cols-4 px-4 md:px-16 py-16 bg-zinc-50 dark:bg-zinc-900">
					<div className="col-span-1 md:col-span-1">
						<Image
							src={metaphor}
							alt="Metaphor Banner"
							placeholder="blur"
							width={530}
							height={298}
							className="mx-auto w-full h-auto md:w-auto md:h-full object-cover"
						/>
					</div>
					<div className="col-span-1 md:col-span-3">
						<h1 className="text-5xl font-bold dark:text-white text-zinc-900 mb-3 sm:text-left text-center">
							What's up Punk!
						</h1>
						<p className="text-4xl font-light dark:text-white text-zinc-900 mb-3 sm:text-left text-center">
							Welcome to the Street Community Programmer, where the code is funky fresh and the possibilities are endless.
						</p>
						<div className="flex sm:justify-start justify-center gap-3">
							<a href="https://github.com/StreetCommunityProgrammer/metaphore" target="_blank" className="btn btn-sm rounded-md gap-2 dark:btn-ghost btn-active">
								<i className="fab fa-github dark:text-white"></i>
								<span className="capitalize dark:text-white">
									GitHub Repository
								</span>
							</a>
						</div>
					</div>
				</div>
				<div className="p-5 mx-auto md:w-7/12">
					<h2 className="text-4xl font-light divider mb-9">
						Our Hustle and Grind
					</h2>
					<p className="my-3 text-3xl font-light">
						First things first,{' '}
						<span className="text-mark-dope">forget everything</span> you think
						you know <span className="text-mark-dope">about programming</span> .
						We don&apos;t follow old rules around here. We&apos;re all about{' '}
						<span className="text-mark-dope">breaking boundaries</span>,
						challenging conventional theories, and{' '}
						<span className="text-mark-dope">
							creating code that&apos;s off the chain
						</span>
						.
					</p>

					<p className="my-3 text-3xl font-light">
						<span className="text-mark-dope">As a member</span> of our
						community, you&apos;re part of a crew{' '}
						<span className="text-mark-dope">of Punks</span>, Freestylers,{' '}
						<span className="text-mark-dope">
							and Software Freestyle Engineers
						</span>
						. We&apos;re a diverse bunch of rebels who use{' '}
						<span className="text-mark-dope">our crazy coding skills</span> to
						make the world a better place. And we&apos;re{' '}
						<span className="text-mark-dope">
							not just talking about creating killer apps
						</span>{' '}
						- we&apos;re talking about changing the game, baby!
					</p>

					<p className="my-3 text-3xl font-light">
						This is where you&apos;ll find all the info you need to get started
						with the{' '}
						<span className="text-mark-dope">Street Community Programmer</span>.
						From guidelines on how to contribute to our culture (hint:{' '}
						<span className="text-mark-dope">be bold and creative!</span> ), to
						resources for learning new skills, to updates on what the crew is up
						to - it&apos;s all here.
					</p>

					<p className="my-3 text-3xl font-light">
						And don&apos;t forget to connect with your fellow Punks on our
						community forums, where you can share your latest projects, get
						feedback, and{' '}
						<span className="text-mark-dope">collaborate on new ideas</span>.
						We&apos;re all about supporting each other, and there&apos;s no
						better way to do that than by connecting{' '}
						<span className="text-mark-dope">with like-minded coders</span>.
					</p>

					<p className="my-3 text-3xl font-light">
						So what are you waiting for?{' '}
						<span className="text-mark-dope">
							It&apos;s time to ditch the old rules
						</span>{' '}
						and join the{' '}
						<span className="text-mark-dope">Street Community Programmer</span>.
						Let&apos;s create something amazing together!
					</p>
				</div>
			</div>
		</>
	);
}
