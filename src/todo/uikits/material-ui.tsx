import React, { ReactElement } from "react";
import Description from "../../components/description";
// import Button from '@mui/material/Button';

interface Props {}

export default function MaterialUI({}: Props): ReactElement {
  return (
    <>
      <Description
        title="MUI"
        subtitle="The React UI library you always wanted"
      >
        <p>
          MUI provides a robust, customizable, and accessible library of
          foundational and advanced components, enabling you to build your own
          design system and develop React applications faster.
        </p>
      </Description>

      <div className="p-10 m-10">{/* <Button> Olá Mundo</Button>; */}</div>
    </>
  );
}
