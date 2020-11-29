import { useEffect } from "react";
import Link from "next/link";
import { usePosts } from "~/context/Post";

const TagList = () => {
  const { currentPosts } = usePosts()!;

  useEffect(() => {}, []);

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
              <Link as={`/archives/${tag.name}`} href="/archives/[tag]">
                <span>
                  #<span className="ml-3">{tag.name}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul> */}
      <ul className="tags">
        {["Vue", "Nuxt", "JavaScript"].map((tag, index) => {
          return (
            <Link as={`/archives/${tag}`} href="/archives/[tag]">
              <li className="tags-label" key={index}>
                <span>
                  #<a className="ml-3">{tag}</a>
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default TagList;
