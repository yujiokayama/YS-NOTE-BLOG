import Link from "next/link";

type Props = {
  tags: string[];
};

const Tags = ({ tags }: Props) => {
  return (
    <>
      <ul className="article-tags">
        <li className="article-tags-item">
          {tags.map((tag, index) => {
            return (
              <Link as={`/archives/${tag}`} href="/archives/[tag]" key={index}><a>{tag}</a></Link>
            )
          })}
        </li>
      </ul>
    </>
  );
};

export default Tags;
