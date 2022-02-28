import React, { ReactElement } from "react";
import { TutorialCard } from "../../components/tutorial-card";

interface Props {}

export default function TutorialsPage({}: Props): ReactElement {
  const libs = [
    { title: "Full Stack Open", link: "https://fullstackopen.com/en" },
    {
      title: "React Official Tutorial",
      link: "https://reactjs.org/tutorial/tutorial.html",
    },
    {
      title: "Using React in Visual Studio Code",
      link: "https://code.visualstudio.com/docs/nodejs/reactjs-tutorial",
    },
    {
      title: "Scrimba - Learn React for free interactively",
      link: "https://scrimba.com/g/glearnreact",
    },
    {
      title: "FreeCodeCamp React Challenges",
      link: "https://learn.freecodecamp.org/front-end-libraries/react",
    },
    { title: "React Cheatsheet", link: "https://devhints.io/react" },
    { title: "React Patterns", link: "https://reactpatterns.com/" },
    { title: "Setup Flow with React", link: "https://flow.org/en/docs/react/" },
    {
      title: "Redux Fundamentals",
      link: "https://redux.js.org/tutorials/fundamentals/part-1-overview",
    },
    {
      title: "Fundamentals of Redux Course from Dan Abramov",
      link: "https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867",
    },
    {
      title: "Building React Applications with Idiomatic Redux",
      link: "https://app.egghead.io/courses/building-react-applications-with-idiomatic-redux",
    },
    {
      title: "GraphQL Introduction",
      link: "http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html",
    },
    {
      title: "How to Graphql - The Fullstack Tutorial for GraphQL",
      link: "https://howtographql.com/",
    },
    {
      title: "Official Relay Getting Started",
      link: "https://facebook.github.io/relay/docs/en/introduction-to-relay.html",
    },
    {
      title: "Relay for Visual Learners",
      link: "http://sgwilym.github.io/relay-visual-learners/",
    },
    {
      title: "Getting Started with Relay",
      link: "https://auth0.com/blog/2015/10/06/getting-started-with-relay/",
    },
    {
      title: "Relay and Routing",
      link: "https://medium.com/@cpojer/relay-and-routing-36b5439bad9",
    },
    {
      title: "Trying React Hooks for the first time with Dan Abramov",
      link: "https://www.youtube.com/watch?v=G-aO5hzo1aw",
    },
  ];

  return (
    <>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {libs.map((item) => {
          return <TutorialCard title={item.title} link={item.link} />;
        })}
      </div>

      <div className="m-10 text-center p-3 bg-white rounded-md w-28">
        <p>Total of {libs.length}</p>
      </div>
    </>
  );
}
