import React from "react";
import Navbar from "../Navbar";
const pages = [
  "Overview",
  "Portfolio",
  "Financials",
  "Fees",
  "Depositors",
  "Trade",
];

import Financialas from "./PageLayouts/Financials";

export default function AppContent() {
  const [selectedPage, setSelectedPage] = React.useState<string>("Financials");

  return (
    <section className=" mx-5 flex h-[95%] w-full flex-col overflow-scroll xl:overflow-x-hidden ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {selectedPage === "Financials" ? (
        <Financialas />
      ) : (
        <h1>The page you are looking for is Under Construction🚧</h1>
      )}
    </section>
  );
}
