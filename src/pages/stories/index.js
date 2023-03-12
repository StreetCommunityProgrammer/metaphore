import React from 'react';
import Meta from '@/components/Meta';
import { getLanguageLists } from '@/services/markdownService';
import StoryLanguages from '@/components/stories/StoryLanguages';

export async function getStaticProps() {
  const languages = getLanguageLists();
  return {
    props: { languages },
  };
}

function Stories({ languages }) {
  return (
    <>
      <Meta title="The Stories of Metaphore" />
      <section className="w-10/12 mx-auto my-10 min-h-screen">
        <h1 className="font-semibold text-center text-4xl mb-3 text-white dark:text-zinc-900">
          Metaphor Stories
        </h1>
        <p className="font-light text-center text-2xl">
          We know that <span className="text-mark-dope">programming</span> is
          more than just code.{' '}
          <span className="text-mark-dope">It&apos;s an art</span> form, and
          like all art, it&apos;s{' '}
          <span className="text-mark-dope">open to interpretation</span>.
          That&apos;s why we&apos;ve created a space for{' '}
          <span className="text-mark-dope">metaphor stories</span> in each
          programming language. Each story{' '}
          <span className="text-mark-dope">is a unique interpretation</span> of
          programming{' '}
          <span className="text-mark-dope">in a particular language</span>, and
          it&apos;s a great way to expand your{' '}
          <span className="text-mark-dope">thinking and learn</span> new skills.
          Whether you&apos;re a seasoned programmer or just starting,{' '}
          <span className="text-mark-dope">our stories will inspire</span> and
          challenge you to{' '}
          <span className="text-mark-dope">think outside the box</span>.
        </p>
        <StoryLanguages languages={languages} />
      </section>
    </>
  );
}

export default Stories;
