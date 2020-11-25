import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import Layout from "~/components/layout/Default";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout title="YS-NOTE" description="フロントエンドエンジニアの技術ブログ" keyword="フロントエンド,Web,テクノロジー">
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
