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
          <h2 className="article-title">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>{title}</a>
            </Link>
          </h2>
          <figure className="article-img">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </figure>
          <ul className="article-infomation">
            <li className="mt-5">
              <DateFormatter dateString={date} />
            </li>
          </ul>
          <div>
            <ul className="article-tags">
              {tags.map((tag, index, array) => (
                <Tags name={tag} />
              ))}
            </ul>
          </div>
          {/* <div>
            <Avatar name={author.name} picture={author.picture} />
          </div> */}
        </div>
      </li>
    </>
  );
};

export default PostPreview;
