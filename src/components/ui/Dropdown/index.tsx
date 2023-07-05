import React from "react";
import Image from "next/image";
import { chain, protocol } from "~/types/DropdownTypes";

type InputProps = {
  items: string[] ;
  setItem: React.Dispatch<React.SetStateAction<string>>
  selectedItem: string;
  className?:string;
};

export default function ChainSelect(props: InputProps) {
  const { items, setItem, selectedItem,className, ...rest } = props;


  const [toggled, setToggled] = React.useState(false);
console.log(typeof(selectedItem))
  const handelChange = (e: number) => {

    setItem(items[e] as string);
    setToggled(!toggled);
  };


  const CUTTING_EXPRESSION = /\s+[^\s]*$/;
  const createShortcut = (text:string, limit:number) => {
    if (text.length > limit) {
        const part = text.slice(0, limit - 3);
        if (part.match(CUTTING_EXPRESSION)) {
          	return part.replace(CUTTING_EXPRESSION, ' ...');
        }
        return part + '...';
    }
    return text;
};

  return (
    <div className={`"flex flex-col" + ${className}`}>
      <button
        className="relative flex p-2 md:p-0 flex-col md:flex-row h-[3rem] md:w-[8rem] xl:w-[9rem] items-center justify-evenly rounded-lg bg-primary text-white text-xs md:text-sm  xl:text-lg"
        onClick={() => setToggled(!toggled)}
      >
        <Image src={`/${selectedItem}.svg`} width={25} height={25} alt="chain" />
        <span className="hidden md:block">{(()=>createShortcut(selectedItem,10))()}</span>
        <Image width={10} height={10} alt="arrow" src="/arrow.svg" />
      </button>
      {toggled && (
        <ul className="absolute md:w-[8rem] xl:w-[9rem] translate-y-[3.1rem] rounded-lg bg-tertiary text-white ">
          {items.map((elem, idx) => {
            return (
              <li
                key={idx}
                className="flex items-center justify-start md:gap-1 lg:gap-2 md:p-1 lg:p-2 py-2 "
                onClick={() => handelChange(idx)}
              >
                <Image
                  src={`/${elem}.svg`}
                  width={25}
                  height={25}
                  alt="chain"                />
                <h1 className="  md:text-sm  xl:text-lg">{(()=>createShortcut(elem,10))()}</h1>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
