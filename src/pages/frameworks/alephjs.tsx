import React, { ReactElement } from "react";
import Description from "../../components/description";

interface Props {}

export default function Alephjs({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Alephjs"
        subtitle="The Fullstack Framework in Deno."
        body="Aleph.js gives you the best developer experience for building modern web applications: TypeScript in Deno, ES module imports, file-system routing, SSR & SSG, HMR with Fast Refresh, and more. No config needed."
      />
    </>
  );
}
