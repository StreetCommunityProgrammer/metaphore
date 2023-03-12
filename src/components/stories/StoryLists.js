import { GoClock, GoPerson } from 'react-icons/go';
import StoryIcon from '../StoryIcon';
import TimeAgo from '../TimeAgo';
import Link from 'next/link';

function StoryLists({ stories }) {
  return (
    <>
      {stories.map((post, index) => (
        <article
          className="py-2 px-3 border rounded-md shadow-md flex items-center gap-3 mb-3"
          key={index}
        >
          <div className="dark:bg-zinc-900 w-[35px] h-[35px]">
            <StoryIcon language={post.frontmatter.language} size={35} />
          </div>
          <div>
            <Link href={`/stories/${post.frontmatter.language}/${post.slug}`}>
              <h2 className="mb-1 font-bold">{post.frontmatter.title}</h2>
            </Link>
            <div className="flex gap-3">
              <div className="text-sm">
                <GoPerson className="mr-1 inline" /> {post.frontmatter.author}
              </div>
              <TimeAgo
                dateString={post.frontmatter.created_at}
                icon={<GoClock className="mr-1 inline" />}
                className="text-sm"
              />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
export default StoryLists;
