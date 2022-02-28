import React, { ReactElement } from "react";
import Description from "../../components/description";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Props {}

const code = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}`;
export default function ReactHookForm({}: Props): ReactElement {
  return (
    <>
      <Description
        title="React Hook Form"
        subtitle="Performant, flexible and extensible forms with easy-to-use validation."
      >
        <SyntaxHighlighter language="javascript" style={dracula}>
          {code}
        </SyntaxHighlighter>
      </Description>
    </>
  );
}
