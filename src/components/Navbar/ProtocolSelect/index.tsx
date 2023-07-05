import React from "react";
import Dropdown from "../../ui/Dropdown";
import { protocol } from "~/types/DropdownTypes";


export default function ProtocolSelect() {


  const protocols = ["Arbitum", "zkSync", "Avalanche", "Base"];

  const [toggled, setToggled] = React.useState(false);
  const [protocol, setProtocol] = React.useState<string>("Arbitum");

  return <Dropdown items={protocols} setItem={setProtocol} selectedItem={protocol} />;
}
