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
  return (
    <>
      <Meta title={`Metaphor Story - ${data.frontmatter.title}`} />
      <article>
        <StoryHeader
          title={data.frontmatter.title}
          author={data.frontmatter.author}
          language={data.frontmatter.language}
          createdAt={data.frontmatter.created_at}
        />
        <div className="markdownHtml w-9/12 mx-auto my-10">
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
      </article>
    </>
  );
}
