import React, { ReactElement } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface Props {}

export default function ReactSelect({}: Props): ReactElement {
  return (
    <>
      <div className="p-10">
        <Select options={options} />
      </div>
    </>
  );
}
