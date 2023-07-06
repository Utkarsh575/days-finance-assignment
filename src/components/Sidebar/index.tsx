import React from "react";
import Image from "next/image";

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    // TODO Make sidebar responsive
    <nav
      className="ml-[1.3rem] flex h-[95%] flex-col items-center rounded-xl bg-primary pt-5 "
      onClick={() => setExpanded(!expanded)}
    >
      {/* TODO remove redundant render  */}
      {!expanded ? (
        <>
          <div className="flex h-full w-[5rem] flex-col items-center justify-between  ">
            <div className="flex flex-col items-start justify-evenly gap-[2rem]">
              <Image src="/logo.svg" height={30} width={30} alt="asset" />
              <Image src="/vault.svg" height={25} width={25} alt="asset" />
              <Image src="/network.svg" height={25} width={25} alt="asset" />
              <Image src="/assets.svg" height={20} width={20} alt="asset" />
            </div>
            <div className="py-5">
              <Image src="/exit.svg" height={20} width={20} alt="exit" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-full w-full flex-col items-center justify-between px-[1.5rem] ">
            <div className="flex flex-col items-start justify-evenly ">
              <div className="mb-[2.2rem] flex  items-center justify-between gap-2  ">
                <h1 className="text-xl  text-secondary ">vault</h1>
                <Image src="/logo.svg" height={20} width={20} alt="asset" />
              </div>
              <div className="mb-[1.6rem] flex justify-evenly items-center gap-5  ">
                <Image src="/vault.svg" height={25} width={25} alt="asset" />
                <h1 className="  text-md">Vaults</h1>
              </div>
              <div className="mb-[1.6rem] flex justify-evenly  items-center gap-2 text-center ">
                <Image src="/network.svg" height={25} width={25} alt="asset" />
                <h1 className="text-md">Network</h1>
              </div>
              <div className="mb-[2rem] flex justify-evenly   items-center gap-5">
                <Image src="/assets.svg" height={20} width={20} alt="asset" />
                <h1 className="  text-md">Assets</h1>
              </div>
            </div>
            <div className="py-5">
              <div className="flex justify-center items-center gap-5">
                <Image src="/exit.svg" height={20} width={20} alt="exit" />
                <h1 className="  text-md">Exit</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
