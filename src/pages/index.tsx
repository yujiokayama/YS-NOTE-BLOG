import MoreStories from "~/components/more-stories";
import { getAllPosts } from "~/lib/api";
import Post from "~/types/post";
import Layout from "~/components/layout/Default";

import { useDispatch } from "react-redux";
import { fetchPosts } from "~/store/modules/Post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {

  const dispatch = useDispatch();
  const onFetchPosts = () => dispatch(fetchPosts(allPosts));
  onFetchPosts();

  return (
    <>
      <Layout
        title="YS-NOTE"
        description="フロントエンドエンジニアの技術ブログ"
        keyword="フロントエンド,Web,テクノロジー"
      >
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
