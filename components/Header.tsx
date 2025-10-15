import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Image
          src={"/assets/images/logo.png"}
          alt="Signalist"
          width={140}
          height={32}
          className="h-8 w-auto cursor-pointer"
        />
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
