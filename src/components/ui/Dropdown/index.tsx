import React from "react";
import Image from "next/image";
import { chain } from "~/types/DropdownTypes";

type InputProps = {
  items: string[] ;
  setItem: React.Dispatch<React.SetStateAction<chain>>;
  selectedItem: string;
};

export default function ChainSelect(props: InputProps) {
  const { items, setItem, selectedItem, ...rest } = props;

  // const chains = ["GIOBRAC", "POLYGON", "SOLANA", "ETHEREUM"];

  const [toggled, setToggled] = React.useState(false);
  // const [chain, setChain] = React.useState<string>("GIOBRAC");

  const handelChange = (e: number) => {
    setItem(items[e] as chain);
    setToggled(!toggled);
  };
  return (
    <div className="z-10 flex flex-col">
      <button
        className="relative flex h-[3rem] w-[9rem] items-center justify-evenly rounded-lg bg-primary text-white"
        onClick={() => setToggled(!toggled)}
      >
        <Image src={`/${selectedItem}.svg`} width={25} height={25} alt="chain" />
        <span>{selectedItem}</span>
        <Image width={10} height={10} alt="arrow" src="/arrow.svg" />
      </button>
      {toggled && (
        <ul className="absolute  w-[9rem] translate-y-[3.1rem] rounded-lg bg-tertiary text-white ">
          {items.map((elem, idx) => {
            return (
              <li
                key={idx}
                className="flex items-center justify-start  gap-2 p-2 py-2"
                onClick={() => handelChange(idx)}
              >
                <Image
                  src={`/${elem}.svg`}
                  width={25}
                  height={25}
                  alt="chain"
                />
                <h1>{elem}</h1>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
