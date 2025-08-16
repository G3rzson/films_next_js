import NavLinkItem from "./NavLinkItem";
import Logo from "./Logo";
import UserLink from "./UserLink";

export default function Header() {
  return (
    <header className="bg-zinc-800 flex items-center justify-between">
      <div className=" flex items-center justify-center gap-4">
        <Logo />
        <NavLinkItem />
      </div>
      <UserLink />
    </header>
  );
}
