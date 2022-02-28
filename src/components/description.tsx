import React, { ReactElement } from "react";

interface Props {
  title: string;
  subtitle?: string;
  body?: string | JSX.Element;
  children?: JSX.Element | ReactElement;
}

export default function Description({
  title,
  subtitle,
  body,
  children,
}: Props): ReactElement {
  return (
    <>
      <div className="m-10 p-10 bg-white roudned-md prose">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        {body}
        {children}
      </div>
    </>
  );
}
