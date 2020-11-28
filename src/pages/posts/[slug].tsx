import { useRouter } from "next/router";
import ErrorPage from "next/error";

import PostBody from "~/components/post-body";
import Layout from "~/components/layout/Default";
import { getPostBySlug, getAllPosts } from "~/lib/api";
import PostTitle from "~/components/post-title";
import markdownToHtml from "~/lib/markdownToHtml";

import PostType from "~/types/post";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={post.title} description={post.title}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <PostBody
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              content={post.content}
              tags={post.tags}
            />
          </article>
        </>
      )}
    </Layout>
  );
};

export default Post;


export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

