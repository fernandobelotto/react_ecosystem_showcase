import React, { ReactElement } from "react";
import Description from "../../components/description";

interface Props {}

export default function ReactBootstrap({}: Props): ReactElement {
  return (
    <>
      <Description
        title="React Bootstrap"
        subtitle="The most popular front-end framework. Rebuilt for React."
      >
        <p>
          React-Bootstrap replaces the Bootstrap JavaScript. Each component has
          been built from scratch as a true React component, without unneeded
          dependencies like jQuery.As one of the oldest React libraries,
          React-Bootstrap has evolved and grown alongside React, making it an
          excellent choice as your UI foundation.
        </p>
      </Description>
    </>
  );
}
