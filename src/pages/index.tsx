import { useEffect } from "react";
import MoreStories from "~/components/more-stories";
import { getAllPosts, getBlogContents } from "~/lib/api";
import Post from "~/types/post";
import Layout from "~/components/layout/Default";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "~/store/rootReducer";
import { fetchPosts } from "~/store/modules/Post";

type Props = {
  allPosts: Post[];
  blogContents?: any;
};

const Index = ({ allPosts, blogContents }: Props) => {
  const { posts } = useSelector((state: RootState) => state.Post);
  const dispatch = useDispatch();
  const onFetchPosts = () => dispatch(fetchPosts(allPosts));

  useEffect(() => {
    onFetchPosts();
  }, []);

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
  const blogContents = getBlogContents();
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
    props: { allPosts, blogContents },
  };
};
