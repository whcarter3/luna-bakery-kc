//page to show all blog posts
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import { PostType } from '../types/post';

type BlogProps = {
  posts: PostType[];
};

export const Blog = ({ posts }: BlogProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="The Luna Bakery KC Blog" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-serif text-3xl">The Luna Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <article key={post.slug} className="mt-4">
              <p className="mb-1 text-sm">
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
              </p>
              <Link as={`/posts/${post.slug}`} href={`posts/[slug]`}>
                <h2 className="font-serif text-2xl text-accent">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-3">{post.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Blog;
