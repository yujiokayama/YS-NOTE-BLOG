import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "~/store/rootReducer";

const TagList = () => {
  const { posts } = useSelector((state: RootState) => state.Post);

  // const tagCount: any = {};
  // const flat = posts.map((e) => {
  //   return e.tags;
  // });
  // const flatTags = Array.prototype.concat.apply([], flat);

  // for (let i = 0; i < flatTags.length; i++) {
  //   const key = flatTags[i];
  //   tagCount[key] = tagCount[key] ? tagCount[key] + 1 : 1;
  // }

  // const tags = Object.entries(tagCount).map((e) => {
  //   return {
  //     name: e[0] as string,
  //     count: e[1] as number,
  //   };
  // });

  // tags.sort((a, b) => {
  //   return b.count - a.count;
  // });

  return (
    <>
      {/* <ul className="tags">
        {tags.map((tag, i) => {
          return (
            <li className="tags-label" key={i}>
              <Link as={`/archives/${tag}`} href="/archives/[tag]">
                <span>
                  #<span className="ml-3">{tag}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default TagList;
