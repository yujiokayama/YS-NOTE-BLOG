import Link from "next/link";

type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  return (
    <>
      <ul className="article-tags">
        <li className="article-tags-item">
          {tags.map((tag, i) => {
            return <Link href="/" key={i}>{tag}</Link>;
          })}
        </li>
      </ul>
    </>
  );
};

export default Tags;
