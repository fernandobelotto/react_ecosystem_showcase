import { ReactElement } from "react";

import { Grid } from "@githubocto/flat-ui";

export default function FlatUi(): ReactElement {
  const data = [
    { column1: 123 },
    { column1: 234 },
    { column1: 1234 },
    { column1: 32 },
    { column1: 456 },
    { column1: 98 },
  ];

  return (
    <>
      <Grid data={data} />;
    </>
  );
}
