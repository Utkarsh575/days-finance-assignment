import React from "react";
import Image from "next/image";

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <nav
      className="ml-[1.3rem] flex h-[95%] flex-col items-center rounded-xl bg-primary pt-5 "
      onClick={() => setExpanded(!expanded)}
    >
      {!expanded ? (
        <>
          <div className="flex flex-col items-center justify-start gap-[2rem] w-[5rem]">
            <Image src="/logo.svg" height={40} width={40} alt="asset" />
            <Image src="/vault.svg" height={25} width={25} alt="asset" />
            <Image src="/network.svg" height={25} width={25} alt="asset" />
            <Image src="/assets.svg" height={20} width={20} alt="asset" />
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-center px-[1.5rem]">
            <div className="mb-[2.2rem] flex  items-center justify-between gap-2 ">
              <h1 className="text-xl  text-secondary ">vault</h1>
              <Image src="/logo.svg" height={20} width={20} alt="asset" />
            </div>
            <div className="mb-[1.6rem] flex   items-center gap-5 ">
              <Image src="/vault.svg" height={25} width={25} alt="asset" />
              <h1 className="  text-md">Vaults</h1>
            </div>
            <div className="mb-[1.6rem] flex   items-center gap-2 text-center ">
              <Image src="/network.svg" height={25} width={25} alt="asset" />
              <h1 className="text-md">Network</h1>
            </div>
            <div className="mb-[2rem] flex   items-center gap-5">
              <Image src="/assets.svg" height={20} width={20} alt="asset" />
              <h1 className="  text-md">Assets</h1>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
