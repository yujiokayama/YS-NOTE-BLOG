import Link from "next/link";
import Image from "next/image";
import TagList from "~/components/tag-list";

const Logo = () => {
  return (
    <Image
      src="/assets/images/logo.svg"
      alt="YS-NOTE"
      width={100}
      height="auto"
      priority
    />
  );
};

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link href="/">
            <a>
              {/* <Logo /> */}
              <img src="/assets/images/logo.svg" width="100" alt="" />
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
