import React from "react";

type InfoCardProps = {
  metric: string;
  value: string;
  className?: string;
};
export default function InfoCard(props: InfoCardProps) {
  const { metric, value , className} = props;

  return (
    <>
      <div className={`flex  flex-col items-start justify-between rounded-lg bg-card p-10 ${className?className:"w-[22%]"}`}>
        <h1 className="text-xl ">{metric}</h1>
        <h2 className="text-lg">{value}</h2>
      </div>
    </>
  );
}
