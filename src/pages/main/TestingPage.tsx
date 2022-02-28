import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";

interface Props {}

export default function TestingPage({}: Props): ReactElement {
  const libs = [
    {
      title: "storybook",
      link: "https://github.com/storybookjs/storybook",
      description:
        "Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.",
    },
    {
      title: "jest",
      link: "https://github.com/facebook/jest",
      description: " Delightful JavaScript Testing Framework",
    },
    {
      title: "enzyme",
      link: "https://github.com/airbnb/enzyme",
      description: " JavaScript Testing utilities for React",
    },
    {
      title: "react-testing-library",
      link: "https://github.com/testing-library/react-testing-library",
      description: " Simple and complete React DOM testing utilities",
    },
    {
      title: "react-hooks-testing-library",
      link: "https://github.com/mpeyper/react-hooks-testing-library",
      description:
        " React hooks testing utilities that encourage good testing practices",
    },
    {
      title: "majestic",
      link: "https://github.com/Raathigesh/majestic",
      description: " Zero config GUI for Jest",
    },
    {
      title: "cypress",
      link: "https://github.com/Raathigesh/majestic",
      description: " Zero config GUI for Jest",
    },
    {
      title: "mocha",
      link: "https://github.com/mochajs/mocha",
      description:
        "simple, flexible, fun javascript test framework for node.js & the browser",
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
