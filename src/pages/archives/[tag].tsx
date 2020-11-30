import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "~/components/layout/Default";
import MoreStories from "~/components/more-stories";
import { getAllPosts } from "~/lib/api";
import Post from "~/types/post";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "~/store/rootReducer";
import { fetchPosts } from "~/store/modules/Post";

type Props = {
  currentTag: string;
  allPosts: Post[];
  filteredPosts: Post[];
};

const Archives = ({ currentTag, allPosts, filteredPosts }: Props) => {
  const { posts } = useSelector((state: RootState) => state.Post);
  const dispatch = useDispatch();
  const onFetchPosts = () => dispatch(fetchPosts(allPosts));

  useEffect(() => {
    onFetchPosts();
  }, [posts]);

  return (
    <>
      <Layout
        title={currentTag}
        description={`${currentTag}の一覧ページ`}
        keyword={currentTag}
      >
        {filteredPosts.length > 0 && <MoreStories posts={filteredPosts} />}
      </Layout>
    </>
  );
};

export default Archives;

export async function getStaticPaths() {
  const tagList = Array.prototype.concat
    .apply(
      [],
      getAllPosts(["tags"]).map((tagNames) => {
        return tagNames.tags;
      })
    )
    .filter(function (val, index, array) {
      return array.indexOf(val) === index;
    });

  return {
    paths: tagList.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
}

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const currentTag = params.tag;

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  const filteredPosts = allPosts.filter((post: any) => {
    return post.tags.some((tag: string) => {
      return tag.match(currentTag);
    });
  });

  return {
    props: {
      allPosts,
      currentTag,
      filteredPosts,
    },
  };
}
