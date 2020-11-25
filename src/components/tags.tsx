import Link from "next/link";

type Props = {
  name: string;
};

const Tags = ({ name }: Props) => {
  return (
    <>
      <li className="article-tags-item">
        <Link href="/">{name}</Link>
      </li>
    </>
  );
};

export default Tags;
