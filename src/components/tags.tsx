import Link from "next/link";

type Props = {
  tag: string;
};

const Tags = ({ tag }: Props) => {
  return (
    <>
      <li className="article-tags-item">
        <Link href="/">{tag}</Link>
      </li>
    </>
  );
};

export default Tags;
