import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const Logo = () => {
    return (
      <Image
        src="/assets/images/logo.svg"
        alt="YS-NOTE"
        width="120"
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
    </>
  );
};

export default Header;
