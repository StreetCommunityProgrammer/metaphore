import Meta from '@/components/Meta';
import Image from 'next/image';
import Link from 'next/link';
import metaphorSquare from '../../public/images/metaphor-square.webp';
import { NextSeo } from 'next-seo';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';
import { useRouter } from 'next/router';

function TheCultureAndVibe() {
	const router = useRouter();
	const currentUrl = router.asPath;
	return (
		<>
			<Meta />
			<NextSeo
				title={`The Culture And Vibe | ${NEXT_APP_NAME}`}
				description="We're stoked that you want to join our team of Punks, Freestylers, and Software Freestyle Engineers. Let's rock this joint with some awesome contributions!"
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: NEXT_BASE_URL + currentUrl,
					siteName: NEXT_APP_NAME,
				}}
			/>
			<div className="min-h-[calc(100vh-100px)]">
				<header className="px-16 py-16 bg-zinc-50 dark:bg-zinc-900 flex justify-center relative">
					<h1 className="text-4xl text-center font-bold text-zinc-900 dark:text-zinc-50">
						The Culture And Vibe
					</h1>
					<Image
						src={metaphorSquare}
						alt="Metaphor Square"
						placeholder="blur"
						width={55}
						height={31}
						className="absolute bottom-[-20px]"
					/>
				</header>
				<article className="p-5 mx-auto md:w-7/12 py-10">
					<p className="font-light text-2xl mb-3">
						Hey there, fellow Metaphor creators! We&#39;re stoked that you want
						to join our team of Punks, Freestylers, and Software Freestyle
						Engineers. Let&#39;s rock this joint with some awesome
						contributions!
					</p>
					<h2 className="font-bold text-3xl mb-3">How to join the fun</h2>
					<ol className="list-decimal list-inside mb-3">
						<li className="font-light text-2xl">
							&mdash; First off, fork the repository to your own account, champ.
						</li>
						<li className="font-light text-2xl">
							&mdash; Clone that repo to your local machine like a boss.
						</li>
						<li className="font-light text-2xl">
							&mdash; Now create a new branch, name it something cool.
						</li>
						<li className="font-light text-2xl">
							&mdash; Start making those changes and commit them to your branch
							like a pro (
							<Link
								href="https://github.com/darkterminal/metaphore/blob/main/CONVENTIONAL_COMMIT.md"
								target="_blank"
								className="link-neutral"
							>
								with this mantra
							</Link>
							).
						</li>
						<li className="font-light text-2xl">
							&mdash; Push your branch to your forked repository and let the
							magic happen.
						</li>
						<li className="font-light text-2xl">
							&mdash; Create a pull request from your branch to the main
							repository.
						</li>
						<li className="font-light text-2xl">
							&mdash; Sit tight and wait for our team to give you the thumbs up
							or give you some sweet feedback.
						</li>
						<li className="font-light text-2xl">
							&mdash; Once you get the green light, your changes will be merged
							into the main repository. Congratulations, you&#39;re a Metaphor
							master now!
						</li>
					</ol>
					<h2 className="font-bold text-3xl mb-3">How you can contribute</h2>
					<p className="font-light text-2xl mb-3">
						Don&#39;t matter if you&#39;re an expert or just starting out, we
						welcome all kinds of contributions. Here are some ideas to get you
						started:
					</p>
					<ul className="list-square mb-3">
						<li className="font-light text-2xl">
							&mdash; Create some fresh code snippets or metaphors that will
							blow our minds!
						</li>
						<li className="font-light text-2xl">
							&mdash; Jazz up existing code snippets or metaphors with your own
							unique flair.
						</li>
						<li className="font-light text-2xl">
							&mdash; Join our community forums and discussions, and get
							involved in the fun.
						</li>
						<li className="font-light text-2xl">
							&mdash; Help us make our documentation and resources even better.
						</li>
						<li className="font-light text-2xl">
							&mdash; Share your skills and expertise with our community and
							show us what you&#39;ve got!
						</li>
					</ul>
					<h2 className="font-bold text-3xl mb-3">
						Guidelines for contributions
					</h2>
					<p className="font-light text-2xl mb-3">
						To keep our community cool and funky, please stick to these
						guidelines when you&#39;re making contributions:
					</p>
					<ul className="list-square mb-3">
						<li className="font-light text-2xl">
							&mdash; Respect your fellow Metaphor creators and be kind to each
							other.
						</li>
						<li className="font-light text-2xl">
							&mdash; Follow our code of conduct at all times, we don&#39;t want
							no trouble here.
						</li>
						<li className="font-light text-2xl">
							&mdash; Only submit your original creations, don&#39;t steal other
							people&#39;s stuff.
						</li>
						<li className="font-light text-2xl">
							&mdash; Make sure your contributions fit in with our community
							values of creativity, diversity, and innovation.
						</li>
						<li className="font-light text-2xl">
							&mdash; Stay focused and relevant to our mission of using code to
							make the world a better place.
						</li>
					</ul>
					<p className="font-light text-2xl mb-3">
						Thanks for your interest in contributing to Metaphore (SCP)! We
						can&#39;t wait to see your sick skills and mind-blowing
						contributions. Let&#39;s do this!
					</p>
				</article>
			</div>
		</>
	);
}

export default TheCultureAndVibe;
