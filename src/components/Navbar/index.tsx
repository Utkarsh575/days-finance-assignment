import ChainSelect from "./ChainSelect";
import PageSelect from "./PageSelect";
import { PageProps } from "~/types/PageTypes";

export default function Navbar({ selectedPage, setSelectedPage }: PageProps) {
  return (
    <nav className="flex h-[4rem] items-center justify-start gap-5 rounded-xl bg-tertiary px-2">
      <ChainSelect />
      <PageSelect
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </nav>
  );
}
