import Link from "next/link";

const TagList = () => {

  const tagCount: { [key: string]: number } = {};

  const tags = Object.entries(tagCount).map((element) => {
    return {
      name: element[0] as string,
      count: element[1] as number,
    };
  });

  // 投稿数が多いタグの順番で並び替える
  tags.sort((a, b) => {
    return b.count - a.count;
  });

  return (
    <>
      <ul className="tags">
        {tags.map((tag) => {
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
