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

export default function AppContent() {
  const [selectedPage, setSelectedPage] = React.useState<string>("Financials");

  return (
    <section className=" mx-5 flex h-[95%] w-full flex-col overflow-scroll xl:overflow-hidden">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <h1>Appcontnet</h1>
    </section>
  );
}
