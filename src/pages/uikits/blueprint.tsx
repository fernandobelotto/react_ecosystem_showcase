import React, { ReactElement } from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";

interface Props {}

export default function Blueprint({}: Props): ReactElement {
  return (
    <>
      <Button>Botão simples</Button>
    </>
  );
}
