import PostPreview from "~/components/post-preview";
import Post from "~/types/post";

type Props = {
  posts: Post[];
};

const Archives = ({ posts }: Props) => {
  return (
    <>
      <ul className="article-list">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </ul>
    </>
  );
};

export default Archives;
