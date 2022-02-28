import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";

interface Props {}

export default function StylingPage({}: Props): ReactElement {
  const libs = [
    {
      title: "styled-components",
      link: "https://github.com/styled-components/styled-components",
      description: "Visual primitives for the component age",
    },
    {
      title: "emotion",
      link: "https://github.com/emotion-js/emotion",
      description: "Library designed for writing CSS styles with JavaScript",
    },
    {
      title: "radium",
      link: "https://github.com/FormidableLabs/radium",
      description: "A toolchain for React component styling",
    },
    {
      title: "jss",
      link: "https://github.com/cssinjs/jss",
      description: "Authoring tool for CSS",
    },
    {
      title: "aphrodite",
      link: "https://github.com/Khan/aphrodite",
      description:
        "Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation",
    },
    {
      title: "linaria",
      link: "https://github.com/callstack/linaria",
      description: "Zero-Runtime CSS in JS",
    },
    {
      title: "stitches",
      link: "https://github.com/modulz/stitches",
      description:
        "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience",
    },
    {
      title: "vanilla-extract",
      link: "https://github.com/seek-oss/vanilla-extract",
      description: "Zero-runtime Stylesheets-in-TypeScript",
    },
    { title: "neumorphism", link: "https://github.com/adamgiebl/neumorphism" },
    {
      title: "tailwind-css",
      link: "https://github.com/tailwindlabs/tailwindcss",
    },
  ];

  return (
    <>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {libs.map((item) => {
          return <Card title={item.title} link={item.link} />;
        })}
      </div>
      <div className="m-10 text-center p-3 bg-white rounded-md w-28">
        <p>Total of {libs.length}</p>
      </div>
    </>
  );
}
