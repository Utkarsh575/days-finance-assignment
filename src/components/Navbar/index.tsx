import ChainSelect from "./ChainSelect";
import PageSelect from "./PageSelect";
import { PageProps } from "~/types/PageTypes";
import ProtocolSelect from "./ProtocolSelect";
import WalletSelect from "./WalletSelect";
import Image from "next/image";
export default function Navbar({ selectedPage, setSelectedPage }: PageProps) {
  return (
    <nav className="flex h-[4rem] items-center justify-between md:justify-between  rounded-xl bg-tertiary px-2">
      <div className="flex space-x-2">
        <ChainSelect />
        <PageSelect
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      <div className="flex space-x-1 ">
        <ProtocolSelect />
        <WalletSelect />
        <button className="rounded-lg bg-primary flex-shrink-0 p-2">
          <Image className="min-w-full" alt="avatar" width={30} height={30} src="/avatar.svg" />
        </button>
      </div>
    </nav>
  );
}
