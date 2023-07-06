import React from "react";
import Image from "next/image";
type CardProps = {
  imageUrl: string;
  title: string;
  primaryText: string;
  secondaryText: string;
};
export default function WalletCard(props: CardProps) {
  const { imageUrl, title, primaryText, secondaryText } = props;

  return (
    <>
      <div className="w-[22%] rounded-lg bg-card p-5">
        <div className="flex w-full items-center justify-between ">
          <Image alt={secondaryText} width={50} height={50} src={imageUrl} />
          <div className="flex flex-col items-end ">
            <h1 className="text-xl">{title}</h1>
            <h2 className="text-lg text-gray-400">{primaryText}</h2>
          </div>
        </div>
        <h1 className="flex items-end justify-end text-lg">{secondaryText}</h1>
      </div>
    </>
  );
}
