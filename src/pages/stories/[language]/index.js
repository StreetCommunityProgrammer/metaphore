import Meta from '@/components/Meta';
import RandomQuote from '@/components/RandomQuotes';
import StoryLists from '@/components/stories/StoryLists';
import { getAllStories, getLanguageLists } from '@/services/markdownService';
import { capitalize } from 'lodash';
import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';
import Link from 'next/link';

export async function getStaticPaths() {
	const allLanguage = getLanguageLists();
	const paths = allLanguage.map((lang) => ({
		params: { language: lang.name },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const posts = getAllStories(`public/collections/stories/${params.language}`);
	return {
		props: {
			posts: posts,
			language: params.language,
		},
	};
}

function StoryBaseLanguage({ posts, language }) {
	const router = useRouter();
	const currentUrl = router.asPath;
	return (
		<>
			<Meta />
			<NextSeo
				title={`${capitalize(language)} Metaphor Stories | ${NEXT_APP_NAME}`}
				description={`Our metaphor stories are a unique interpretation of programming in ${language} that will inspire you to think outside the box and explore new ways of coding.`}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: NEXT_BASE_URL + currentUrl,
					siteName: NEXT_APP_NAME,
				}}
			/>
			<header className="bg-zinc-50 dark:bg-zinc-900 px-32 py-20">
				<h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50">
					Our metaphor stories are a unique interpretation of programming in{' '}
					<span className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 italic px-2">
						{language}
					</span>{' '}
					that will inspire you to think outside the box and explore new ways of
					coding.
				</h1>
				<RandomQuote language={language} />
			</header>
			<article className="my-5 mx-32">
				{posts.length > 0 ? <StoryLists stories={posts} /> : (
					<div className='h-96 flex justify-center items-center'>
						<div className='text-center'>
							<h1 className='text-2xl mb-3'>No one telling a story about <span className="bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 italic px-2">{language}</span> , did you have story? Share your story about <span className="bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 italic px-2">{language}</span></h1>
							<Link href={`https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2C${language}&template=create_${language}_story.yml&title=Your+Story+Title`} target='_blank' className="btn bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">Ok, let me tell you a story</Link>
						</div>
					</div>
				)}
			</article>
		</>
	);
}

export default StoryBaseLanguage;
