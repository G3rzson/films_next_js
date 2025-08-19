import NavLinkItem from "./NavLinkItem";
import Logo from "./Logo";
import UserLink from "./UserLink";

export default function Header() {
  return (
    <header className="bg-zinc-800 flex items-center justify-between flex-col sm:flex-row">
      <div className=" flex items-center justify-center sm:gap-4 flex-col sm:flex-row w-full sm:w-auto">
        <Logo />
        <NavLinkItem />
      </div>
      <UserLink />
    </header>
  );
}
