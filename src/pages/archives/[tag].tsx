import { useRouter } from "next/router";
import Layout from "~/components/layout/Default";
import MoreStories from "~/components/more-stories";
import { getAllPosts } from "~/lib/api";
import Post from "~/types/post";

import { useDispatch } from "react-redux";
import { fetchPosts } from "~/store/modules/Post";

type Props = {
  currentTag: string;
  allPosts: Post[];
  filteredPosts: Post[];
};

const Archives = ({ currentTag, allPosts, filteredPosts }: Props) => {
  const dispatch = useDispatch();
  const onFetchPost = () => dispatch(fetchPosts(allPosts));
  onFetchPost();

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

/**
 * getStaticPathsからparamsを受け取る
 */
export async function getStaticProps({ params }: Params) {
  const currentTag = params.tag;

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
      currentTag,
      tagList,
      allPosts,
      filteredPosts,
    },
  };
}
