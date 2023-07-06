import React from "react";
import Navbar from "../Navbar";
import Card from "../ui/Card"
import InfoCard from "../ui/Card/InfoCard";
import Placeholder from "../ui/Card/Placeholder";
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
    <section className=" mx-5 flex h-[95%] w-full flex-col overflow-scroll xl:overflow-x-hidden ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <section className=" h-full ">
      <Placeholder heading="Basics" >
        <Card title="1,206,915.097 USDC" primaryText="$1,206,915.097" secondaryText="aslkdhnfkjlads" imageUrl="/wallet.svg"/>
        <Card title="1,206,915.097 USDC" primaryText="$1,206,915.097" secondaryText="aslkdhnfkjlads" imageUrl="/wallet.svg"/>
        <Card title="1,206,915.097 USDC" primaryText="$1,206,915.097" secondaryText="Share Supply" imageUrl="/wallet.svg"/>
        <Card title="1,206,915.097 USDC" primaryText="$1,206,915.097" secondaryText="aslkdhnfkjlads" imageUrl="/wallet.svg"/>
      </Placeholder>
      <Placeholder heading="Return Metrics">
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
        <InfoCard metric="Return Month-to-Date" value="-7.05%" />
      </Placeholder>
      <Placeholder heading="Risk Metrics">
        <InfoCard metric="Annualised Volatility" value="88.86%" className="w-[47%]"/>
        <InfoCard metric="Shape Ratio" value="0.47" className="w-[47%]"/>
      </Placeholder>
      </section>
    </section>
  );
}
