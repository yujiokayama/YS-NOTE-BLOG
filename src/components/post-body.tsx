import Link from "next/link";
import markdownStyles from "./markdown-styles.module.scss";
import DateFormatter from "~/components/date-formatter";
import CoverImage from "~/components/cover-image";
import Tags from "~/components/tags";
import TableOfContents from "~/components/table-of-contents";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  content: string;
  tags: string[];
};

const PostBody = ({ title, coverImage, date, content, tags }: Props) => {
  return (
    <>
      <div className="container post">
        <div className="post-main">
          <section>
            <h1 className="title-main">{title}</h1>
            <ul className="post-infomation">
              <li className="post-created">
                <span className="ml-5">
                  <DateFormatter dateString={date} />
                </span>
              </li>
              <li>
                <Tags tags={tags} />
              </li>
            </ul>
            <div className="thumbnail">
              <CoverImage title={title} src={coverImage} />
            </div>
            <div
              className={markdownStyles.markdown}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </section>
        </div>
        <div className="post-side">
          <section>
            <TableOfContents selector={markdownStyles.markdown} />
            <Link href="/">
              <a aria-label="ノート一覧へ" className="to-top">
                <span>ノート一覧へ</span>
              </a>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default PostBody;
