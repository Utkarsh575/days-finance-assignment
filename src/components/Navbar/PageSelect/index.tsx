import React from "react";
import { PageProps } from "~/types/PageTypes";
import Dropdown from "../../ui/Dropdown"
export default function PageSelect({
  selectedPage,
  setSelectedPage,
}: PageProps) {
  const pages = [
    "Overview",
    "Portfolio",
    "Financials",
    "Fees",
    "Depositors",
    "Trade",
  ];

  return (
    <>
      <div className="hidden h-[3rem] items-center justify-evenly rounded-xl bg-accent text-white sm:flex sm:text-sm  xl:text-lg">
        {pages.map((e, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectedPage === e ? "bg-active" : ""
              } rounded-lg py-2 sm:px-2 xl:px-5`}
              onClick={() => {
                setSelectedPage(e);
              }}
            >
              {e}
            </button>
          );
        })}
      </div>
      <Dropdown className="flex md:hidden " items={pages} selectedItem={selectedPage} setItem={setSelectedPage}/>
    </>
  );
}
