import React from "react";
import Dropdown from "../../ui/Dropdown";


export default function WalletSelect() {


  const wallets = ["0xDBD8C5672265616C715F61BF1923BAD4D66B582C", "0xDBD8C5672265616C715F61BF1923BAD4D66B582C"];

  const [toggled, setToggled] = React.useState(false);
  const [wallet, setWallet] = React.useState<string>("0xDBD8C5672265616C715F61BF1923BAD4D66B582C");

  return <Dropdown items={wallets} setItem={setWallet} selectedItem={wallet} />;
}
