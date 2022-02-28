import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";

interface Props {}

export default function FrameworksPage({}: Props): ReactElement {
  const libs = [
    {
      title: "next.js",
      link: "https://github.com/vercel/next.js",
      description: "The React Framework",
    },
    {
      title: "gatsby.js",
      link: "https://github.com/gatsbyjs/gatsby",
      description: "Free and open source framework based on React",
    },
    {
      title: "react-admin",
      link: "https://github.com/marmelab/react-admin",
      description:
        "Frontend Framework for building B2B applications on top of REST/GraphQL APIs",
    },
    {
      title: "remix",
      link: "https://remix.run/",
      description:
        "Finally, a killer React framework from the creators of React Router",
    },
    {
      title: "Blitz",
      link: "https://blitzjs.com",
      description: "The Fullstack React Framework",
    },
    {
      title: "aleph.js",
      link: "https://github.com/alephjs/aleph.js",
      description: "The React Framework in Deno",
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
