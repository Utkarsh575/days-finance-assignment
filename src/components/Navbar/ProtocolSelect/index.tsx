import React from "react";
import Dropdown from "../../ui/Dropdown";
import { protocol } from "~/types/DropdownTypes";


export default function ProtocolSelect() {


  const protocols = ["Arbitrum", "BNB Chain", "Avalanche", "Polygon"];

  const [toggled, setToggled] = React.useState(false);
  const [protocol, setProtocol] = React.useState<string>("Arbitrum");

  return <Dropdown items={protocols} setItem={setProtocol} selectedItem={protocol} />;
}
