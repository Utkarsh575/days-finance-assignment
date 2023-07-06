import Card from "../../ui/Card";
import InfoCard from "../../ui/Card/InfoCard";
import Placeholder from "../../ui/Card/Placeholder";
import {
  basicData,
  returnMetricsData,
  riskMetricsData,
} from "../../../services/cardData";

export default function Financialas() {
  return (
    <section className=" h-full ">
      {basicData.map((e, idx) => {
        return (
          <>
            <Placeholder key={idx} heading={e.heading}>
              {e.info.map((e, idx) => {
                return (
                  <>
                    <Card
                      key={idx}
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
      {returnMetricsData.map((e, idx) => {
        return (
          <>
            <Placeholder key={idx} heading={e.heading}>
              {e.info.map((e, idx) => {
                return (
                  <>
                    <InfoCard key={idx} metric={e.metric} value={e.value} />
                  </>
                );
              })}
            </Placeholder>
          </>
        );
      })}
      {riskMetricsData.map((e, idx) => {
        return (
          <>
            <Placeholder key={idx} heading={e.heading}>
              {e.info.map((e, idx) => {
                return (
                  <>
                    <InfoCard
                      key={idx}
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
  );
}
