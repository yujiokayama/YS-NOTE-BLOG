import { useEffect } from "react";
import MoreStories from "~/components/more-stories";
import { getAllPosts } from "~/lib/api";
import Post from "~/types/post";
import Layout from "~/components/layout/Default";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "~/store/rootReducer";
import { fetchPosts } from "~/store/modules/Post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const { posts } = useSelector((state: RootState) => state.Post);
  const dispatch = useDispatch();
  const onFetchPosts = () => dispatch(fetchPosts(allPosts));

  useEffect(() => {
    onFetchPosts();
  }, [posts]);

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
