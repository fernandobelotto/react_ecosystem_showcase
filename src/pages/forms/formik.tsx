import React, { ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import Description from "../../components/description";

interface Props {}

const code = `import React from "react";
import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
`;
export default function Formik({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Formik"
        subtitle="Build forms in React, without the tears"
        body="Formik is the world's most popular open source form library for React and React Native."
      >
        <SyntaxHighlighter className="mt-10">{code}</SyntaxHighlighter>
      </Description>
    </>
  );
}
