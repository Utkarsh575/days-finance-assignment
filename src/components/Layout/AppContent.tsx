import React from "react";
import Navbar from "../Navbar";
import Card from "../ui/Card";
import InfoCard from "../ui/Card/InfoCard";
import Placeholder from "../ui/Card/Placeholder";
import {
  basicData,
  returnMetricsData,
  riskMetricsData,
} from "../../services/cardData";
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
        {basicData.map((e) => {
          return (
            <>
              <Placeholder heading={e.heading}>
                {e.info.map((e) => {
                  return (
                    <>
                      <Card
                        title={e.title}
                        primaryText={e.primaryText}
                        secondaryText={e.secondaryText}
                        imageUrl={e.imageUrl}
                      />
                    </>
                  );
                })}
              </Placeholder>
            </>
          );
        })}
        {returnMetricsData.map((e) => {
          return (
            <>
              <Placeholder heading={e.heading}>
                {e.info.map((e) => {
                  return (
                    <>
                      <InfoCard metric={e.metric} value={e.value} />
                    </>
                  );
                })}
              </Placeholder>
            </>
          );
        })}
        {riskMetricsData.map((e) => {
          return (
            <>
              <Placeholder heading={e.heading}>
                {e.info.map((e) => {
                  return (
                    <>
                      <InfoCard
                        metric={e.metric}
                        value={e.value}
                        className={e.className}
                      />
                    </>
                  );
                })}
              </Placeholder>
            </>
          );
        })}
      </section>
    </section>
  );
}
