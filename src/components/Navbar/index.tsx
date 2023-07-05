import Dropdown from "./DropDown";

export default function Navbar() {
  return (
    <nav className="flex h-[4rem] items-center justify-start rounded-xl bg-tertiary px-2">
      <Dropdown />
    </nav>
  );
}
