import React from "react";
import Dropdown from "../../ui/Dropdown";
import { chain } from "~/types/DropdownTypes";
export default function ChainSelect() {
  const chains = ["GIOBRAC", "POLYGON", "SOLANA", "ETHEREUM"];

  const [toggled, setToggled] = React.useState(false);
  const [chain, setChain] = React.useState<string>("GIOBRAC");

  return <Dropdown items={chains} setItem={setChain} selectedItem={chain} />;
}
