import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  url?: string;
};

const Layout = ({
  children,
  title = "YS-NOTE",
  description,
  keyword,
  image,
  url,
}: Props) => (
  <div id="wrapper">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      {/* <meta name="description" content={description} /> */}
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
