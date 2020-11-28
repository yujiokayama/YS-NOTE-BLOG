import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "~/store/rootReducer";

const TagList = () => {
  const { tags } = useSelector((state: RootState) => state.Tag);
  return (
    <>
      <ul className="tags">
        {tags?.map((tag, i) => {
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
      </ul>
    </>
  );
};

export default TagList;
