import React from "react";
import { PageProps } from "~/types/PageTypes";

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
    <div className="flex h-[3rem]  items-center justify-evenly rounded-xl bg-accent  text-white">
      {pages.map((e, idx) => {
        return (
          <button
            key={idx}
            className={`${
              selectedPage === e ? "bg-active" : ""
            } rounded-lg px-5 py-2`}
            onClick={() => {
              setSelectedPage(e);
            }}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
}
