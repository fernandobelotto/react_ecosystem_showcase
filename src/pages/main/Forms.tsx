import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";

interface Props {}

export default function FormsPage({}: Props): ReactElement {
  const libs = [
    {
      title: "react-hook-form",
      link: "https://github.com/react-hook-form/react-hook-form",
      description: "React Hooks for forms validation",
    },
    {
      title: "formik",
      link: "https://github.com/jaredpalmer/formik",
      description: "Build forms in React, without the tears",
    },
    {
      title: "react-jsonschema-form",
      link: "https://github.com/mozilla-services/react-jsonschema-form",
      description: "A React component for building Web forms from JSON Schema",
    },
    {
      title: "react-final-form",
      link: "https://github.com/final-form/react-final-form",
      description:
        "High performance subscription-based form state management for React",
    },
    {
      title: "unform",
      link: "https://github.com/Rocketseat/unform",
      description: "Performance-focused API for React forms",
    },
    {
      title: "formily",
      link: "https://github.com/alibaba/formily",
      description: "Alibaba Group Unified Form Solution",
    },
    {
      title: "uniforms",
      link: "https://github.com/vazco/uniforms",
      description: "A React library for building forms from any schema",
    },
    {
      title: "formsy-react",
      link: "https://github.com/formsy/formsy-react/",
      description: "A form input builder and validator for React",
    },
    {
      title: "react-formal",
      link: "https://github.com/jquense/react-formal",
      description: "Sophisticated HTML form management for React",
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
