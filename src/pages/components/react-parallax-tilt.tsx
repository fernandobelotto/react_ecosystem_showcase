import React, { ReactElement } from "react";
import Tilt from "react-parallax-tilt";
interface Props {}
export default function ReactParallaxTilt({}: Props): ReactElement {
  return (
    <>
      <div className="flex justify-center items-center h-100 w-full p-10 bg-white rounded-mg">
        {/* @ts-ignore */}
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30}>
          <div className="bg-gray-500 w-48 h-48 flex justify-center items-center rounded-2xl">
            <h1 className="text-xl text-white rounded-lg">
              React Parallax Tilt 👀
            </h1>
          </div>
        </Tilt>
      </div>
    </>
  );
}
