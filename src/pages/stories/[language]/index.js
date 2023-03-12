import Meta from '@/components/Meta';
import RandomQuote from '@/components/RandomQuotes';
import StoryLists from '@/components/stories/StoryLists';
import { getAllStories, getLanguageLists } from '@/services/markdownService';
import { capitalize } from 'lodash';
import React from 'react';

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
  return (
    <>
      <Meta title={`${capitalize(language)} Metaphor Stories`} />
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
        {posts.length > 0 ? <StoryLists stories={posts} /> : null}
      </article>
    </>
  );
}

export default StoryBaseLanguage;
