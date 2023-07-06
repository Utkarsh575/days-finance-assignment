import React from "react";

type PlaceHolderProps = {
  heading: string;
  children: JSX.Element | JSX.Element[];
};

export default function Placeholder(props: PlaceHolderProps) {
  const { heading, children } = props;

  return (
    <>
      <div>
        <div className="mt-5 flex h-[3rem] w-full items-center justify-start rounded-t-md bg-ribbon">
          <h1 className="ml-5 text-xl font-bold">{heading}</h1>
        </div>
        <div className="flex flex-wrap items-center justify-evenly gap-[1rem] rounded-b-md bg-placeholder px-5 py-5">
          {children}
        </div>
      </div>
    </>
  );
}
