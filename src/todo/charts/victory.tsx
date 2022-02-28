import React, { ReactElement } from "react";
import Description from "../../components/description";
import { VictoryPie } from "victory";

interface Props {}

export default function Victory({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Victory"
        subtitle="an ecosystem of composable React components for building interactive data visualizations."
      />
      <VictoryPie />
    </>
  );
}
