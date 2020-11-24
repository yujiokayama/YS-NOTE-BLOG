import Link from "next/link";

import markdownStyles from "./markdown-styles.module.scss";
import DateFormatter from "~/components/date-formatter";
import CoverImage from "~/components/cover-image";
import TableOfContents from "~/components/table-of-contents";
import classNames from "classnames";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  content: string;
};

const PostBody = ({ title, coverImage, date, content }: Props) => {
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
              <a aria-label="記事一覧へ" className="to-top">
                <span>記事一覧へ</span>
              </a>
            </Link>{" "}
          </section>
        </div>
      </div>
    </>
  );
};

export default PostBody;
