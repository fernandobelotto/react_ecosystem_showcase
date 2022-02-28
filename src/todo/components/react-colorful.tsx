import React, { ReactElement, useState } from "react";
import { HexColorPicker } from "react-colorful";

interface Props {}

export default function ReactColorful({}: Props): ReactElement {
  const [color, setColor] = useState("#aabbcc");

  return (
    <>
      <HexColorPicker color={color} onChange={setColor} />;
    </>
  );
}
