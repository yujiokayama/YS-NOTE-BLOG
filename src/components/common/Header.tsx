import Link from "next/link";
import Image from "next/image";
import TagList from "~/components/tag-list";

const Header = () => {
  const Logo = () => {
    return (
      <Image
        src="/assets/images/logo.svg"
        alt="YS-NOTE"
        width="100"
        height="auto"
        priority
      />
    );
  };
  return (
    <>
      <header>
        <h1 className="logo">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </h1>
      </header>
      <div className="mb-20">
        <TagList />
      </div>
    </>
  );
};

export default Header;
