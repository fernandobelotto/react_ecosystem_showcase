import React, { ReactElement } from "react";
import Description from "../../components/description";

interface Props {}

export default function ChakraUI({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Chakra UI"
        subtitle="Create accessible React apps with speed"
      >
        <p>
          Chakra UI is a simple, modular and accessible component library that
          gives you the building blocks you need to build your React
          applications.
        </p>
      </Description>
    </>
  );
}
