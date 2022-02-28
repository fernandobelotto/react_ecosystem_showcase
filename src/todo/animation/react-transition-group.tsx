import React, { ReactElement } from "react";
import Description from "../../components/description";

interface Props {}

export default function ReactTransitionGroup({}: Props): ReactElement {
  return (
    <>
      <Description
        title="React Transition Group"
        subtitle="Exposes simple components useful for defining entering and exiting transitions."
        body="React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier."
      />
    </>
  );
}
