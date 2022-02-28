import React, { ReactElement } from "react";
import Description from "../../components/description";

interface Props {}

export default function Gatsby({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Gatsby"
        subtitle="Build anything you can imagine"
        body="Gatsby gives frontend teams the tools and technology they need to build world-class web experiences. From marketing sites, to eCommerce stores, to documentation. Gatsby can help you build it."
      />
    </>
  );
}
