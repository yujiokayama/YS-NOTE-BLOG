import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import Tags from "~/components/tags";

import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  tags: string[];
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Props) => {
  return (
    <>
      <li className="article-content">
        <div className="article-inner">
          <figure className="article-img">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </figure>
          <h2 className="article-title">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>{title}</a>
            </Link>
          </h2>
          <ul className="article-infomation">
            <li className="mt-5">
              <DateFormatter dateString={date} />
            </li>
          </ul>
          <Tags tags={tags} />
          {/* <div>
            <Avatar name={author.name} picture={author.picture} />
          </div> */}
        </div>
      </li>
    </>
  );
};

export default PostPreview;
