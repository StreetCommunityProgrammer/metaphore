import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../../styles/TheStory.module.css';
import { getSingleStory, getAllStories } from '@/services/markdownService';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import StoryHeader from '@/components/stories/StoryHeader';
import Meta from '@/components/Meta';
import Giscus from '@giscus/react';
import { GISCUS } from '@/constants/giscus-config';
import ScrollToTop from '@/components/ScrollToTop';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { seoBanner } from '@/constants/ogimage-rest-generator';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from 'next-share';

export async function getStaticPaths() {
	const posts = getAllStories(`public/collections/stories`);
	const paths = posts.map((post) => ({
		params: { slug: post.slug, language: post.frontmatter.language },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { language, slug } = context.params;
	const storyDetail = getSingleStory(slug, language);

	return {
		props: {
			data: storyDetail,
		},
	};
}

export default function TheStory({ data }) {
	const router = useRouter()
	const currentUrl = router.asPath
	return (
		<>
			<Meta />
			<NextSeo
				title={`Metaphor Story - ${data.frontmatter.title} | ${NEXT_APP_NAME}`}
				description={`${data.frontmatter.author} telling a story about ${data.frontmatter.title}`}
				canonical={NEXT_BASE_URL + currentUrl}
				openGraph={{
					type: 'article',
					article: {
						publishedTime: data.frontmatter.created_at,
						modifiedTime: data.frontmatter.created_at,
						authors: [].push(`https://github.com/${data.frontmatter.author}`),
					},
					images: [
						{
							url: seoBanner(data.frontmatter.title, data.frontmatter.author),
							width: 850,
							height: 650,
							alt: data.frontmatter.title,
						},
					],
					siteName: 'Metaphore (SCP)',
				}}
			/>
			<article>
				<StoryHeader
					title={data.frontmatter.title}
					author={data.frontmatter.author}
					language={data.frontmatter.language}
					createdAt={data.frontmatter.created_at}
				/>
				<div className="markdownHtml w-11/12 sm:w-9/12 mx-auto my-10">
					<ReactMarkdown
						children={data.content}
						remarkPlugins={[remarkGfm]}
						className={styles.markdownHtml}
						components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || '');
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										style={nightOwl}
										language={match[1]}
										PreTag="pre"
										CodeTag="code"
										showLineNumbers={true}
										className="mockup-code"
										{...props}
									/>
								) : (
									<code
										className={`${className} bg-slate-900 text-gray-300 p-1 rounded font-semibold text-xs font-mono`}
										{...props}
									>
										{children}
									</code>
								);
							},
						}}
					/>
					<div className="my-3 flex gap-3">
						<div className="py-1">
							<span className="font-bold italic">Share This Story</span>
						</div>
						<FacebookShareButton
							url={NEXT_BASE_URL + currentUrl}
							quote={`${data.frontmatter.author} telling a story about ${data.frontmatter.title}`}
							hashtag={'#MetaphoreSCP #StreetCommunityProgrammer'}
						>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
						<RedditShareButton
							url={NEXT_BASE_URL + currentUrl}
							title={`${data.frontmatter.author} telling a story about ${data.frontmatter.title}`}
							windowWidth={660}
							windowHeight={460}
						>
							<RedditIcon size={32} round />
						</RedditShareButton>
						<TwitterShareButton
							url={NEXT_BASE_URL + currentUrl}
							title={`${data.frontmatter.author} telling a story about ${data.frontmatter.title}`}
						>
							<TwitterIcon size={32} round />
						</TwitterShareButton>
						<LinkedinShareButton url={NEXT_BASE_URL + currentUrl}>
							<LinkedinIcon size={32} round />
						</LinkedinShareButton>
					</div>
					<Giscus
						id="commets"
						repo={GISCUS.repo}
						repoId={GISCUS.repoId}
						category={GISCUS.category}
						categoryId={GISCUS.categoryId}
						mapping="title"
						strict="1"
						reactions-enabled="1"
						emit-metadata="0"
						input-position="top"
						theme="preferred_color_scheme"
						lang="en"
						loading="lazy"
					/>
				</div>
				<ScrollToTop />
			</article>
		</>
	);
}
