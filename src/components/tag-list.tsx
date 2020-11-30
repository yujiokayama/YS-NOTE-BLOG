import { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "~/store/rootReducer";

const TagList = () => {
  // const tags = ["Vue", "Nuxt", "JavaScript"];
  const { posts } = useSelector((state: RootState) => state.Post);

  const tagCount: { [key: string]: number } = {};

  const flat = posts.map((obj) => {
    return obj.tags;
  });

  const flatTags = Array.prototype.concat.apply([], flat);

  for (let i = 0; i < flatTags.length; i++) {
    const key = flatTags[i];
    tagCount[key] = tagCount[key] ? tagCount[key] + 1 : 1;
  }

  const tags = Object.entries(tagCount).map((e) => {
    return {
      name: e[0] as string,
      count: e[1] as number,
    };
  });

  tags.sort((a, b) => {
    return b.count - a.count;
  });

  return (
    <>
      <ul className="tags">
        {tags.map((tag, index) => {
          return (
            <li className="tags-label" key={tag.name}>
              <Link as={`/archives/${tag.name}`} href="/archives/[tag]">
                <a>
                  #<span className="pl-3">{tag.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TagList;
