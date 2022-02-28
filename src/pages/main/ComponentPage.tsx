import React, { ReactElement } from "react";
import { Card } from "../../components/ui-card";
import { components } from "../../lists/components";

interface Props {}

export default function ComponentPage({}: Props): ReactElement {
  return (
    <>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {components.map((item) => {
          return <Card title={item.title} link={item.link} />;
        })}
      </div>
      <div className="m-10 text-center p-3 bg-white rounded-md w-28">
        <p>Total of {components.length}</p>
      </div>
    </>
  );
}
